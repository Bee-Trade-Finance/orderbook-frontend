import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Card, Form, InputGroup, Button, ListGroup } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import { ToastContainer, toast } from 'react-toastify';
import { getTokenBySymbol } from '../tokenList';

import 'react-toastify/dist/ReactToastify.css';
import displayToast from '../utils/displayToast';

import { ThemeConsumer } from '../context/ThemeContext';
import ERC20ABI from "../abis/ERC20ABI.json";


import {
    stakeToken, 
    unstakeToken, 
    unstakeAllTokens, 
    getAmountStakedUser, 
    getTotalStaked, 
    getPendingRewards, 
    claimRewards,
    getAPY,
    getEndsIn
} from '../helpers/contract';

export default function StakeToken() {
    const [tokenDetails, setTokenDetails] = useState({});
    const [APY, setAPY] = useState(0);
    const [totalStaked, setTotalStaked] = useState(0);
    const [userStaked, setUserStaked] = useState(0);
    const [pendingRewards, setPendingRewards] = useState(0);
    const [endsIn, setEndsIn] = useState(0);
    const [inputVal, setInputVal] = useState(0)
    const { library, activate, deactivate, active, chainId, account } = useWeb3React();
    let { token } = useParams();

    async function fetchDetails(){
        let _APY = await getAPY(library);
        setAPY(_APY);

        let _totalStaked = await getTotalStaked(library);
        setTotalStaked(_totalStaked);

        let _userStaked = await getAmountStakedUser(library, account);
        setUserStaked(_userStaked);

        let _pendingRewards = await getPendingRewards(library, account);
        setPendingRewards(_pendingRewards);

        let _endsIn = await getEndsIn(library);
        setEndsIn(_endsIn);
    }

    async function _claimRewards(){
        let res = await claimRewards(library);
        displayToast(toast, res);

    }

    async function _stakeToken(){
        if(inputVal > 0){
            let res = await stakeToken(library, tokenDetails.address, inputVal, ERC20ABI);
            displayToast(toast, res);
            fetchDetails()
        }
    }

    async function _unStakeToken(){
        if(inputVal > 0){
            let res = await unstakeToken(library, inputVal);
            displayToast(toast, res);
            fetchDetails()
        }
    }

    useEffect(() => {
        if(library){
            fetchDetails();
        }
    }, [library, account])

    useEffect(() => {
        setTokenDetails(getTokenBySymbol(token));
    }, [])
    
    return (
        <ThemeConsumer>
              {({data}) => {
                  return (
                    <div className="container-fluid p-0 m-0 mb-5">
                        <ToastContainer theme={data.theme} style={{ padding: '10px' }}  />
                        <div className="row col-12 d-flex justify-content-center p-0 m-0 mb-5">
                      
                            <div className='col-lg-8 col-md-10 col-sm-11 mt-5 p-2'>
                                <p className='h2 text-warning'>{token} Staking</p>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <Card
                                            bg='warning'
                                            text={'dark'}
                                            className="mb-2"
                                            >
                                            <Card.Header>Rewards distributed once per day</Card.Header>
                                            <Card.Body>
                                                <Card.Title>
                                                    <img src={tokenDetails.logoUrl} width={40} className="m-2"/>
                                                    {token} 
                                                </Card.Title>
                                                <div className='row'>
                                                    <div className='col-4'>
                                                        <p className='text-muted'>APY</p>
                                                        <h5>{APY}%</h5>
                                                    </div>
                                                    <div className='col-4'>
                                                        <p className='text-muted'>Total Staked ({tokenDetails.symbol})</p>
                                                        <h5>{totalStaked}</h5>
                                                    </div>
                                                    <div className='col-4'>
                                                        <p className='text-muted'>Lock Period</p>
                                                        <h5>{365} Days</h5>
                                                    </div>
                                                </div>
                                                <Card.Footer style={{backgroundColor: '#ccc', borderRadius: "8px"}}>
                                                    <h5>Your Staking Details</h5>
                                                    <div className='row'>
                                                        <div className='col-6'>
                                                            <p className='text-muted'>Staked</p>
                                                            <h5>{userStaked} {tokenDetails.symbol}</h5>
                                                        </div>
                                                        <div className='col-6'>
                                                            <p className='text-muted'>Pending Rewards</p>
                                                            <h5>{pendingRewards} {tokenDetails.symbol}</h5>
                                                        </div>
                                                    </div>
                                                    <div className="d-block gap-2 mt-5">
                                                        <Button onClick={() => _claimRewards()} className='mt-2' variant="secondary" size="lg" style={{width: '100%'}}>
                                                            Claim Rewards
                                                        </Button>
                                                    </div>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className='col-lg-6'>
                                        <Card
                                            bg='transparent'
                                            border='warning'
                                            text={data.theme==='light'? 'dark' : 'light'}
                                            className="mb-2"
                                            >
                                            <Card.Body>
                                                <Card.Title className='text-warning'> Stake / Unstake </Card.Title>
                                                <Card.Text>
                                                    Quickly Stake / Unstake Your Tokens From Here. You Might not be able to unstake some tokens based on the staking period
                                                </Card.Text>
                                                <InputGroup className='mt-5'>
                                                    <Form.Control size="lg" type="number" placeholder="Enter Amount" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
                                                    <InputGroup.Text className='bg-warning warning text-white' id="basic-addon2">{token}</InputGroup.Text>
                                                </InputGroup>
                                                <div className="d-block gap-2 mt-5">
                                                    <Button onClick={() => _stakeToken()} className='mt-2' variant="secondary" size="lg" style={{width: '100%'}}>
                                                        Stake
                                                    </Button>
                                                    <Button onClick={() => _unStakeToken()} className='mt-2' variant="warning" size="lg" style={{width: '100%'}}>
                                                        Unstake
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  )
              }}
        </ThemeConsumer>
    );
}
