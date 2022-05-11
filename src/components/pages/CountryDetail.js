import { Link, useParams } from "react-router-dom";
import CountryInfos from "../card/CountryInfos";
import style from "./CountryDetail.module.scss";
import { useState, useEffect } from "react";
import api from "../services/api";


function CountryDetail() {
    const [country, setCountry] = useState([]);

    const {name} = useParams();

    useEffect(() => {
        api.get("name/"+ name)
        .then((response) => {
            setCountry(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <div>
        <Link to="/" >
            <input type="button" value="Back" />
        </Link>
        <h1 className={style.CountryDetailContainer}>COUNTRY DETAIL</h1>
        {country?.map((country, index) =>
                <CountryInfos 
                countryName={country.name.common} 
                countryCapital={country.capital} 
                population={country.population} 
                flag={country.flags.png}
                currency={country.currencies.name}
                key={index} 
                /> 
                )}  
        </div>
    )
}

export default CountryDetail;