import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry]=useState([]);
    const [visitedFlag, setVisitedFlag]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    const handleMarkedButton = country =>{
        console.log('I have visited this country')
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
        
    }

    const handleVisitedFlag = flag =>{
        const newVisitedFlag =[...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    }
    return (
        <div>
            {/* visited countries */}
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Country: {visitedCountry.length} </h5>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlag.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            {/* display countries */}
            <div className="country-container">
            {
                countries.map(country=>
                <Country key={country.cca3} 
                handleVisitedFlag={handleVisitedFlag}
                handleMarkedButton={handleMarkedButton} 
                 country={country}>

                </Country>)
            }
            </div>
            
            
        </div>
    );
};

Countries.propTypes = {
    
};

export default Countries;