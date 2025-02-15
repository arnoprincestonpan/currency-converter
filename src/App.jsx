import { useState} from 'react';
import useCurrencyInfo from './hooks/useCurrencyHook';
// import InputBox from './components/inputBox';
import { InputBox } from './components/index';

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

  // swap currencies to - from <-> from - to && amount - converted amount <-> converted amount - amount
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{backgroundImage: `url('https://images.pexels.com/photos/6266283/pexels-photo-6266283.jpeg')`}}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amount) => setAmount(amount)} 
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >
                Swap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
