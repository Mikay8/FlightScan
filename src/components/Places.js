import React from 'react';
import './Places.css';
/*

                                        <th>{place.IataCode}</th>
                                        <th>{place.Name}</th>
                                        <th>{place.Type}</th>   
                                        <th>{place.CityName}</th>
                                        <th>{place.CityId}</th>
                                        <th>{place.CountryName}</th>
*/
function Places(props) { 
    
    return(
        
        <div className="places">
           
            
                    <body>
                    
                            {
                             
                                props.places.map(place => {
                                    return (<div id={place.PlaceId}>
                                        <p><b>{place.IataCode} {place.Name}</b></p>         
                                       
                                 
                                    </div>)
                                    
                                })
                                
                            
                               
                            }
                     

                    </body>
             
           
         </div>

                        
    )
}

export default Places;