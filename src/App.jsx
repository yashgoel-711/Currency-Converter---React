import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import currencyInfo from './currencyInfo'

  function App() {

  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("INR")
  const conversionData = currencyInfo(fromCurrency);

  const [convertedAmount, setConvertedAmount] = useState(0)
  const [amount, setAmount] = useState(1)

  
  
  const options = Object.keys(conversionData)
  const convert = ()=>{
    
    setConvertedAmount(amount * Number(conversionData[toCurrency].value))
    
  }
  // useEffect(() => {
  // convert()
  
  // }, [toCurrency])

  return (
    <>
    <div className='h-screen w-screen bg-[url("./src/assets/bg.jpg")] bg-cover bg-no-repeat'>
    <div className='flex justify-center items-center h-full'>
      <div className='bg-[#ffffffa6] p-10 px-16 gap-5 min-w-[500px] min-h-[300px] flex flex-col items-center justify-center rounded-3xl outline-1 outline outline-rose-400' style={{boxShadow : "0px 0px 18px pink"}} >
        <form className='flex flex-col items-center justify-center gap-5' onSubmit={(e) => { e.preventDefault() ; convert() }} >

        <InputBox  currencyOptions={options} label={"From"} onCurrencyChange={(e)=>{setFromCurrency(e.target.value)}} selectedCurrency={fromCurrency} onAmountChange={(e)=>{setAmount(e.target.value)}} amount={amount}/>
        <InputBox  currencyOptions={options} label ={"To"} onCurrencyChange={(e)=>{setToCurrency(e.target.value)}} selectedCurrency={toCurrency} isDisabled={true} amount={convertedAmount} />
        <button className='bg-green-500 w-full py-3 text-xl  rounded-md hover:bg-yellow-400' type='submit'>Convert {fromCurrency} to {toCurrency}</button>
        </form>
        
      </div>
    </div>
    </div>
    </>
  )
}
  
export default App
