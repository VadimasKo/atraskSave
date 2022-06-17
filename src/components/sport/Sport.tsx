import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import GymSlider from './gymSlider/GymSlider'
import styles from './sport.module.css'

interface Props {
  sportName: string
  sportDescr: ReactNode
  imgSrc: string
}


const Sport = ({ sportName, sportDescr, imgSrc }: Props) => {
  return (
    <section className={styles.sport}>
      <motion.article>
        <h2>{sportName}</h2>
        <div className={styles.description}>{sportDescr}</div>
      </motion.article>
      <motion.img
        src={process.env.PUBLIC_URL + imgSrc}
        alt="background Image"
        className={styles.sportImg}
      />
      <motion.div style={{ width: '25%',height: '100%', marginRight: '2rem'}}>
        <GymSlider sportName={sportName}/>
      </motion.div>
    </section>
  )
}

export default Sport