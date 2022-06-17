import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { Tabs, Tab } from 'react-bootstrap';
import Slider from 'react-input-slider';


export default function MarketTrade({activePair, user, price, setPrice, amount, setAmount, volume, setVolume, buySell, setBuySell, createOrder, createOrderLoading}) {
  
  const { active, chainId, account } = useWeb3React();
  const [orderType, setOrderType] = useState('limit');
  const [sliderState, setSliderState] = useState({ x: 10, y: 10 });

  useEffect(() => {
    if(buySell === 'sell'){
      setVolume(((sliderState.x/100) * user[activePair[0]]?.available))
    } else {
      setVolume(((sliderState.x/100) * user[activePair[1]]?.available))
    }
  }, [sliderState])


  const isNumber = (val) => {
    return(typeof(val) === 'number');
  }

  const createBuyOrder = (e) => {
    e.preventDefault();
    if(orderType === 'limit' && (price <= 0 || volume <= 0 || volume > user[activePair[1]]?.available)) return;
    if(orderType === 'market' && (volume<= 0 || volume > user[activePair[1]]?.available)) return;
    
    createOrder(orderType)
  }

  const createSellOrder = (e) => {
    e.preventDefault();
    if(orderType === 'limit' && (price <= 0 || volume <= 0 || volume > user[activePair[0]]?.available)) return;
    if(orderType === 'market' && (volume<= 0 || volume > user[activePair[0]]?.available)) return;
    createOrder(orderType)
  }

  return (
    <>
      <div className="market-trade" style={{flex: 1.6}}>
        <Tabs defaultActiveKey="buy" onSelect={(e) => setBuySell(e)}>
          <Tab eventKey="buy" title="Buy">
            <div className="d-flex justify-content-between">
              <div className="market-trade-buy">
                <form action="#">
                  <div class="form-group">
                    <select onChange={(e) => setOrderType(e.target.value)} class="form-control form-control-sm" id="exampleSelect">
                      <option value='limit' selected={orderType === 'limit'}>Limit</option>
                      <option value='market' selected={orderType === 'market'}>Market</option>
                    </select>
                </div>
                  {orderType !== 'market' && 
                    <>
                      <p>Price</p>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control form-control-sm price"
                          placeholder="Price"
                          required
                          value={price}
                          onChange={(e) => setPrice(parseFloat(e.target.value))}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text price">{activePair[1]}</span>
                        </div>
                      </div>
                      
                      <p>Amount Get ({activePair[0]})</p>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control form-control-sm amount disabled"
                          placeholder="Amount"
                          required
                          value={amount}
                          disabled
                          onChange={(e) => setAmount(parseFloat(e.target.value))}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text amount">{activePair[0]}</span>
                        </div>
                      </div>
                    </>
                  }
                  <p>Volume ({activePair[1]})</p>
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control form-control-sm amount"
                      placeholder="Amount"
                      required
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text amount">{activePair[1]}</span>
                    </div>
                  </div>
                  <div>
                    <Slider axis="x" x={sliderState.x} onChange={setSliderState} styles={{track: {backgroundColor: '#fff', width: '100%'}, active: {backgroundColor: 'orange'}}} />
                  </div>
                  {volume > user[activePair[1]]?.available && <p className='text-danger'>Insufficient Amount</p>}
                  <p>
                    Available: <span>{user.address && user[activePair[1]]?.available? user[activePair[1]]?.available :  '----'} {activePair[1]}</span>
                  </p>
                  <p>
                    Locked: <span>{user.address && user[activePair[1]]?.locked? user[activePair[1]]?.locked :  '----'} {activePair[1]}</span>
                  </p>
                  <button type="submit" onClick={(e) => createBuyOrder(e)} className="btn btn-sm buy" disabled={(!active || createOrderLoading || (volume > user[activePair[1]]?.available))}>
                    {active? (createOrderLoading? 'Loading...' : (volume > user[activePair[1]]?.available? 'Insufficient Amount' : 'Buy')) : 'Please Connect Wallet'}
                  </button>
                </form>
              </div>
            </div>
          </Tab>
          <Tab eventKey="sell" title="Sell">
            <div className="d-flex justify-content-between">
              <div className="market-trade-sell">
                <form action="#">
                  <div class="form-group">
                    <select onChange={(e) => setOrderType(e.target.value)} class="form-control form-control-sm" id="exampleSelect">
                      <option value='limit' selected={orderType === 'limit'}>Limit</option>
                      <option value='market'selected={orderType === 'market'}>Market</option>
                    </select>
                </div>
                  {orderType !== 'market' && 
                    <>
                      <p>Price</p>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control form-control-sm price"
                          placeholder="Price"
                          required
                          value={price}
                          onChange={(e) => setPrice(parseFloat(e.target.value))}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text price">{activePair[1]}</span>
                        </div>
                      </div>
                      
                      <p>Amount Get ({activePair[1]})</p>
                      <div className="input-group input-group-sm">
                        <input
                          type="number"
                          className="form-control form-control-sm amount disabled"
                          placeholder="Amount"
                          required
                          value={amount}
                          disabled
                          onChange={(e) => setAmount(parseFloat(e.target.value))}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text amount">{activePair[1]}</span>
                        </div>
                      </div>
                    </>
                  }
                  <p>Volume ({activePair[0]})</p>
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control form-control-sm amount"
                      placeholder="Amount"
                      required
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text amount">{activePair[0]}</span>
                    </div>
                  </div>
                    <div >
                    <Slider axis="x" x={sliderState.x} onChange={setSliderState} styles={{track: {backgroundColor: '#fff', width: '100%'}, active: {backgroundColor: 'orange'}}} />
                  </div>
                  
                  {volume > user[activePair[0]]?.available && <p className='text-danger'>Insufficient Amount</p>}
                  <p>
                    Available: <span>{user.address && user[activePair[1]]?.available? user[activePair[0]]?.available :  '----'} {activePair[0]}</span>
                  </p>
                  <p>
                    Locked: <span>{user.address && user[activePair[0]]?.locked? user[activePair[0]]?.locked :  '----'} {activePair[0]}</span>
                  </p>
                  <button type="submit"  onClick={(e) => createSellOrder(e)} className="btn sell" disabled={(!active || createOrderLoading || (volume > user[activePair[0]]?.available))}>
                    {active? (createOrderLoading? 'Loading...' :(volume > user[activePair[0]]?.available? 'Insufficient Amount' : 'Sell')) : 'Please Connect Wallet'}
                  </button>
                </form>
              </div>
            </div>
          </Tab>
          <Tab eventKey="swap" title="Swap">
            <div className="d-flex justify-content-between">
              <div className="market-trade-sell"></div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
