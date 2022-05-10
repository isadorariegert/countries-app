import styles from './CountryInfos.module.scss'

export default function CountryInfos({ countryName, countryCapital, population, currency, languages }) {
  return (
    <div className={styles.CardContentContainer}>
        <h2>{countryName}</h2>
        <p>{countryCapital}</p>
        <p>{population}</p>
        <p>{currency}</p>
        <p>{languages}</p>
    </div>
  )
}
