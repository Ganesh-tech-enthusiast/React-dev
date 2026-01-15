import React, { useId } from "react";

function InputBox({
  label,
  amount = "",
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="inputboxer">
      <div className="left">
        <label className="soft" htmlFor={amountInputId}>
          {label}
        </label>

        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const value = e.target.value;
            onAmountChange &&
              onAmountChange(value === "" ? "" : Number(value));
          }}
        />
      </div>

      <div className="right">
        <p className="soft">Currency Type</p>

        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
