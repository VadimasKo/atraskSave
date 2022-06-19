import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../modal/Modal ";
import styles from "./landingPage.module.css";

const ballVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", delay: 1 },
    whileHover: { opacity: 0 },
    borderRadius: "100%",
  },
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 1 },
    boxShadow: "0px 15px 0px rgb(0,0,0)",
  },
};

const textTransition = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: { type: "spring", delay: 0 },
  },
};

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.landingPage}>
      <motion.img
        alt="hoop"
        className={styles.basketHoop}
        src={process.env.PUBLIC_URL + "/assets/basketHoop.svg"}
      />

      <div className={styles.content}>
        <motion.h1
          animate="visible"
          className={styles.heroText}
          initial="hidden"
          variants={textTransition}
        >
          Atrask savo <br />
          <b>Sportą</b>
        </motion.h1>

        <motion.img
          alt="Pradėti"
          className={styles.basketBall}
          onClick={() => setIsOpen(true)}
          src={process.env.PUBLIC_URL + "/assets/basketBall.svg"}
          animate="visible"
          initial="hidden"
          variants={ballVariants}
          whileHover="hover"
        />
      </div>

      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && <Modal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};
