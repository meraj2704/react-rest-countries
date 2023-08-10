import React from 'react';
import './Country.css'

const Country = props => {
    return (
        <div className='country'>
            <h1>Name : {props.name}</h1>
            <p>Capital : {props.capital}</p>
            <p>Area : {props.area}</p>
            <p>Region : {props.region}</p>
            <p>Population : {props.population}</p>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;