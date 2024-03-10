
import { useState } from 'react';
import './Country.css';
import CountryDetail from '../countryDetails/CountryDetail';
const Country = ({country, handleMarkedButton, handleVisitedFlag}) => {

    console.log(country)

    const {name, flags, population, area, cca3}= country;
    const [visited, setVisited] =useState(false)


    const handleButton = ()=>{
        setVisited(!visited);
    }

    
    return (
        <div className={`country ${visited? 'visited': 'non-visited'}`}>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population} </p>
            <p>Area : {area} </p>
            <p><small>Code : {cca3} </small></p>
            <button onClick={()=>handleMarkedButton(country)}>Marked</button>
            <br />
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleButton} >{visited? 'visited' : 'going'} </button>
            {visited? 'I have visited this country' : 'I want to visit'}
            <hr />
            <CountryDetail
                country={country}
                handleMarkedButton = {handleMarkedButton}
                handleVisitedFlag = {handleVisitedFlag}

                >
                



            </CountryDetail>
        </div>
    );
};

export default Country;