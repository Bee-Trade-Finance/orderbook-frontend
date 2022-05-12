import {useState, useEffect } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { ThemeConsumer } from '../context/ThemeContext';
import { fetchSupportedTokens } from '../firebase'
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';

import BeeTradeOrderbookABI from "../abis/BeeTradeOrderbook.json";
import {getTokensBalances, depositAVAX, depositToken, withdrawAVAX, withdrawToken} from "../helpers/contract";
import 'react-toastify/dist/ReactToastify.css';
import displayToast from '../utils/displayToast';


export default function Wallet() {
  const [tokens, setTokens ] = useState([])
  const [balances, setBalances] = useState({});
  const [loading, setLoading] = useState({});
  const [inputs, setInputs] = useState({});
  const { library, activate, deactivate, active, chainId, account } = useWeb3React();
  const { NODE_ENV, REACT_APP_CONTRACT_ADDRESS_TESTNET, REACT_APP_CONTRACT_ADDRESS } = process.env;

  async function fetchTokensList(){
    let data = await fetchSupportedTokens();
    setTokens(data);
  }

  useEffect(() => {
    fetchTokensList();
  }, [])

  useEffect(() => {
    if(tokens.length > 0){
      getBalance();
    }
    

  }, [tokens, account])

  async function getBalance(){
    let res = await getTokensBalances(library, tokens);
    setBalances(res);
  }

  const _depositToken = async (address, abi) => {
    if(!inputs[address]) return;
    setLoading({...loading, [address]: true});
    if(address === process.env.REACT_APP_ZERO_ADDRESS){
      let res = await depositAVAX(library, inputs[address]);
      setLoading({...loading, [address]: false});
      displayToast(toast, res);
      getBalance();
    } else {
      let res = await depositToken(library, address , inputs[address], abi);
      setLoading({...loading, [address]: false});
      displayToast(toast, res);
      getBalance();

    }
    // if(library){
    //   // let res = await library.getBalance("0xa9a02aa338DdbD7ffd952799bA006c45CC651bF3");
      // const signer = library.getSigner();
    //   const beetradeOrderbookContract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS_TESTNET, BeeTradeOrderbookABI, signer);
    //   let res = await beetradeOrderbookContract.getAvailableAVAXBalance();
    //   console.log("res", ethers.utils.formatEther(res))
      // const tx = signer.sendTransaction({
      //   to: "0xB1b3287c61fa760987fB4228cBbed8D4cc653a97",
      //   value: ethers.utils.parseEther("1.0")
      // });
    //   // console.log('provider', ethers.utils.formatEther(res));
    // }
    
  }

  const _withdrawToken = async (address) => {
    if(!inputs[address]) return;
    setLoading({...loading, [address]: true});
    if(address === process.env.REACT_APP_ZERO_ADDRESS){
      let res = await withdrawAVAX(library, inputs[address]);
      setLoading({...loading, [address]: false});
      displayToast(toast, res);
      getBalance();
    } else {
      let res = await withdrawToken(library, address , inputs[address]);
      setLoading({...loading, [address]: false});
      displayToast(toast, res);
      getBalance();

    }
  }

  return (
    <>
      <ThemeConsumer>
        {({data}) => {
          return (
            <div className="container-fluid p-0 m-0">
              <div className="row col-12 d-flex justify-content-center p-0 m-0">
                <ToastContainer theme={data.theme} style={{ padding: '10px' }}  />
                <div className='col-lg-8 col-md-10 col-sm-11 mt-5 p-2'>
                  <p className='h2 text-warning'>Your Wallet Balances</p>
                  {tokens.map((token, i) => {
                    return (
                      <div key={i}>
                        <div className={`d-flex justify-content-between align-items-center mt-5 ${data.theme === 'light'? 'text-dark' : 'text-light'}`}>
                          <div className="d-flex">
                            <img src={token.logoUrl} alt="btc" style={{height: 40}}/>
                            <div className='ml-3'>
                              <h2>{token.symbol}</h2>
                              <p>{token.name}</p>
                            </div>
                          </div>
                          <div>
                            <h3>{balances[token.address]? balances[token.address] : '---'}</h3>
                            <p className="text-right">
                              Available
                            </p>
                          </div>
                        </div>
                        <InputGroup>
                          <FormControl
                            type="number"
                            placeholder="Enter Amount Here"
                            onChange={(e) => setInputs({...inputs, [token.address]: e.target.value})}
                          />
                          <Button disabled={loading[token.address]} variant="danger" onClick={() => _depositToken(token.address, token.abi)}>{loading[token.address]? '...': 'Deposit'}</Button>
                          <Button disabled={loading[token.address]} variant="secondary" onClick={() => _withdrawToken(token.address)}>{loading[token.address]? '...': 'Withdraw'}</Button>
                        </InputGroup>
                      </div>
                    )
                  })}


                </div>
              </div>
            </div>
          )
        }}
      </ThemeConsumer>

      
    </>
  );
}
