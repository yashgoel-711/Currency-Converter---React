import React, { useId } from "react";


const InputBox = ({ currencyOptions=[] , label ,onCurrencyChange , selectedCurrency , isDisabled=false , onAmountChange , amount}) => {
  // console.log(currencyOptions)
  const UniqueId = useId()
  return (
        <>
    <div>

    <div className="bg-white flex flex-col gap-4 p-1 justify-center  rounded-2xl min-w-[400px] min-h-[100px] ">
    <div className="flex justify-center text-zinc-700">  <label htmlFor={UniqueId} > {label} </label> </div>
        
        <div className="flex items-center justify-around">
          
      <input id={UniqueId} type="number" className="border border-black px-2 py-1 rounded-full outline-none" placeholder={label==="From"? "Enter Amount" : "Converted Amount" } disabled={isDisabled} value={amount} onChange={onAmountChange}  />

      
     

      <select id={UniqueId} className="border border-black p-1 px-2 rounded-full outline-none"  value={selectedCurrency} onChange={onCurrencyChange}>
        {currencyOptions.map((currency) => (
          <option key={currency}>
            {currency}
          </option>
        ))}
      </select>
        </div>
    </div>
        </div>
        </>
  );
};

export default InputBox;
