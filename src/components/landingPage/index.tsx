import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import Modal from "../modal"
import basketBall from "../../assets/basketBall.svg"
import basketHoop from "../../assets/basketHoop.svg"
import styles from "./landingPage.module.css"



const ballVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: 'spring', delay: 1 },
    whileHover: { opacity: 0 },
    borderRadius: "100%"
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 1 },
    boxShadow: "0px 15px 0px rgb(0,0,0)",
  },
}

const textTransition = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: 'spring', delay: 0 },
  }
}


const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.landingPage}>
      <motion.img 
        src={basketHoop}
        className={styles.basketHoop}
        alt="hoop"
      />

      <div className={styles.content}>
        <motion.h1
          className={styles.heroText}
          
          animate="visible"
          initial="hidden"
          variants={textTransition}
        >
          Surask savo <br/><b>Sporta</b>
        </motion.h1>
      
        <motion.img
          alt="Pradėti"
          className={styles.basketBall}
          onClick={() => setIsOpen(true)}
          src={basketBall}
          
          animate="visible"
          initial="hidden"
          variants={ballVariants}
          whileHover="hover"
        />
      </div>
    
      <AnimatePresence
        initial={false}
        exitBeforeEnter
      >
        {isOpen && <Modal onClose={() => setIsOpen(false)}/> }
      </AnimatePresence>
    </div>
  )
}

export default LandingPage