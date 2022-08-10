import React, { useState } from "react";
import '../styles/WeatherForm.css';

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('')

    function onChange(e) {
        const value = e.target.value;

        if (value != "") {
            setCity(value);
        }
     }

     function handleSubmit(e) {
         e.preventDefault();

         onChangeCity(city)
     }
    return (
        <form  className='container' onSubmit={handleSubmit}>
            <input className="input" type='text' onChange={onChange}/>
        </form>
    );
}

export default WeatherForm;