import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';
import Quotes from './Quotes';



function AirportInfo() { 
    //initalize 
    const [places,setPlaces] = useState([])
    const [quotes,setQuotes] = useState([])
    const [query,setQuery] = useState("")
    const [query2,setQuery2] = useState("")
   
    
    const [showPlaces,setShowPlaces] = useState(false)
    const [showQuotes,setShowQuotes] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        async function fetchMyAPI() {
            const reqOptions = {
                method: 'GET',
                headers: {
                    "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
                    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                    "useQueryString": true
                }
            }
            //let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?" + new URLSearchParams({query: query}), reqOptions)
            
            let response = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/"+document.getElementById("currencyInput").value+"/en-US/"+document.getElementById("fromInput").value+"/"+document.getElementById("toInput").value+"/"+document.getElementById("dateInput").value+"/"+document.getElementById("dateInputReturn").value, reqOptions)
            response = await response.json()
          
                console.log(response.Places)

                if(response.Places&&response.Quotes){//If places are empty then dont show
                    setPlaces(response.Places)
                    setQuotes(response.Quotes)
                    setShowPlaces(true)//destination show
                    setShowQuotes(true)//flight times and cost times
                }else{
                    
                    setShowPlaces(true)
                    setShowQuotes(false)
                    
                }
                    
              
        }
        fetchMyAPI()
   
        setQuery("")
        setQuery2("")
         

    }
    //CURRENCY DROP DOWN ADAPTED FROM:https://gist.github.com/AmrMekkawy/a5425a4dd4e453a4eb4d 
    return(
        <div className="airportinfo">
           <form onSubmit={handleSubmit}>
                

                    <div id="airportForm" className="airportForm">
                   
                    <label htmlFor="toInput">Origin: </label>
                    
                    <input id="toInput" value={query2} placeholder="IATA code" onChange={e => setQuery2(e.target.value)} required/>
                
                   <label htmlFor="fromInput">Destination:</label>
                    
                    
                    <input id="fromInput" value={query} placeholder="IATA code " onChange={e => setQuery(e.target.value)} required/>
                    

                    <label htmlFor="dateInput">Departure date:</label>
                    <input type="date" id="dateInput" name="dateInput"  min="2021-03-19" max="2021-12-31" required></input>
                   
                    <label htmlFor="dateInputReturn">Return date:</label>
                    <input type="date" id="dateInputReturn" name="dateInputReturn"  min="2021-03-19" max="2021-12-31" ></input>
                   
                  
                    <label htmlFor="dateInput">Currency:</label>
                    <select id="currencyInput" name="currencyInput">
                            <option value="USD" selected="selected">USD</option>
                            <option value="EUR">Euro</option>
                            <option value="GBP">United Kingdom Pounds</option>
                            <option value="DZD">Algeria Dinars</option>
                            <option value="ARP">Argentina Pesos</option>
                            <option value="AUD">Australia Dollars</option>
                            <option value="ATS">Austria Schillings</option>
                            <option value="BSD">Bahamas Dollars</option>
                            <option value="BBD">Barbados Dollars</option>
                            <option value="BEF">Belgium Francs</option>
                            <option value="BMD">Bermuda Dollars</option>
                            <option value="BRR">Brazil Real</option>
                            <option value="BGL">Bulgaria Lev</option>
                            <option value="CAD">Canada Dollars</option>
                            <option value="CLP">Chile Pesos</option>
                            <option value="CNY">China Yuan Renmimbi</option>
                            <option value="CYP">Cyprus Pounds</option>
                            <option value="CSK">Czech Republic Koruna</option>
                            <option value="DKK">Denmark Kroner</option>
                            <option value="NLG">Dutch Guilders</option>
                            <option value="XCD">Eastern Caribbean Dollars</option>
                            <option value="EGP">Egypt Pounds</option>
                            <option value="FJD">Fiji Dollars</option>
                            <option value="FIM">Finland Markka</option>
                            <option value="FRF">France Francs</option>
                            <option value="DEM">Germany Deutsche Marks</option>
                            <option value="XAU">Gold Ounces</option>
                            <option value="GRD">Greece Drachmas</option>
                            <option value="HKD">Hong Kong Dollars</option>
                            <option value="HUF">Hungary Forint</option>
                            <option value="ISK">Iceland Krona</option>
                            <option value="INR">India Rupees</option>
                            <option value="IDR">Indonesia Rupiah</option>
                            <option value="IEP">Ireland Punt</option>
                            <option value="ILS">Israel New Shekels</option>
                            <option value="ITL">Italy Lira</option>
                            <option value="JMD">Jamaica Dollars</option>
                            <option value="JPY">Japan Yen</option>
                            <option value="JOD">Jordan Dinar</option>
                            <option value="KRW">Korea (South) Won</option>
                            <option value="LBP">Lebanon Pounds</option>
                            <option value="LUF">Luxembourg Francs</option>
                            <option value="MYR">Malaysia Ringgit</option>
                            <option value="MXP">Mexico Pesos</option>
                            <option value="NLG">Netherlands Guilders</option>
                            <option value="NZD">New Zealand Dollars</option>
                            <option value="NOK">Norway Kroner</option>
                            <option value="PKR">Pakistan Rupees</option>
                            <option value="XPD">Palladium Ounces</option>
                            <option value="PHP">Philippines Pesos</option>
                            <option value="XPT">Platinum Ounces</option>
                            <option value="PLZ">Poland Zloty</option>
                            <option value="PTE">Portugal Escudo</option>
                            <option value="ROL">Romania Leu</option>
                            <option value="RUR">Russia Rubles</option>
                            <option value="SAR">Saudi Arabia Riyal</option>
                            <option value="XAG">Silver Ounces</option>
                            <option value="SGD">Singapore Dollars</option>
                            <option value="SKK">Slovakia Koruna</option>
                            <option value="ZAR">South Africa Rand</option>
                            <option value="KRW">South Korea Won</option>
                            <option value="ESP">Spain Pesetas</option>
                            <option value="XDR">Special Drawing Right (IMF)</option>
                            <option value="SDD">Sudan Dinar</option>
                            <option value="SEK">Sweden Krona</option>
                            <option value="CHF">Switzerland Francs</option>
                            <option value="TWD">Taiwan Dollars</option>
                            <option value="THB">Thailand Baht</option>
                            <option value="TTD">Trinidad and Tobago Dollars</option>
                            <option value="TRL">Turkey Lira</option>
                            <option value="VEB">Venezuela Bolivar</option>
                            <option value="ZMK">Zambia Kwacha</option>
                            <option value="EUR">Euro</option>
                            <option value="XCD">Eastern Caribbean Dollars</option>
                            <option value="XDR">Special Drawing Right (IMF)</option>
                            <option value="XAG">Silver Ounces</option>
                            <option value="XAU">Gold Ounces</option>
                            <option value="XPD">Palladium Ounces</option>
                            <option value="XPT">Platinum Ounces</option>
                        </select>
                
                        </div>
                
                <button className="search">Submit</button>
           </form>
       

           { showPlaces ? <Places places={places}></Places> : <></>}
           { showQuotes ? <Quotes quotes={quotes}></Quotes> : <></>}
        </div>
    )
}

export default AirportInfo;
