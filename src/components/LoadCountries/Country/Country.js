import React from 'react';
import './Country.css'

const Country = props => {
    const {name, capital,area, region, population, flags} = props.country;
    return (
        <div className='country'>
            <h1>Name : {name.common}</h1>
            <p>Capital : {capital}</p>
            <p>Area : {area}</p>
            <p>Region : {region}</p>
            <p>Population : {population}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;