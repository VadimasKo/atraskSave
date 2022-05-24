import styles from './tennis.module.css'
import tennis from '../../assets/tennis.svg'
import tennisCourt from '../../assets/aikstinas.jpg'
import { motion } from 'framer-motion'
import { slideIn } from '../modal/Modal '


const Tennis = () => {

  return (
    <div className={styles.tennis}>
      <motion.div 
        className={styles.sportInfo} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h2>Tenisas</h2> 
        <p>tai sportas, kuris reikalauja <b>daug</b> fizinių jėgų, vikrumo ir <b>sumanumo.</b></p> 
        
        <p>Mušdamas kamuoliuką <b>jau turi žinoti</b>, kurs jis nuskries, kaip į tai sureaguos varžovas. </p>
          
          Visa tai lavina mąstymą, gerina atmintį ir, žinoma, nuotaiką.
      </motion.div>
      <motion.img
        src={tennis}
        alt=""
        className={styles.sportImg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      
      />
      <motion.div className={styles.gymSlider} variants={slideIn} transition={{duration: 5}}>
        <h3>Sporto aikštinai šalia tavęs</h3>
        <img src={tennisCourt} alt='Teniso aikstele' />
        <h4>SEB teniso kourtas</h4>
      </motion.div>
    </div>
  )
}

export default Tennis