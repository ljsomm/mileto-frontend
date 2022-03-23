import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Main = ({ title }) => {

    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);

    const [cookies] = useCookies();

    return(
        <h1>
            Main works!
        </h1>
    );
}

export default Main;