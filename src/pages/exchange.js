import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { ToastContainer, toast } from 'react-toastify';
import HistoryOrder from '../components/HistoryOrder';
import MarketTrade from '../components/MarketTrade';
import OrderBook from '../components/OrderBook';
import TradingChart from '../components/TradingChart';
import { ThemeConsumer } from '../context/ThemeContext';
import {  useWindowSize } from '@react-hook/window-size';
import {fetchOrCreateUser, onSnapshot, query, collection, db, where, fetchSupportedTokens} from '../firebase';
import Pairs from '../pairs'
import { getTokensBalances, sendOrder, removeOrder } from '../helpers/contract';
import displayToast from '../utils/displayToast';



const Exchange = () => {
  const { library, activate, deactivate, active, chainId, account } = useWeb3React();
  const [price, setPrice] = useState(0)
  const [amount, setAmount] = useState(0)
  const [volume, setVolume] = useState(0)
  const [buySell, setBuySell] = useState('buy');
  const [createOrderLoading, setCreateOrderLoading ] = useState(false)
  let { pair } = useParams();
  const [activePair, setActivePair] = useState(pair.split('-'));
  let history = useHistory();
  const [user, setUserData] = useState({
    address: 'address',
    [pair.split('-')[0]]: 0,
    [pair.split('-')[1]]: 0,
  });
  const [buyOrders, setBuyOrders] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);
  const [userTrades, setUserTrades] = useState([]);
  const [pairData, setPairData] = useState([]);
  const [width, height] = useWindowSize()
  const breakPoint = 767;

  const buyOrdersSocket = () => {
    const q = query(collection(db, `${pair}-BUY`), where("pair", "==", pair));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
          orders.push(doc.data());
      });
      console.log("Current Buy Orders: ", orders);
      let sortedOrders = orders.sort((a, b) => b.price - a.price);
      setBuyOrders(sortedOrders);
    });
  }

  const sellOrdersSocket = () => {
    const q = query(collection(db, `${pair}-SELL`), where("pair", "==", pair));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
          orders.push(doc.data());
      });
      console.log("Current Sell Orders: ", orders);
      let sortedOrders = orders.sort((a, b) => b.price - a.price);
      setSellOrders(sortedOrders);
    });
  }

  const tradesSocket = () => {
    const q = query(collection(db, `${pair}-TRADES`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const orders = [];
      querySnapshot.forEach((doc) => {
          orders.push(doc.data());
      });
      calculatePairData(orders);
      const usersOrders = orders.filter(order => order.account === account);
      console.log("Trade History: ", usersOrders);
      let sortedUserOrders = usersOrders.sort((a, b) => b.date - a.date);
      setUserTrades(sortedUserOrders);
    });
  }

  const calculatePairData = (trades) => {
    let returnData = {
      totalTrades: 0,
      totalAmountTraded: 0,
      high: 0,
      low: 0,
      price: 0,
      priceChange: 0
    };
    let limitDate = Date.now() - 86400000; // 24hrs in millisecs
    let daysTrades = trades.filter(trade => trade.date >= limitDate);
    let sortedDaysTrades = daysTrades.sort((a,b)=> b.date-a.date);
    
    sortedDaysTrades.forEach((trade, i) => {
      returnData.totalAmountTraded += trade.amountA;
      if(i===0) returnData.low = trade.price;
      if(trade.price < returnData.low) returnData.low = trade.price;
      if(trade.price > returnData.high) returnData.high = trade.price;
    });

    let currentPrice = sortedDaysTrades[0]?.price? sortedDaysTrades[0].price : 0;
    let openingPrice = sortedDaysTrades[sortedDaysTrades.length-1]?.price? sortedDaysTrades[sortedDaysTrades.length-1].price : 0;

    let priceChange = ((currentPrice-openingPrice) / openingPrice) * 100;

    returnData.price = currentPrice.toFixed(4);
    returnData.priceChange = priceChange.toFixed(2);
    returnData.totalTrades = sortedDaysTrades.length;

    setPairData(returnData);
    if(price <= 0) setPrice(returnData.price);
  }

  

  useEffect(() => {
    if(!pair) history.push('/trade/BTF-USDT');
    fetchTokensList();
    if(!Pairs.includes(pair)) return history.push('/trade/BTF-USDT')
    buyOrdersSocket();
    sellOrdersSocket();
  }, [])

  useEffect(() => {
    if(price === 0) return;
    if(buySell === 'buy'){
      setAmount(volume / price)
    } else {
      setAmount(volume * price)
    }
  }, [price])

  useEffect(() => {
    if(volume === 0) return;
    if(buySell === 'buy'){
      setAmount(volume/price)
    } else {
      setAmount(volume * price)
    }
  }, [volume])

  useEffect(() => {
    setAmount(0);
    setVolume(0);
  }, [buySell])

  useEffect(() => {
    if(tokens.length > 0){
      getBalance();
    }
  }, [tokens, account])

  async function fetchUserData(){
    let {address} = await fetchOrCreateUser(account);
    if(address){
      setUserData({...user, address});
    }
  }

  async function fetchTokensList(){
    let data = await fetchSupportedTokens();
    setTokens(data);
  }

  async function getBalance(){
    let res = await getTokensBalances(library, tokens);
    let _userData = {address: account};
    pair.split('-').forEach((_pair) => {
      let dat = tokens.find(item => item.symbol === _pair);
      _userData[_pair] = res[dat.address];
    })
    setUserData(_userData);
  }

  useEffect(() => {
    if(account){
      fetchUserData();
      tradesSocket();
    }
  }, [account])

  const createOrder = async (orderType) => {
    setCreateOrderLoading(true)

    let orderData = {
      id: Math.random().toString(16).slice(2),
      pair,
      token: buySell === 'buy'? tokens.find(item => item.symbol === activePair[1]).address : tokens.find(item => item.symbol === activePair[0]).address,
      price, 
      volume, 
      buySell, 
      orderType, 
      date: Date.now(),
    }

    let res = await sendOrder(library, orderData);
    setCreateOrderLoading(false)
    displayToast(toast, res);
    getBalance();
  }

  const deleteOrder = async (orderData) => {
    let token = orderData.buySell === 'buy'? tokens.find(item => item.symbol === orderData.pair.split('-')[1]).address : tokens.find(item => item.symbol === orderData.pair.split('-')[0]).address;
    orderData.token = token;
    let res = await removeOrder(library, orderData);
    displayToast(toast, res);

  }

  const autoFillOrder = (price, volume, buySell) => {
    if(buySell === 'buy'){
      setPrice(price);
      setVolume(volume/price)
    } else {
      setPrice(price);
      setVolume(volume*price)
    }
    
  }

  return (
    <>
      <div className="container-fluid mtb15 no-fluid">
        <ThemeConsumer>
          {({data}) => <ToastContainer theme={data.theme} style={{ padding: '10px' }}  /> }
        </ThemeConsumer>
        <div className="row sm-gutters">
          {width > breakPoint &&
            <div className="col-sm-12 col-md-3">
              <MarketTrade 
                activePair={activePair} 
                user={user} 
                price={price} 
                setPrice={setPrice}
                amount={amount}
                setAmount={setAmount}
                volume={volume}
                setVolume={setVolume}
                buySell={buySell}
                setBuySell={setBuySell}
                createOrder={createOrder}
                createOrderLoading={createOrderLoading}
                currentPrice={pairData.price}
                
                />
              {/* <MarketPairs /> */}
            </div>
          }
          <div className="col-sm-12 col-md-6">
            <ThemeConsumer>
              {({data}) => {
                return <TradingChart theme={data.theme} width={width} pair={activePair} pairData={pairData} />
              }}
            </ThemeConsumer>
            {width < breakPoint &&
              <div style={{display: 'inline-flex', flexDirection: 'row', flex: 1}}>
                <MarketTrade 
                  activePair={activePair} 
                  user={user} 
                  price={price} 
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  volume={volume}
                  setVolume={setVolume}
                  buySell={buySell}
                  setBuySell={setBuySell}
                  createOrder={createOrder}
                  createOrderLoading={createOrderLoading}
                  currentPrice={pairData.price}
                  
                  />

                  <OrderBook 
                    buyOrders={buyOrders} 
                    sellOrders={sellOrders} 
                    pair={pair} 
                    autoFillOrder={autoFillOrder} 
                    width={width} 
                    breakPoint={breakPoint} 
                    pairData={pairData}
                  />
              </div>
            
            }
            <ThemeConsumer>
              {({data}) => {
              return <HistoryOrder orders={[...buyOrders, ...sellOrders]} user={user} theme={data.theme} deleteOrder={deleteOrder} userTrades={userTrades} />
              }}
            </ThemeConsumer>
          </div>
          <div className="col-md-3 mb-5">
            {
              width > breakPoint && 
              <OrderBook 
                buyOrders={buyOrders} 
                sellOrders={sellOrders} 
                pair={pair} 
                autoFillOrder={autoFillOrder} 
                pairData={pairData}
              />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Exchange
