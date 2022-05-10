import { Link } from 'react-router-dom';
import styles from './LinkButton.module.scss';


// to use a dinamic link button we need to pass as a props o to (=path) and the text
function LinkButton({ to, text }) {
    return (
        <Link className={styles.LinkButton} to={to}>{text}</Link>
    )
}

export default LinkButton;