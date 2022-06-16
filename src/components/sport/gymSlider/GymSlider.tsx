import styles from './gymSlider.module.css'
import gymImg from '../../../assets/aikstinas.jpg'
import { useState } from 'react'
import { motion } from 'framer-motion'

const gyms  = [
  {
    img: gymImg,
    title: 'SEB teniso kourtas',
    location: 'location1'
  },
  {
    img: gymImg,
    title: 'GymImg2',
    location: 'location2'
  },
  {
    img: gymImg,
    title: 'GymImg3',
    location: 'location3'
  },
]


const GymSlider = () => {
  const [position, setPosition] = useState(0)

  return (
    <div className={styles.GymSlider} >
      <h2>Kur galima išmeginti?</h2>

      <div className={styles.slider}>
       <motion.div className={styles.gym}>
        <img src={gyms[position].img} alt='gym'/>
        <p>{gyms[position].title}</p>
       </motion.div>
      </div>
     </div>
  )
}


export default GymSlider
