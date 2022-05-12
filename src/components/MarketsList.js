import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';
import { fetchSupportedTokens } from '../firebase';
import Pairs from '../pairs'

export default function MarketsList() {

  const [tokens, setTokens] = useState([]);
  const [logos, setLogos] = useState({});
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
                                <td>0.00</td>
                                <td className="green">+0.00%</td>
                                <td>0.00</td>
                                <td>0.00</td>
                                <td>0.00</td>
                              </tr>
                            )
                          })}
                          


                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  {/* <Tab eventKey="USDT" title="USDT">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Pairs</th>
                            <th>Coin</th>
                            <th>Last Price</th>
                            <th>Change (24H)</th>
                            <th>High (24H)</th>
                            <th>Low (24h)</th>
                            <th>Volume (24h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ETH/USDT
                            </td>
                            <td>
                              <img src={'img/icon/1.png'} alt="eth" /> ETH
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> EOS/USDT
                            </td>
                            <td>
                              <img src={'img/icon/2.png'} alt="vid" /> EOS
                            </td>
                            <td>6984.06</td>
                            <td className="red">-1.65%</td>
                            <td>6554.91</td>
                            <td>6548.06</td>
                            <td>431,684,298.45</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> LTC/USDT
                            </td>
                            <td>
                              <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                            </td>
                            <td>4582.06</td>
                            <td className="green">+2.62%</td>
                            <td>7444.91</td>
                            <td>4646.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> BTF/USDT
                            </td>
                            <td>
                              <img src={'img/icon/4.png'} alt="bitcoin" /> BTF
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.94%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> COTI/USDT
                            </td>
                            <td>
                              <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TRX/USDT
                            </td>
                            <td>
                              <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.71%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XMR/USDT
                            </td>
                            <td>
                              <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.73%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ADA/USDT
                            </td>
                            <td>
                              <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                            </td>
                            <td>7394.06</td>
                            <td className="red">-1.20%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> BNB/USDT
                            </td>
                            <td>
                              <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.74%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> NEO/USDT
                            </td>
                            <td>
                              <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TOMO/USDT
                            </td>
                            <td>
                              <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-4.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MKR/USDT
                            </td>
                            <td>
                              <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.32%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.14</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ZEC/USDT
                            </td>
                            <td>
                              <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                            </td>
                            <td>7394.06</td>
                            <td className="green">+5.53%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.22</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> VSYS/USDT
                            </td>
                            <td>
                              <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.52%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ATOM/USDT
                            </td>
                            <td>
                              <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                            </td>
                            <td>7394.06</td>
                            <td className="red">-2.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.21</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MTV/USDT
                            </td>
                            <td>
                              <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                            </td>
                            <td>7394.06</td>
                            <td className="green">+1.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.32</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XTZ/USDT
                            </td>
                            <td>
                              <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.25</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  <Tab eventKey="BTF" title="BTF">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Pairs</th>
                            <th>Coin</th>
                            <th>Last Price</th>
                            <th>Change (24H)</th>
                            <th>High (24H)</th>
                            <th>Low (24h)</th>
                            <th>Volume (24h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ETH/BTF
                            </td>
                            <td>
                              <img src={'img/icon/1.png'} alt="eth" /> ETH
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> EOS/BTF
                            </td>
                            <td>
                              <img src={'img/icon/2.png'} alt="vid" /> EOS
                            </td>
                            <td>6984.06</td>
                            <td className="red">-1.65%</td>
                            <td>6554.91</td>
                            <td>6548.06</td>
                            <td>431,684,298.45</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> LTC/BTF
                            </td>
                            <td>
                              <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                            </td>
                            <td>4582.06</td>
                            <td className="green">+2.62%</td>
                            <td>7444.91</td>
                            <td>4646.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> BTF/BTF
                            </td>
                            <td>
                              <img src={'img/icon/4.png'} alt="bitcoin" /> BTF
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.94%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> COTI/BTF
                            </td>
                            <td>
                              <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TRX/BTF
                            </td>
                            <td>
                              <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.71%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XMR/BTF
                            </td>
                            <td>
                              <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.73%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ADA/BTF
                            </td>
                            <td>
                              <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                            </td>
                            <td>7394.06</td>
                            <td className="red">-1.20%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> BNB/BTF
                            </td>
                            <td>
                              <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.74%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> NEO/BTF
                            </td>
                            <td>
                              <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TOMO/BTF
                            </td>
                            <td>
                              <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-4.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MKR/BTF
                            </td>
                            <td>
                              <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.32%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.14</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ZEC/BTF
                            </td>
                            <td>
                              <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                            </td>
                            <td>7394.06</td>
                            <td className="green">+5.53%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.22</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> VSYS/BTF
                            </td>
                            <td>
                              <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.52%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ATOM/BTF
                            </td>
                            <td>
                              <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                            </td>
                            <td>7394.06</td>
                            <td className="red">-2.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.21</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MTV/BTF
                            </td>
                            <td>
                              <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                            </td>
                            <td>7394.06</td>
                            <td className="green">+1.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.32</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XTZ/BTF
                            </td>
                            <td>
                              <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.25</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab>
                  <Tab eventKey="AVAX" title="AVAX">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Pairs</th>
                            <th>Coin</th>
                            <th>Last Price</th>
                            <th>Change (24H)</th>
                            <th>High (24H)</th>
                            <th>Low (24h)</th>
                            <th>Volume (24h)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ETH/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/1.png'} alt="eth" /> ETH
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> EOS/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/2.png'} alt="vid" /> EOS
                            </td>
                            <td>6984.06</td>
                            <td className="red">-1.65%</td>
                            <td>6554.91</td>
                            <td>6548.06</td>
                            <td>431,684,298.45</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> LTC/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/3.png'} alt="bitcoin" /> LTC
                            </td>
                            <td>4582.06</td>
                            <td className="green">+2.62%</td>
                            <td>7444.91</td>
                            <td>4646.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> AVAX/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/4.png'} alt="bitcoin" /> AVAX
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.94%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> COTI/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/5.png'} alt="bitcoin" /> COTI
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TRX/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/6.png'} alt="bitcoin" /> TRX
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.71%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.53</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XMR/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/7.png'} alt="bitcoin" /> XMR
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.73%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ADA/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/8.png'} alt="bitcoin" /> ADA
                            </td>
                            <td>7394.06</td>
                            <td className="red">-1.20%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> BNB/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/9.png'} alt="bitcoin" /> BNB
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.74%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.23</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> NEO/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/10.png'} alt="bitcoin" /> NEO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-0.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.77</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> TOMO/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/11.png'} alt="bitcoin" /> TOMO
                            </td>
                            <td>7394.06</td>
                            <td className="red">-4.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.33</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MKR/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/12.png'} alt="bitcoin" /> MKR
                            </td>
                            <td>7394.06</td>
                            <td className="green">+0.32%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.14</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ZEC/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/13.png'} alt="bitcoin" /> ZEC
                            </td>
                            <td>7394.06</td>
                            <td className="green">+5.53%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.22</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> VSYS/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/14.png'} alt="bitcoin" /> VSYS
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.52%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.35</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> ATOM/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/15.png'} alt="bitcoin" /> ATOM
                            </td>
                            <td>7394.06</td>
                            <td className="red">-2.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.21</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> MTV/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/16.png'} alt="bitcoin" /> MTV
                            </td>
                            <td>7394.06</td>
                            <td className="green">+1.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.32</td>
                          </tr>
                          <tr data-href="exchange-light.html">
                            <td>
                              <i className="icon ion-md-star"></i> XTZ/AVAX
                            </td>
                            <td>
                              <img src={'img/icon/17.png'} alt="bitcoin" /> XTZ
                            </td>
                            <td>7394.06</td>
                            <td className="red">-3.78%</td>
                            <td>7444.91</td>
                            <td>7267.06</td>
                            <td>431,687,258.25</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Tab> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
