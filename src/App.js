import React from "react";
// import logo from './logo.svg';
import "./App.css";
import TradingViewWidget, { BarStyles } from "react-tradingview-widget";

const App = () => {
  const [style, setStyle] = React.useState(BarStyles.BARS)
  return (
	<>
		<TradingViewWidget style={style} symbol="NASDAQ:AAPL" />
		<select onChange={(event) => setStyle(event.target.value)}>
			<option value={BarStyles.BARS}>Bars</option>
			<option value={BarStyles.CANDLES}>CANDLES</option>
			<option value={BarStyles.HOLLOW_CANDLES}>HOLLOW_CANDLES</option>
			<option value={BarStyles.LINE}>LINE</option>
			<option value={BarStyles.AREA}>AREA</option>
			<option value={BarStyles.RENKO}>RENKO</option>
			<option value={BarStyles.LINE_BREAK}>LINE_BREAK</option>
			<option value={BarStyles.KAGI}>KAGI</option>
			<option value={BarStyles.POINT_AND_FIGURE}>POINT_AND_FIGURE</option>
		</select>
	</>)
};

export default App;
