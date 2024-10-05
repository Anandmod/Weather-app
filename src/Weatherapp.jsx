import Searchapp from "./Searchapp"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function Weatherapp(){
    const [weatherInfo , setWeatherInfo]=useState({
        city:"delhi",
        feelsLike: 37.05,
    temp: 30.05,
     temp_max: 30.05,
   temp_min: 30.05,
   temp_humidity: 79,
   weather_description:"mist",
    });
    let updateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
    };
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather app by Anand</h2>
            <Searchapp updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}