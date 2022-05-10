import styles from './CountryCard.module.scss'

function CountryCard({countryName, flag, countryCapital, population }) {
    return (
        <div className={styles.CardContainer}>
            {/* <div className={styles.CardContainer_image}> */}
                <img src={flag} alt="" />
            {/* </div> */}
            {/* <div className={styles.CardContainer_content}> */}
                <h2>{countryName}</h2>
                <p>{countryCapital}</p>
                <p>{population}</p>
            {/* </div> */}
            <button>See More</button>
        </div>
    )
}

export default CountryCard;