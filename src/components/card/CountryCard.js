import styles from './CountryCard.module.scss'
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';


function CountryCard({ code, flag, countryName, countryCapital, population, currency, languages }) {

    return (
        <div className={styles.CardContainer}>
            <img src={flag} alt="" />
            <h2>{countryName}</h2>
            <p>Capital: {countryCapital}</p>
            <p>Populaçao: {population}</p>
            <LinkButton to={`/countrydetail/${code}`} text="View More" />
        </div>
    )
}

export default CountryCard;