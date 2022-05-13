import { useEffect, useState } from "react";
import CountryCard from "../card/CountryCard";
import style from "./CountriesList.module.scss";
import api from "../services/api";
import axios from "axios";

function CountriesList() {

    const [countries, setCountries] = useState([]);
    // const [url, setUrl] = useState("https://restcountries.com/v3.1/all")

    // const coutryFun = async() => {
    //     const res = await axios.get(url);
    //     getCoutry(res.data)
    // }

    // const getCoutry = async(res) => {
    //     res.map(async(item)=>{
    //         // console.log(item.name.common)
    //         const coutry = await axios.get(`https://restcountries.com/v3.1/name/${item.name.common}`)
    //         console.log(coutry)
    //     })
    // }

    useEffect(() => {
        api.get("all")
        .then((response) => {
            setCountries(response.data);
        })
        // coutryFun();
    }, []);
    // console.log(countries);

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
                code={country.cca2}
                countryName={country?.name?.common} 
                countryCapital={country?.capital} 
                population={country?.population} 
                flag={country?.flags?.png}
                key={index} 
                /> 
                )}  
        </div>
    )
}

export default CountriesList;