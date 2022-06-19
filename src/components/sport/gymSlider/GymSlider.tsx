import styles from "./gymSlider.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import fullList from "./gymList.json";

interface Gym {
  img: string;
  title: string;
  location: string;
}

interface Props {
  sportName: string;
}

const sliderTransition = {
  hidden: {
    opacity: 0,
    x: "50vw",
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: { type: "spring", delay: 0.5, duration: 1 },
  },
};

export default ({ sportName }: Props) => {
  const [position, setPosition] = useState(0);
  const [gyms, setGyms] = useState<Gym[] | null>(null);

  useEffect(() => {
    const buffer: Gym[] = JSON.parse(JSON.stringify(fullList))[sportName];
    setGyms(buffer);
  }, [sportName]);

  return gyms ? (
    <motion.div
      className={styles.GymSlider}
      animate="visible"
      initial="hidden"
      variants={sliderTransition}
    >
      <h2>Kur galima išmeginti?</h2>

      <div className={styles.gym}>
        <img src={process.env.PUBLIC_URL + gyms[position].img} alt="gym" />
        <p>{gyms[position].title}</p>
      </div>

      <ul className={styles.gymNav}>
        {gyms.map((gym, i) => (
          <motion.li
            key={i}
            className={position === i ? styles.activeDot : styles.dot}
            onClick={() => setPosition(i)}
          />
        ))}
      </ul>
    </motion.div>
  ) : (
    <></>
  );
};
