import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { useWeb3React } from '@web3-react/core'
import { fetchSupportedTokens, fetchStakingDetails } from '../firebase';

import {
  getAmountStakedUser, 
  getTotalStaked, 
  getPendingRewards, 
  getAPY,
  getEndsIn
} from '../helpers/contract'; 

export default function StakingList() {

  const [tokens, setTokens] = useState([]);
  const [stakingList, setstakingList] = useState([]);
  const [logos, setLogos] = useState({});
  const [APY, setAPY] = useState(0);
  const [totalStaked, setTotalStaked] = useState(0);
  const [userStaked, setUserStaked] = useState(0);
  const [pendingRewards, setPendingRewards] = useState(0);
  const [endsIn, setEndsIn] = useState(0);
  const { library, activate, deactivate, active, chainId, account } = useWeb3React();
  const history = useHistory();

  async function fetchTokensList(){
    let data = await fetchSupportedTokens();
    setTokens(data);
    let _stakingList = await fetchStakingDetails();
    setstakingList(_stakingList);

     let _logos = {};
     _stakingList.filter(item => {
      let logo = data.find(token => token.address === item.tokenAddress).logoUrl;
      _logos[item.tokenAddress] = logo;
    });
    setLogos(_logos);
    fetchDetails();
  }

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

  useEffect(() => {
    fetchTokensList()
  }, [])

  return (
    <>
      <div className="markets pb70">
        <div className="container-fluid p-0">
          <div className="row p-0">
            <div className="col-md-12">
              <div className="markets-pair-list">
                <Tabs defaultActiveKey="allpairs">
                  <Tab eventKey="allpairs" title="★ All Pairs">
                    <div className="table-responsive">
                      <table className="table star-active">
                        <thead>
                          <tr>
                            <th>Coin</th>
                            <th>Days Left</th>
                            <th>APY</th>
                            <th>Total Staked</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stakingList.map((item, i) => {
                            return(
                              <tr key={i} data-href="exchange-light.html" onClick={() => history.push(`/stake/${item.symbol}`)}>
                                <td>
                                  <img src={logos[item.tokenAddress]} />{item.symbol}
                                </td>
                                <td>{endsIn} Days</td>
                                <td className="green">{APY}%</td>
                                <td>{totalStaked}</td>
                              </tr>
                            )
                          })}
                          


                        </tbody>
                      </table>
                    </div>
                  </Tab>
                 
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
