import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Course from "../../services/Course";
import styles from './styles.module.css';


const CourseDetails = ({ title }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");
    const [course, setCourse] = useState({});

    async function getCourse(id){
        setCourse(await Course.get(id));
    }

    useEffect(()=>{
       getCourse(id)
    }, []);

    useEffect(()=>{ document.title = `Mileto - ${course.name ? course.name : title}` }, [course])

    return(
        <div className={styles["course-container"]}>
            <div className={styles.banner}>
                <h1 className={styles.title}>{course.name? course.name :"Carregando..."}</h1> 
            </div>
            <div className={styles["content-body"]}>
                <div className={styles["about"]}>
                    <h3>Sobre este curso</h3>
                    <p className={styles.paragraph}>{ course.description ? course.description : "Carregando descrição..."}</p>
                </div>
                <div className={styles["course-section"]}>
                    <div className={styles["thumbnail-container"]}>
                        {course.Images ? <img className={styles.thumbnail} src={process.env.REACT_APP_BACKEND+'/'+course.Images[0].path.split('tmp')[1]} alt="Thumbnail do Curso"/> : <Loading label="Carregando Curso"/>}
                    </div>
                    <button className={styles["link-course"]}>{course.id ? "Inscrever-se" : "Carregando..."}</button>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;