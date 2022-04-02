import { useContext, useEffect, useState } from 'react';
import CardsSection from '../../components/CardsSection';
import Loading from '../../components/Loading';
import UserContext from '../../contexts/UserContext';
import Course from '../../services/Course';

const Main = ({ title }) => {
    const {state, dispatch} = useContext(UserContext);    
    const[courses, setCourses] = useState([]);

    async function getCourses(){
        const response = await Course.getAll();
        setCourses(response.data);
    }

    useEffect(() => {
        document.title = `Mileto - ${title}`;    
        getCourses();
    }, [title, dispatch]);

    return(
        <>
            <h1> 
                { state.name && `Bem vindo, ${state.name}!` }
            </h1>
            {
             courses.length  ?    
                <CardsSection title="Cursos Gerais" list={courses}/>
                :
                <Loading label="Carregando"/>
            }
        </>
        
    );
}

export default Main;