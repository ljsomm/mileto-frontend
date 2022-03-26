import styles from './style.module.css';
import onStar from '../../assets/icons/on-star.png';
import offStar from '../../assets/icons/off-star.png';

const RatingStars = ({state, setState}) => {
    return(
        <div className={styles["rating-background"]}>
           <img src={state >= 1 ? onStar : offStar} alt="estrela" onClick={()=>setState(1)} /> 
           <img src={state >= 2 ? onStar : offStar} alt="estrela" onClick={()=>setState(2)} /> 
           <img src={state >= 3 ? onStar : offStar} alt="estrela" onClick={()=>setState(3)} /> 
           <img src={state >= 4 ? onStar : offStar} alt="estrela" onClick={()=>setState(4)} /> 
           <img src={state >= 5 ? onStar : offStar} alt="estrela" onClick={()=>setState(5)} /> 
        </div>
    );
}

export default RatingStars;