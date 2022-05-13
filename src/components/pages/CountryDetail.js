import { Link, useParams } from "react-router-dom";
import CountryInfos from "../card/CountryInfos";
import style from "./CountryDetail.module.scss";
import { useState, useEffect } from "react";
import api from "../services/api";


function CountryDetail() {
    const [country, setCountry] = useState([]);

    const {name} = useParams();

    useEffect(() => {
        api.get("alpha/"+ name)
        .then((response) => {
            setCountry(response.data);
            console.log(response.data);
        })
    }, [name]);

    return (
        <div className={style.CountryDetailContainer}>
        <Link to="/" >
            <input type="button" value="Back" />
        </Link>

        {country?.map((country, index) =>
                <CountryInfos 
                countryName={country?.name?.common} 
                countryCapital={country?.capital} 
                population={country?.population} 
                flag={country?.flags?.png}
                currency={country?.currencies}
                bounderies={country?.borders}
                languages={country?.languages}
                key={index} 
                /> 
                )}  
        </div>
    )
}

export default CountryDetail;