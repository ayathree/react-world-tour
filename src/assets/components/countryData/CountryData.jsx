

const CountryData = ({country,  handleMarkedButton, handleVisitedFlag}) => {

    console.log('inside country data', country,  handleMarkedButton, handleVisitedFlag )
    return (
        <div>
            <p>Country-data : {country.name.common}</p>
        </div>
    );
};

export default CountryData;