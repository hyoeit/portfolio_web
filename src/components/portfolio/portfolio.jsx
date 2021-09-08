import React from 'react'
import styles from './portfolio.module.css'

const Portfolio = () => {

  

  return (
    <div>
      <h2>portfolio</h2>
      <section className={styles.noteSection}>
        <img className={styles.noteImg} src="image/note.png" alt="note" />
        <div className={styles.note} >
          <a className={styles.noteLink} href="https://hyoeit.github.io/todolist_withoutLogin/" target="_blank">1. Note</a>
          <p className={styles.desc} >         오프라인에서 자주 사용하는 노트를 참고하여 만든 메모장. </p>
          <p className={styles.desc}> 할 일 추가, 삭제, 체크, 중요표시 기능을 동적으로 만들었습니다. </p>
          <p className={styles.skills}>사용한기술 : REACT, JAVASCRIPT, CSS</p>
          <a className={styles.github} href="https://github.com/hyoeit/todolist_withoutLogin">GITHUB 바로가기</a>

        </div>
        
      </section>
    </div>
  )
}

export default Portfolio
