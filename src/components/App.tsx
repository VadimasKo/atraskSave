
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Tennis from './tennis/Tennis';
import styles from './app.module.css'
import logo from '../assets/logo.png'


const App = () => {
  return (
    <div className={styles.app}>
      <HashRouter>
        <nav className={styles.header}>
          <Link to='/'>
            <img src={logo} alt="Atrask Save"/>
          </Link>
        </nav>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/tennis' element={<Tennis/>}/>
        </Routes>
      </HashRouter>
      
    </div>
  ) 
}

export default App
