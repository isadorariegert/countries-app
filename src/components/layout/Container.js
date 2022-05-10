import styles from './Container.module.scss'

function Container(props) {
    //precisa adc o props.children pq esse componente vai encapsular o router na main
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )//existe essa forma de passar classes de forma dinamica usando props
}

export default Container;