import React from 'react'
import styles from './profile.module.css'
import { IoMailOutline, IoLogoGithub, IoPhonePortraitOutline, IoPaperPlaneOutline } from "react-icons/io5";

const Profile = () => {
  return (
  <>  
    <h2 className={styles.profileText}>Profile</h2>
    <section className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.meImg} src="image/me.jpeg" alt="photo" />
      </div>
      <div className={styles.aboutMe}>
        <h2 className={styles.koName}>이효승, LEE HYOSEUNG
        </h2>
        <p className={styles.front}>Web Frontend Developer</p>
        <p className={styles.mail}>
          <IoMailOutline className={styles.icon} />hyoe.hi.it@gmail.com
        </p>
        <p className={styles.phone}>
          <IoPhonePortraitOutline className={styles.icon} />
          010-5148-1358
        </p>
        <p className={styles.tistory}>
          <IoPaperPlaneOutline className={styles.icon} />
          hyoe-it.tistory.com
        </p>
        <p className={styles.github}>
          <IoLogoGithub className={styles.icon}/>
          github.com/hyoeit
        </p>
      </div>
    </section>
  </> 
  )
}

export default Profile
