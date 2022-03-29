import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import { ModalProvider } from './contexts/ModalContext';
import { UserProvider } from './contexts/UserContext';
import routes from './routes'
import Private from './routes/Private';
import Public from './routes/Public';
import './styles/global.css';

const App = () => {
  return(
    
      <BrowserRouter>
        <CookiesProvider>
          <UserProvider>
            <ModalProvider>
              <DefaultLayout>
                <Routes>
                  {
                    routes.map( (item, key) =>{  return <Route key={key} path={item.path} element={item.private ? <Private component={<item.component title={item.title}/>}/> : (item.public ? <Public component={<item.component title={item.title}/>}/> : <item.component title={item.title}/> ) } />} )
                  }
                </Routes>
              </DefaultLayout>  
            </ModalProvider>
          </UserProvider>
        </CookiesProvider>
      </BrowserRouter>
      
  );
}

export default App;