
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LandingPage from './landingPage/LandingPage';
import Tennis from './tennis/Tennis';
import styles from './app.module.css'


const App = () => {
  return (
    <div className={styles.app}>
      <HashRouter>
        <nav className={styles.header}>
          <Link to='/'>
            <img src={process.env.PUBLIC_URL+'/assets/logo.png'} alt="Atrask Save"/>
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
