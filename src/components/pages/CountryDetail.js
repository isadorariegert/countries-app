import { Link } from "react-router-dom";
import style from "./CountryDetail.module.scss";

function CountryDetail() {
    return (
        <div>
        <Link to="/" >
            <input type="button" value="Back" />
        </Link>
        <h1 className={style.CountryDetailContainer}>COUNTRIES DETAIL</h1>
        </div>
    )
}

export default CountryDetail;