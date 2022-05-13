import styles from './CountryInfos.module.scss'

export default function CountryInfos({ flag, countryName, countryCapital, population, currency, languages, bounderies }) {
  const moeda = Object.getOwnPropertyNames(currency).at(0);
  const bandeira = Object.getOwnPropertyNames(languages).at(0);
  return (
    <div className={styles.CardContentContainer}>
       
        <img src={flag} alt="" />
        <h2>Country: {countryName}</h2>
        <p>Capital: {countryCapital}</p>
        <p>Populaçao: {population}</p>
        <p>Currency: {currency?.[moeda]?.name}</p>
        <p>languages: {languages?.[bandeira]}</p>

        <div>
          <p>Bordering Countries:</p>
          {
            bounderies?.map((border, index) => (
              <p key={index}>{border}</p>
            ))
          }
        </div>
        {/* <div>
          <p>Languages:</p>
          {
            languages.map((language, index) => (
              <p key={index}>{language}</p>
            ))
          }
        </div> */}
    </div>
  )
}
