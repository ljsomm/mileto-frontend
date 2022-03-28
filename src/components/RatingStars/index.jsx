import styles from './style.module.css';
import onStar from '../../assets/icons/on-star.png';
import offStar from '../../assets/icons/off-star.png';

const RatingStars = ({ state, setState }) => {
    return(
        <div className={styles["rating-background"]}>
           <img src={state.stars >= 1 ? onStar : offStar} alt="estrela" onClick={()=>setState({...state, stars: 1 })} /> 
           <img src={state.stars >= 2 ? onStar : offStar} alt="estrela" onClick={()=>setState({...state, stars: 2 })} /> 
           <img src={state.stars >= 3 ? onStar : offStar} alt="estrela" onClick={()=>setState({...state, stars: 3 })} /> 
           <img src={state.stars >= 4 ? onStar : offStar} alt="estrela" onClick={()=>setState({...state, stars: 4 })} /> 
           <img src={state.stars >= 5 ? onStar : offStar} alt="estrela" onClick={()=>setState({...state, stars: 5 })} /> 
        </div>
    );
}

export default RatingStars;