import { motion } from "framer-motion";
import { ReactElement } from "react";
import styles from "./backdrop.module.css";

interface Props {
  onClick: () => void;
  children: ReactElement;
}

const Backdrop = ({ onClick, children }: Props) => {
  return (
    <motion.div
      onClick={onClick}
      className={styles.backgdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
