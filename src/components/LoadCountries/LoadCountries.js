import React from 'react';
import { useEffect, useState } from 'react';
import Country from './Country/Country';
import './LoadCountries.css'

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    console.log(countries)
    return (
        <div >
            <h1>Visiting Every country of the world!!</h1>
            <h4>Country Length : {countries.length}</h4>
            <div className='load-countries'>
            {
                countries.map(country => <Country
                    country={country}
                    key={country.cca3}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default LoadCountries;