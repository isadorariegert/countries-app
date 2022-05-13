import styles from './CountryInfos.module.scss'
import Currency from './Currency';

export default function CountryInfos({ countries }) {
  
  let flag;
  let countryName;
  let countryCapital;
  let  population;
  let currencies;
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    countryName = country.name;
    countryCapital = country.capital;
    population = country.population 
    flag = country.flags.png
    country.currencies?.forEach(currency => {
      currencies.push(currency.name)
    })
    country.languages.forEach(language => {
      languages.push(language.name)
    })
    borders = country.borders;

  });
  
  return (
    <div className={styles.CardContentContainer}>
        <h2>Country: {countryName}</h2>
        <img src={flag} alt={`flag of ${countryName}`} />
        <p>Capital: {countryCapital}</p>
        <p>Populaçao: {population}</p>
        <div>
        <p>Languages{}</p>
          {
            languages.map((language) => (
              <p> {language}</p>
            ))
          }
        </div>
        <div>
        <p>Currencies</p>
          {
            currencies.map(currency => {
              if(currencies.indexOf(currency) !== currencies.length - 1) {
                return (
                  <p> {currency}</p>
                )
              }
              
            })
          }
        </div>
        <div>
          <p>Bordering Countries:</p>
          {
            borders.map((bounder, index) => (
              <p key={index}>{bounder}</p>
            ))
          }
        </div>
    </div>
  )
}
