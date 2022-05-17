import { motion } from "framer-motion"
import Backdrop from "./backdrop"
import goal from "../../assets/goal.svg"
import styles from "./modal.module.css"

interface Props {
  onClose: () => void
}

const slideIn = {
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
          <h3>Atsakyk ir surask</h3>
          <img src={goal} className={styles.bannerImg} alt="goalImg"/>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.form}>
            <div className={styles.option} style={{maxWidth: '50%'}}>
              Ar megsti adrenalina?
              <input type='range'/>
            </div>
            <div  className={styles.option} style={{maxWidth: '70%'}}> 
              Ar miegsti prakaituoti vienas?
              <input type='range'/>
            </div>
            <div  className={styles.option} style={{maxWidth: '90%'}}> 
              Kiek eurų esi linkęs paploti?
              <input type='range'/>
            </div>
          <button type="submit">Ieškoti</button>
          </div>

        </div>
      </motion.div>
    </Backdrop>
  )
}

export default Modal
