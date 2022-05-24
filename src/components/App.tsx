
import { BrowserRouter, Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Sports from './sports/Sports';
import Tennis from './tennis/Tennis';
import styles from './app.module.css'
import logo from '../assets/logo.png'


const App = () => {
  // const navigate = useNavigate()

  return (
    <div className={styles.app}>

      <BrowserRouter>
        <nav className={styles.header}>
          <Link to='/'>
           <img src={logo} alt="Atrask Save"/>
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='sports'element={<Sports/>}>
            <Route path='tennis' element={<Tennis/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
