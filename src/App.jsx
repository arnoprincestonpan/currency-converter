import { useState} from 'react';
import useCurrencyInfo from './hooks/useCurrencyHook';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("cad");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // always be sure about what info comes in; TypeScript can help
  const currencyInfo = useCurrencyInfo(from)
  // grab the keys using Object 
  const options = Object.keys(currencyInfo)

  // API works by multiplying the Input amount with the the currencyInfo["currency abbreviation in 'aaa'"]
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url('https://images.pexels.com/photos/6266283/pexels-photo-6266283.jpeg')`}}
    >
      <h1 className='bg-red-200'>Test for Tailwind</h1>
    </div>
  )
}

export default App
