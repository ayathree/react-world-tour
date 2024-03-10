import CountryData from "../countryData/CountryData";


const CountryDetail = (props) => {

    // const {country,  handleMarkedButton, handleVisitedFlag}=props
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
            {/* <CountryData
            country={country}
            handleMarkedButton ={handleMarkedButton}
            handleVisitedFlag={handleVisitedFlag}
            >

            </CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;