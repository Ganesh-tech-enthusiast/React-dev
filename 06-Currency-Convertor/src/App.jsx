import { useState } from "react";
import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to] || amount === "") return;

    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <h1>Currency Converter</h1>

        {/* FROM */}
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(value) => setAmount(value)}
        />

        {/* SWAP */}
        <button type="button" className="swap-btn" onClick={swap}>
          Swap
        </button>

        {/* TO */}
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisable
        />

        <button type="submit" className="convert-btn">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
