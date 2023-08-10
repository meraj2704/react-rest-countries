import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries()
{
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
  },[])
  console.log(countries)
  return (
    <div>
      <h1>Visiting Every country of the world!!</h1>
      <h4>Country Length : {countries.length}</h4>
      
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital} population={country.population} region={country.region} area={country.area} flag={country.flags.png}></Country>)
      }
    </div>
  )
}
function Country(props)
{
  return(
    <div className='country'>
      <h1>Name : {props.name}</h1>
      <p>Capital : {props.capital}</p>
      <p>Area : {props.area}</p>
      <p>Region : {props.region}</p>
      <p>Population : {props.population}</p>
      <img src={props.flag} alt="" />
    </div>
  )
}
export default App;
