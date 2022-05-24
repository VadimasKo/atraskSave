import { motion } from "framer-motion"
import Backdrop from "./backdrop/Backdrop"
import goal from "../../assets/goal.svg"
import styles from "./modal.module.css"
import { useNavigate } from "react-router-dom"

interface Props {
  onClose: () => void
}

export const slideIn = {
  hidden : {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring"
    }
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  }
}


const Modal = ({ onClose }: Props) => {
  const navigate = useNavigate()

  return (
    <Backdrop onClick={onClose} >
      <motion.div
        onClick={e => e.stopPropagation()}
        className={styles.modal}
        
        variants={slideIn}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div className={styles.banner}>
          <h2>Atsakyk ir surask</h2>
          <img src={goal} className={styles.bannerImg} alt="goalImg"/>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.option} style={{maxWidth: '65%'}}>
               Kiek eurų esi linkęs paploti?
              <input type='range'/>
            </div>
            <div  className={styles.option} style={{maxWidth: '80%'}}> 
            
              Kaip stipriai megsti adrenalina?
              <input type='range'/>
            </div>
            <div  className={styles.option} style={{maxWidth: '90%'}}> 
        
              Kaip  stipriai nori prakaituoti vienas?
              <input type='range'/>
            </div>
            <button type="submit" onClick={() => navigate('sports/tennis')}>
              Ieškoti
            </button>
          </div>

        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
