import styles from './styles.module.css';

const Loading = ({label }) => {
    return(
        <div className={styles["loading-container"]}>
            <div className={styles.loading}></div>
            <span className={styles["loading-span"]}>{label}</span>
        </div>
    );
}

export default Loading;