import { useState, useEffect } from "react";

//creating custom hook with api to fetch data from api when the currency changes

function useCurrencyAPI(currency) {
    const [data, setdata] = useState({})

    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)

            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
    }, [currency])
    return data;
} 
// useCurrencyAPI("inr"); we cannot call custom hook directly in same file it should be called in an react component
export default useCurrencyAPI;