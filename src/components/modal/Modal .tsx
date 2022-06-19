import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Backdrop from "./backdrop/Backdrop";
import RangeInput from "../common/RangeInput";
import styles from "./modal.module.css";

interface Props {
  onClose: () => void;
}

export const slideIn = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
  },
};

export default ({ onClose }: Props) => {
  const navigate = useNavigate();
  const [lonelyScore, setLonelyScore] = useState(5);

  const onSubmit = () => navigate(lonelyScore >= 5 ? "./tennis" : "./football");

  return (
    <Backdrop onClick={onClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>
          <h2>Atsakyk ir surask</h2>
          <RangeInput
            name="Kiek esi linkęs išleisti"
            prefix="0.000"
            suffix="pinigai yra tik skaičius"
          />
          <RangeInput
            name="Ar tau trūksta adrenalino?"
            prefix="NOPE!"
            suffix="Ant tiek kad VVT važinėju be bilietuko"
          />

          <RangeInput
            name="Ar norėtum sportuoti vienas?"
            prefix="O__o?"
            suffix="Šlapios beždžionės nedomina"
            onChange={(e) => setLonelyScore(parseInt(e.currentTarget.value))}
          />

          <button
            type="submit"
            className={styles.submitButton}
            onClick={onSubmit}
          >
            Ieškoti
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};
