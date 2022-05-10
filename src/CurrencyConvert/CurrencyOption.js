function CurrencyOption({id, onChange}) {
  let currency = ["CAD","HKD","ISK","PHP","DKK","HUF","CZK","GBP","RON","SEK","IDR","INR","BRL","RUB","HRK",
"JPY","THB","CHF","EUR","MYR","BGN","TRY","CNY","NOK","NZD","ZAR","USD","MXN","SGD","AUD","ILS","KRW","PLN"];

  let currencyopt = [];
  currency.forEach((x) => {
    currencyopt.push(<option key={x} value={x}>{x}</option>);
  });
  return(
    <select name={id} id={id} onChange={onChange}>
      {currencyopt}
    </select>
  );
}

export default CurrencyOption;