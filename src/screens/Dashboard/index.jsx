import { useEffect } from 'react';
import styles from './styles.module.scss';

const Dashboard = ({title}) => {

    useEffect(()=>{
        document.title = `Mileto - ${title}`;
    }, [title]);

    return(
        <h1>Dashboard exists!</h1>
    );
}

export default Dashboard;