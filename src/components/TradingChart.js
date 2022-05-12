import {memo} from 'react';
import { AdvancedChart } from 'react-tradingview-embed';
const breakPoint = 767;

const TradingChart = memo(({theme, width, pair}) => {
  return (
    <>
      <div className="main-chart mb15">
        <AdvancedChart
          widgetProps={{
            theme: theme,
            symbol: `BINANCE:AVAXUSDT`,
            allow_symbol_change: false,
            toolbar_bg: '#fff',
            height: width > breakPoint ? 550 : 350,
            hide_side_toolbar: true,
            withdateranges: false,
          }}
        />
      </div>
    </>
  );
})

export default TradingChart;
