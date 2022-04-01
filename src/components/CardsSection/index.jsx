import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import styles from './styles.module.css';
import Triangle from './../../assets/icons/tirangle.svg';


const CardsSection = ({ title, list }) => {
    const scrollRef = useRef();
    const [scroll, setScroll] = useState(0);
    useEffect(()=>scrollRef.current.scrollTo({left: scroll, behavior: 'smooth'}), [scroll]);
    return(
        <div className={styles["card-section-container"]}>
            <h2 className={styles["card-section-title"]}>{title}</h2>
            <div ref={scrollRef} className={styles["card-section"]} >
                {
                    list.map((item, key) => <Card key={key} title={item.name} image={process.env.REACT_APP_BACKEND+'/'+item.Images[0].path.split('tmp')[1]} description={item.description} link={`/course?id=${item.id}`} />)
                }
                { 
                    scroll >= 300 && 
                    <div className={[styles["show-less"]]} onClick={()=>{
                        setScroll(scroll - 300);
                    }}>
                        <img className="mirror" src={Triangle} alt="triangulo" />
                    </div>
                } 
                { 
                    list.length > 5 && scroll < (list.length-5) * 300  && 
                    <div className={styles["show-more"]} onClick={()=>{
                        setScroll(scroll + 300);
                    }}>
                        <img className="triangulo-invertido" src={Triangle} alt="triangulo" />
                    </div>
                } 
            </div>
        </div>
    );
}

export default CardsSection;