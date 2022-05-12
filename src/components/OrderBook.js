import React from 'react';
import { abbreviateNumber } from "js-abbreviation-number";

export default function OrderBook({buyOrders, sellOrders, pair, autoFillOrder}) {
  return (
    <>
      <div className="order-book" style={{flex: 1}}>
        <h2 className="heading">Order Book</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Price ({pair.split('-')[1]})</th>
              <th>Size ({pair.split('-')[0]})</th>
            </tr>
          </thead>
          <tbody>
          {sellOrders.map(order => {
              return (
                <tr className="red-bg" onClick={(e) => autoFillOrder(order.price, order.amountA, order.buySell)}>
                  <div className='sell-fill' style={{width: `${order.filledAmount/order.amountA * 100}%`}}></div>
                  <td className="red">{order.price}</td>
                  <td>{abbreviateNumber(order.amountA, 1)}</td>
                </tr>
              )
            })}
          </tbody>
          
          
          <tbody>
            {buyOrders.map(order => {
              return (
                <tr className="green-bg" onClick={(e) => autoFillOrder(order.price, order.volume, order.buySell)}>
                  <td className="green">{order.price}</td>
                  <td>{abbreviateNumber(order.amountA, 1) }</td>
                </tr>
              )
            })}
            
            
          </tbody>
        </table>
      </div>
    </>
  );
}
