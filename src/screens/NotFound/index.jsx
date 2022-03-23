import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';


const NotFound = () => {
    const navigate = useNavigate();
    return(
        <div className={styles['not-found']}>
            <h1 className={styles['not-found-title']}>404</h1>
            <div className={styles.message}>
                <p>Página não encontrada</p>
                <button onClick={()=>navigate(-1)}>Voltar</button>
            </div>
        </div>
    );
}

export default NotFound;