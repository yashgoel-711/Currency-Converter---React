// https://api.currencyapi.com/v3/historical?apikey=cur_live_4HbiQPkQB8F6ruuuqt3r2FN6m9LqPbnykx51LVk9&base_currency={from-Currency}&date={date}


import { useState,useEffect } from "react"


const currencyInfo = (fromCurrency ) => {
    const [conversionData, setconversionData] = useState({})
   
    useEffect(() => {

         const fetchData = async(fromCurrency) =>  {

            
            const fetchedInfo = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_i6IkNBiBLwaAcwgjfthWNv9BviZzaKvcWqNTYckj&base_currency=${fromCurrency}&date=2025-01-01`)
            
            const parsedInfo = await fetchedInfo.json()
            const Data = parsedInfo.data
            setconversionData(Data)
            
           
        }

        fetchData(fromCurrency)

    } , [fromCurrency])

  
    return conversionData
     }     

    
  
export default currencyInfo