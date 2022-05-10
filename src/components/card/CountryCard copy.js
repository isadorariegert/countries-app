import styles from './CountryCard.module.scss'
// import CountryFlag from './CountryFlag';
// import CountryInfos from './CountryInfos';
import LinkButton from './LinkButton';


function CountryCard({ countryId, flag, countryName, countryCapital, population, currency, languages }) {

    return (
        <div className={styles.CardContainer}>
            <img src={flag} alt="" />
            {/* <CountryFlag flag="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" /> */}
            <h2>{countryName}</h2>
            <p>Capital: {countryCapital}</p>
            <p>Populaçao: {population}</p>
            {/* <CountryInfos countryName="Brasil" countryCapital="Brasilia" population="220MM" /> */}
            <LinkButton to="/countrydetail" text="View More" />
        </div>
    )
}

export default CountryCard;