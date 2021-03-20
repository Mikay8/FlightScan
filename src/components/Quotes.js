import React from 'react';
import './Quotes.css';

function Quotes(props) { 

    return(
        <div className="quotes">
            <table>
                <thead>
                    <tr>
                       
                        <th><b>Min Price</b></th>
                        <th><b>Departure Date</b></th>
                        <th><b>Return Date</b></th>
                        
                    </tr>
                </thead>
                <tbody>
               
                    {props.quotes.map(quote => {
                        return (<tr id={quote.QuoteId}>
                           
                            <td>{quote.MinPrice}</td>
                            
                            <td>{quote.OutboundLeg.DepartureDate}</td>
                            <td>{quote.InboundLeg.DepartureDate}</td>
                           
                        </tr>)
                    })}
                   
                  

                </tbody>
            </table>
         </div>

         
    )
}

export default Quotes;