import { useEffect, useState } from 'react';
import RatingStars from '../../components/RatingStars';

const Main = ({ title }) => {

    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);

    const [state, setState] = useState(0);
    return(
        <h1>
            Main works! - {state}
            <RatingStars state={state} setState={setState}/>
        </h1>
    );
}

export default Main;