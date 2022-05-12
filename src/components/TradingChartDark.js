import {memo} from 'react';
import { AdvancedChart } from 'react-tradingview-embed';

const TradingChart = memo((props) => {
  return (
    <>
      <div className="main-chart mb15">
        <AdvancedChart
          widgetProps={{
            theme: 'dark',
            symbol: 'BINANCE:AVAXUSDT',
            allow_symbol_change: true,
            toolbar_bg: '#000',
            height: 550,
          }}
        />
      </div>
    </>
  );
})

export default TradingChart
