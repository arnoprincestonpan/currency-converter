import {useEffect, useState} from 'react';

function useCurrencyInfo(currency){
    // we want to store the API Obj data 
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json()) // convert to json
        .then((res) => setData(res[currency])) // finding the currency with want; i.e. usd
    }, [currency])

    console.log(data);
    return data;
}

export default useCurrencyInfo;