import {useState, useEffect} from 'react';
import { Tabs, Tab, Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import { abbreviateNumber } from "js-abbreviation-number";

export default function HistoryOrder({orders, user, theme}) {

  let [arrangedOrders, setArrangedOrders] = useState([])

  useEffect(() => {
    
    let usersOrders = orders.filter(order => {
      return order.account === user.address;
    })

    let usersArrangedOrders = usersOrders.sort((a, b) => b.date - a.date);
    setArrangedOrders(usersArrangedOrders)
  }, [orders, user])

  return (
    <>
      <div className="market-history market-order mt15">
        <Tabs defaultActiveKey="open-orders">
          <Tab eventKey="open-orders" title="Open Orders">

            {arrangedOrders.map(order => {
              return <Card className='m-3' style={{backgroundColor: theme === 'light'? '#f5f9fc' : '#1c2030'}} text={theme.toLowerCase() === 'light' ? 'dark' : 'white'}>
                        <Card.Header as="h5">
                          {order.pair} <Badge style={{backgroundColor: order.buySell == 'buy'? 'green' : 'red'}}>{order.buySell}</Badge>
                          <p style={{fontSize: 11, fontWeight: 'bold', margin: '3px 0px'}}>{order.buySell == 'buy' && `${order.buySell.toUpperCase()} ${abbreviateNumber(order.amountA, 1)} ${order.pair.split('-')[0]} at ${order.price} ${order.pair.split('-')[1]}`}</p>
                          <p style={{fontSize: 11, fontWeight: 'bold', margin: '3px 0px'}}>{order.buySell == 'sell' && `${order.buySell.toUpperCase()} ${abbreviateNumber(order.amountA, 2)} ${order.pair.split('-')[0]} at ${order.price} ${order.pair.split('-')[1]}`}</p>
                          {order.buySell === 'buy' && <ProgressBar now={(order.filledAmount / order.amountA) * 100} label={`${abbreviateNumber(order.filledAmount / order.price, 1)} / ${abbreviateNumber(order.amountA, 1)}`} />}
                          {order.buySell === 'sell' && <ProgressBar now={(order.filledAmount / order.amountA) * 100} label={`${abbreviateNumber(order.filledAmount, 1)} / ${abbreviateNumber(order.amountA, 1)}`} />}
                          <Button className='btn-sm mt-3' variant="danger">Cancel Order</Button>
                        </Card.Header>
                      </Card>
            })}
            
          </Tab>
          <Tab eventKey="trade-history" title="Trade History">
            
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
