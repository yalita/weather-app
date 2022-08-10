import React, { useState, useEffect } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import '../styles/WeatherApp.css';
import Loading from '../components/Loading'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `weather | ${weather?.location.name ?? "" }`
    }, [weather])

    async function loadInfo (city = 'london') {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

            const json = await request.json();

            setTimeout(() => {
                setWeather(json);
            }, 2000)


            console.log(json);
        } catch (error) {

        }
    }

    function handleChangeCity(city) {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div className='weatherContainer'>
            <WeatherForm onChangeCity={handleChangeCity}/>
            {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        </div>
    );
}

export default WeatherApp;