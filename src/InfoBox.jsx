import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css'
export default function InfoBox({info}){
    let hot_url="https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let cold_url="https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let rain_url="https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    /*let info={
        city:"delhi",
        feelsLike: 37.05,
    temp: 30.05,
     temp_max: 30.05,
   temp_min: 30.05,
   temp_humidity: 79,
     weather: "mist",
    };*/
    return (
        <div className="InfoBox">
         
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp_humidity>80?rain_url:info.temp>15?hot_url:cold_url}
       /* image={
          (info.temp_humidity)>70
          ?rain_url
          :(info.temp)>hot_url
          :cold_url
        }*/
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{" "}
          {info.temp_humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
           <p>temperatur {info.temp}&deg;C</p>
           <p>temp_min {info.temp_min}&deg;C</p>
           <p>temp_max {info.temp_max}&deg;C</p>
           <p>Humidity {info.temp_humidity}</p>
         <p>the weather can be described as <i>{info.weather_description}</i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
       
    </Card>
</div>
        </div>
    );
}