import react, { useState, useEffect } from 'react' ;
import axios from'axios';
import './Style.css';

const varmeldinger = () => {
    const [varmeldinger, setvaremeldinger] = useState([]);


    useEffect(() => {
        axios.get('https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=59.93&lon=10.72&altitude=90')
        .then(Response => {
            setvaremeldinger(Response.data);
        })
        .catch(error =>{
            console.log(error);
        })
    }, []);
    {/* Jeg prøvde å hente data fra Url men fikk ikke til*/}
    return (
        <div>
            <h2>Værmeldinger</h2>
            <ul>
                {varmeldinger.map(varmeldinger => (
                <li key={varmeldinger.id}>{varmeldinger.} - {varmeldinger.navn}{varmeldinger.organisasjonsform.beskrivelse}</li>
            ))}
               
            </ul>

        </div>
)
}
  
  export default varmeldinger;