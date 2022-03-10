import { useEffect } from 'react';

const Main = ({ title }) => {

    useEffect(() => {
        document.title = `Mileto - ${title}`;
    }, [title]);

    return(
        <h1>
            Main works!
        </h1>
    );
}

export default Main;