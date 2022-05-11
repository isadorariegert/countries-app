import styles from './CountryInfos.module.scss'

export default function CountryInfos({ countryId, flag, countryName, countryCapital, population, currency, languages }) {
  return (
    <div className={styles.CardContentContainer}>
        {/* <img src={flag} alt="" />
        <h2>{countryName}</h2>
        <p>{countryCapital}</p>
        <p>{population}</p>
        <p>{currency}</p>
        <p>{languages}</p> */}
        <img src={flag} alt="" />
        <h2>Country: {countryName}</h2>
        <p>Capital: {countryCapital}</p>
        <p>Populaçao: {population}</p>
        <p>Currency: {currency}</p>
        <p>{languages}</p>

        {/* <div>
          <p>bordering coutrnies:</p>
          <p>"BRA"</p>
          <p>"ARG"</p>
        </div> */}
    </div>
  )
}
