import React, {useState, useEffect} from 'react';
import './CurrencyConvert.scss';
import CurrencyOption from './CurrencyOption';

function CurrencyConvert() {

  const waitForSubmit = () => {
    if (document.getElementById("resultv")) {
      if (document.getElementById("basev").value !== "") document.getElementById("resultv").value = "click \"Convert\"";
      else document.getElementById("resultv").value = "";
    }
  }

  const getRate = (from, to, amount) => {
    let myHeaders = new Headers();
    myHeaders.append("apikey", "mY1oy4Hd65cI1Gr2LS7XPCMc9fU4FzCv");

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/convert?to="+to+"&from="+from+"&amount="+amount, requestOptions)
      .then(response => response.text())
      .then(result => setRes(JSON.parse(result).result))
      .catch(error => console.log('error', error));
  }

  const valueConvert = () => {
    if (document.getElementById("basev") && document.getElementById("basec") && document.getElementById("resultv") && document.getElementById("resultc")) {
      if (document.getElementById("basev").value !== "") getRate(document.getElementById("basec").value, document.getElementById("resultc").value, document.getElementById("basev").value);
    }
  }

  const pSubmit = (e) => {e.preventDefault();};

  const [res, setRes] = useState("");

  useEffect(() => {
    if (document.getElementById("resultv")) document.getElementById("resultv").value = res;
  }, [res]);

  useEffect(() => {
    document.getElementById("cconvertbox").scrollIntoView();
  }, [document.getElementById("cconvertbox")]);

  return (
    <form id="cconvertbox" onSubmit={pSubmit}>
      <input type="textbox" id="basev" onChange={waitForSubmit} />
      <CurrencyOption id="basec" onChange={waitForSubmit} />
      <p>to</p>
      <textarea id="resultv" rows="1" placeholder="result" readOnly />
      <CurrencyOption id="resultc" onChange={waitForSubmit} />
      <br />
      <input id="convertb" type="submit" value="Convert" onClick={valueConvert} />
      <br />
      <p>(Number of conversion requests is limited, please use this responsibly)</p>
    </form>
  );

}

export default CurrencyConvert;