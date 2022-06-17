import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';
import styled from "styled-components";

const Pill = styled.div`
    padding: 5px 12px;
    margin-bottom: 10px;
    border-radius: 3px;
    background-color: #844e0b;
    color: #fff;
    font-size: 18px;
    width: fit-content;
`


export default function Home() {
    return (
        <ThemeConsumer>
          {({data}) => (
            <div className="container pt-5" style={{color: data.theme === 'dark'? '#fff' : '#111'}}>
                <div className='row pt-5'>
                    <div className="col-12 col-md-6 mb-3">
                        <Pill>
                            <img className='m-1' src="/img/img-dollar.svg"></img>
                            The future of decentralized trading
                        </Pill>
                        <h1 className='mt-4' style={{fontWeight: 600}}>Hybrid Liquidity DEX:</h1>
                        <h2 style={{color: '#ffc107'}}>Order Book + AMM + Swap</h2>
                        <p className="mt-5 h5">Bee Trade Finance Network is a <span style={{fontWeight: 500, color: '#ffc107'}}>Fully decentralized peer-to-peer hybrid cryptocurrency exchange</span> for the Avalanche DeFi ecosystem built on EVM.</p>
                        <a href="/trade/BTF-USDT" className='btn btn-warning btn-lg mt-5'>Launch Exchange</a>
                    </div>
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src="/img/intro.png" ></img>
                    </div>
                </div>
                {/* <div className='row pt-5'>
                    <div className='col-12 d-flex align-items-center'>
                        <h3>Exchange Stats</h3>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center' style={{border: '3px solid #ffc107', padding: 50,borderRadius: 10}}>
                        <h1 style={{fontWeight: 600}}>$1,000,000</h1>
                        <p>TOTAL VOLUME TRADED</p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center' style={{border: '3px solid #ffc107', padding: 50,borderRadius: 10}}>
                        <h2 style={{fontWeight: 600}}>10,000</h2>
                        <p>TOTAL TRADES</p>
                    </div>
                    <div className='col-md-4 d-flex flex-column align-items-center' style={{border: '3px solid #ffc107', padding: 50,borderRadius: 10}}>
                        <h2 style={{fontWeight: 600}}>0</h2>
                        <p>Failed Trades</p>
                    </div>
                </div> */}
            </div>
          )}
        </ThemeConsumer>
        
    )
}