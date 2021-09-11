import React from 'react'
import styles from './portfolio2.module.css'

const Portfolio2 = () => {

  

  return (
    <div>
      <section className={styles.noteSection}>
        <img className={styles.noteImg} src="image/hyotube.png" alt="note" />
        <div className={styles.note} >
          <a className={styles.noteLink} href="https://hyoeit.github.io/hyotube/" target="_blank">2. HYOTUBE</a>
          <p className={styles.desc} >         YOUTUBE를 클론코딩 하여 만든 HYOTUBE  </p>
          <p className={styles.desc}> API를 사용하여 검색 및 재생이 가능하도록 만들었습니다.</p>
          <p className={styles.skills}>사용한기술 : REACT, JAVASCRIPT, CSS, AXIOS, POSTMAN</p>
          <a className={styles.github} href="https://github.com/hyoeit/hyotube">GITHUB 바로가기</a>

        </div>
        
      </section>
    </div>
  )
}

export default Portfolio2
