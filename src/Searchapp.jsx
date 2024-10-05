import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchapp.css"
import {useState} from "react";
export default function Searchapp({updateInfo}){
    let [city ,setCity]=useState("");
    let [error ,setError]=useState(false);

    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="8394ea66fbfb717404d33cd0ae4f1a4d";

    let getWeatherInfo = async ()=>{
        try{
            let response =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
             // console.log(jsonResponse);
            let result = {
              city:city,
              temp: jsonResponse.main.temp,
              temp_min: jsonResponse.main.temp_min,
              temp_max: jsonResponse.main.temp_max,
              temp_humidity: jsonResponse.main.humidity,
              feelsLike: jsonResponse.main.feels_like,
              weather_description: jsonResponse.weather[0].description,
          
            };
            console.log(result);
            return result;
        } catch(error){
            throw error;
             
        }
   
    };
     
    let handleChange=(evt)=>{
        setCity(evt.target.value)
    }
    let handleSubmit=async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city)
            setCity("");
           // getWeatherInfo();
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        } catch(error){
            setError(true);
        }
        
    }
    return (
        <div className="Searchapp">
        
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="city" variant="outlined"  value={city} onChange={handleChange}required />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}>No such place in our API</p>}
            </form>
        </div>
    );
}