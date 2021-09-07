import React from 'react'
import styles from './portfolio.module.css'

const Portfolio = () => {

  

  return (
    <div>
      <h2>portfolio</h2>
      <section className={styles.noteSection}>
        <img className={styles.noteImg} src="image/note.png" alt="note" />
        <div>
          <a className={styles.noteLink} href="https://hyoeit.github.io/todolist_withoutLogin/" target="_blank">1. Note</a>
          <p> 오프라인에서 자주 사용하는 노트를 참고하여 만든 메모장 입니다. </p>
          <p> 할 일 추가, 삭제, 체크, 중요표시 기능을 동적으로 만들었습니다. </p>
          <p> 추 후 Firebase로 로그인 연동을 시킬 예정입니다.</p>
          <div>
            <p>CATEGORY</p>
            <p>SOURCE</p>
          </div>
          <div>
            <img className={styles.reactIcon} src="image/react.png" alt="react" />
            <p>REACT</p>
            <p>GITHUB</p>
          </div>

          
        </div>
        
      </section>
    </div>
  )
}

export default Portfolio
