import Chat from '../Chat/Chat';
import CurrencyConvert from '../CurrencyConvert/CurrencyConvert';

function ToolFrame({state}) {

  switch(state) {
    case "chat":
      return(<Chat />);
      break;
    case "cconvert":
      return(<CurrencyConvert />);
      break;
    default:
      return("");
      break;
}

}

export default ToolFrame;