import { useEffect, useState } from "react";
import CountryCard from "../card/CountryCard";
import style from "./CountriesList.module.scss";
import api from "../services/api";

function CountriesList() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        api.get("all")
        .then((response) => {
            setCountries(response.data);
        })
        // eslint-disable-next-line 
    }, []);
    console.log(countries);

    // const [countries, setCountries] = useState([]);

    // useEffect(() => {
    //     fetch('https://restcountries.com/v3.1/all', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type':'application/json',
    //         },
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         console.log(data)
    //         setCountries(data)
    //     })
    //     .catch((err) => console.log(err))
    // }, [])

    return (
        <div className={style.CountriesListContainer}>
            {countries?.map((country, index) =>
                <CountryCard 
                countryId={country.id}
                countryName={country.name.common} 
                countryCapital={country.capital} 
                population={country.population} 
                flag={country.flags.png}
                key={index} 
                />
                )} 
        </div>
    )
}

export default CountriesList;