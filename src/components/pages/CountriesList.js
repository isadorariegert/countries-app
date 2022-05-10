import CountryCard from "../card/CountryCard";
import FormCountryList from "../form/FormCountryList";
import style from "./CountriesList.module.scss";

function CountriesList() {
    return (
        <div>
        {/* <h1 className={style.CountriesListContainer}>COUNTRIES LIST</h1> */}
        <>
        {/* <FormCountryList />  */}
        <CountryCard countryName="TESTE" countryCapital="TESTE" population="TESTE" flag="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" />
        </>
        </div>
    )
}

export default CountriesList;