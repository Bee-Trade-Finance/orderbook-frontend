import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default function MarketPairs() {
  return (
    <>
      <div className="market-pairs">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <i className="icon ion-md-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <Tabs defaultActiveKey="AVAX">
          <Tab eventKey="star" title="★">
            <table className="table star-active">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/AVAX
                  </td>
                  <td>0.00020255</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/AVAX
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+5.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/AVAX
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-1.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/AVAX
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="AVAX" title="AVAX">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/AVAX
                  </td>
                  <td>0.00020255</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/AVAX
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+5.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/AVAX
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-1.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/AVAX
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/AVAX
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/AVAX
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/AVAX
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/AVAX
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/AVAX
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/AVAX
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/AVAX
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/AVAX
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/AVAX
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/AVAX
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/AVAX
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> NEO/AVAX
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/AVAX
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/AVAX
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/AVAX
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/AVAX
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/AVAX
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/AVAX
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/AVAX
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/AVAX
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/AVAX
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="eth" title="ETH">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVAX/ETH
                  </td>
                  <td>0.00020255</td>
                  <td className="green">+1.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/ETH
                  </td>
                  <td>0.00013192</td>
                  <td className="red">-0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/ETH
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/ETH
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/ETH
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/ETH
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/ETH
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/ETH
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/ETH
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/ETH
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/ETH
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/ETH
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/ETH
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> NEO/ETH
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/ETH
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/ETH
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/ETH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/ETH
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/ETH
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/ETH
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/ETH
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/ETH
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/ETH
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="neo" title="NEO">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/NEO
                  </td>
                  <td>0.00350255</td>
                  <td className="red">-6.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/NEO
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/NEO
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/NEO
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/NEO
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/NEO
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/NEO
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/NEO
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/NEO
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/NEO
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/NEO
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/NEO
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/NEO
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/NEO
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/NEO
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> NEO/NEO
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/NEO
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/NEO
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/NEO
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/NEO
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/NEO
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/NEO
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/NEO
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/NEO
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/NEO
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="usdt" title="USDT">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/USDT
                  </td>
                  <td>0.00350255</td>
                  <td className="red">-2.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/USDT
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+6.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/USDT
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/USDT
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/USDT
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/USDT
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/USDT
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/USDT
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/USDT
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/USDT
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/USDT
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/USDT
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/USDT
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> USDT/USDT
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/USDT
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/USDT
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/USDT
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/USDT
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/USDT
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/USDT
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/USDT
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/USDT
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/USDT
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="dai" title="DAI">
            <table className="table">
              <thead>
                <tr>
                  <th>Pairs</th>
                  <th>Last Price</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/DAI
                  </td>
                  <td>0.05320255</td>
                  <td className="green">+6.58%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KCS/DAI
                  </td>
                  <td>0.00013192</td>
                  <td className="green">+0.6%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/DAI
                  </td>
                  <td>0.00002996</td>
                  <td className="red">-0.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> VET/DAI
                  </td>
                  <td>0.00000103</td>
                  <td className="green">+1.8%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> EOS/DAI
                  </td>
                  <td>0.00000103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BTT/DAI
                  </td>
                  <td>0.00002303</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/DAI
                  </td>
                  <td>0.03520103</td>
                  <td className="green">+1.5%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRX/DAI
                  </td>
                  <td>0.00330103</td>
                  <td className="red">-3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BSV/DAI
                  </td>
                  <td>0.00300103</td>
                  <td className="green">+2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> COTI/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="green">+2.85%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XYT/DAI
                  </td>
                  <td>0.00003103</td>
                  <td className="green">+3.55%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> BNB/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XMR/DAI
                  </td>
                  <td>0.003500103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> TRY/DAI
                  </td>
                  <td>0.00000123</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ADA/DAI
                  </td>
                  <td>0.00050103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DAI/DAI
                  </td>
                  <td>0.00340103</td>
                  <td className="red">-1.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> XLM/DAI
                  </td>
                  <td>0.00035103</td>
                  <td className="green">+5.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> ENQ/DAI
                  </td>
                  <td>0.00354103</td>
                  <td className="green">+2.02%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AVA/DAI
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+3.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> AMB/DAI
                  </td>
                  <td>0.05335103</td>
                  <td className="green">+1.0%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> MAP/DAI
                  </td>
                  <td>0.00234103</td>
                  <td className="red">-2.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GO/DAI
                  </td>
                  <td>0.00354103</td>
                  <td className="red">-6.50%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> KICK/DAI
                  </td>
                  <td>0.02053103</td>
                  <td className="red">-6.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> DBC/DAI
                  </td>
                  <td>0.02535103</td>
                  <td className="green">+7.05%</td>
                </tr>
                <tr>
                  <td>
                    <i className="icon ion-md-star"></i> GGC/DAI
                  </td>
                  <td>0.00353103</td>
                  <td className="red">-4.05%</td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
