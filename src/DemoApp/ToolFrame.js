import Chat from '../Chat/Chat';
import CurrencyConvert from '../CurrencyConvert/CurrencyConvert';
import Drawing from '../Drawing/Drawing';

function ToolFrame({state}) {

  switch(state) {
    case "chat":
      return(<Chat />);
      break;
    case "cconvert":
      return(<CurrencyConvert />);
      break;
    case "draw":
      return(<Drawing />);
      break;
    default:
      return("");
      break;
}

}

export default ToolFrame;