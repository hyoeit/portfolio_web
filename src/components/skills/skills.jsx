import React from 'react'
import styles from './skills.module.css'

const Skills = () => {
  return (
  <section>
    <div>
      <h2>skills</h2>
    </div>
    <div className={styles.container}>
      <h1 className={styles.title}>SKILLS</h1>
        <section className={styles.iconcontainer}>
          <section>
            <h2 className={styles.familiar} >Familiar</h2>
              <div className={styles.iconBox}>
                <img className={styles.icon} src="image/html.png" alt="html" />
                <p className={styles.skilltitle}>HTML</p>
              </div>
              <div className={styles.iconBox}>
                <img className={styles.icon} src="image/css.png" alt="css" />
                <p className={styles.skilltitle}>CSS</p>
              </div>
              <div className={styles.iconBox}>
                <img className={styles.icon} src="image/javascript.png" alt="javascript" />
                <p className={styles.skilltitle}>JAVASCRIPT</p>
              </div>
              <div className={styles.iconBox}>
                <img className={styles.icon} src="image/react.png" alt="react" />
                <p className={styles.skilltitle}>REACT</p>
              </div>
          </section>
          <section>
            <h2 className={styles.studying}>Studying</h2>
            <div className={styles.iconBox}>
                <img className={styles.icon} src="image/typescript.png" alt="typescript" />
                <p className={styles.skilltitle}>TYPESCRIPT</p>
              </div>
          </section>
        </section>
    </div>
  </section>  
  )
}

export default Skills
