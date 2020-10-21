import React from "react";
import TradingViewWidget from "react-tradingview-widget";

const App = () => {
  const [params, setParams] = React.useState({})
  React.useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    setParams({
      height: +urlParams.get('height'),
      width: +urlParams.get('width'),
      barStyle: Style(urlParams.get('bar-style')).toString(),
    })
  }, [])
	return (
			<TradingViewWidget
				style={params.barStyle}
				symbol="NASDAQ:AAPL"
				height={params.height}
				width={params.width}
        theme='Dark'
			/>
	);
};

export default App;

function Style(input = 'BARS') {
  switch (input.toUpperCase()) {
    case 'BARS':
      return 0;
    case 'CANDELS':
      return 1;
    case 'HOLLOW_CANDELS':
      return 9;
    case 'HEIKIN_ASHI':
      return 8;
    case 'LINE':
      return 2;
    case 'AREA':
      return 3;
    case 'RENKO':
      return 4;
    case 'LINE_BREAK':
      return 7;
    case 'KAGI':
      return 5;
    case 'POINT_AND_FIGURE':
      return 6;
    default:
   
  }
}