import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { fetchSupportedTokens } from '../firebase';
import {getPairData} from '../api'
import Pairs from '../pairs'

export default function MarketsList() {

  const [tokens, setTokens] = useState([]);
  const [logos, setLogos] = useState({});
  const [pairData, setPairData] = useState({});
  const history = useHistory();

  async function fetchTokensList(){
    let data = await fetchSupportedTokens();
    setTokens(data);
     let _logos = {};
    Pairs.filter(pair => {
      let _pair = pair.split('-')[0];
      let logo = data.find(token => token.symbol === _pair).logoUrl;
      _logos[_pair] = logo;
    });
    setLogos(_logos);
  }

  async function fetchPairData(){
    let newData = {}
    for (let index in Pairs){
      let pair = Pairs[index];
      let res = await getPairData(pair);
      newData[pair] = res;
    }
    setPairData(newData);
  }

  useEffect(() => {
    fetchTokensList()
    fetchPairData()
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
                            <th>Pairs</th>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>Change (24H)</th>
                            <th>High (24H)</th>
                            <th>Low (24h)</th>
                            <th>Volume (24h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Pairs.map((pair, i) => {
                            return(
                              <tr data-href="exchange-light.html" onClick={() => history.push(`/trade/${pair}`)}>
                                <td>
                                  <i className="icon ion-md-star"></i> {pair}
                                </td>
                                <td>
                                  <img src={logos[pair.split('-')[0]]} /> {pair.split('-')[0]}
                                </td>
                                <td>{pairData[pair]?.price}</td>
                                <td className={Math.sign(pairData[pair]?.priceChange) === 1? 'green' : 'red'}>{Math.sign(pairData[pair]?.priceChange) === 1? '+' : '-'}{pairData[pair]?.priceChange}%</td>
                                <td>{pairData[pair]?.high}</td>
                                <td>{pairData[pair]?.low}</td>
                                <td>{pairData[pair]?.totalAmountTraded}</td>
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
