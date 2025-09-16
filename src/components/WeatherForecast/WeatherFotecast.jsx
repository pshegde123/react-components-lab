import './WeatherForecast.css';
import WeatherIcon from '../WatherIcon/WatherIcon';
import WeatherData from '../WatherData/WatherData';

const WeatherForecast = ({ weekday }) => {
    return (
        <div className="weather">
            <h2>{weekday.day}</h2>
            <WeatherIcon img={weekday.img} alt={weekday.imgAlt} />
            <WeatherData conditions={weekday.conditions} time={weekday.time} />
        </div>
    );
}

export default WeatherForecast;
