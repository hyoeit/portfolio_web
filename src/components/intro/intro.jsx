import React from 'react'
import styles from './intro.module.css'

const Intro = () => {
  return (
  <section>
    <div>
      <h2>Intro</h2>
    </div>
    <div className={styles.container}>
      <h1 className={styles.title}>안되면 될때까지</h1>
      <p className={styles.text}> 남들은 '이미 늦었다.' 라고 말합니다. 맞는 말 입니다. 늦었다 생각할 수 있습니다. </p>
      <p className={styles.text}> 늦었다는 생각이 든다면, 정말 늦었다는 사실이란 것도 알고 있습니다. </p>
      <p className={styles.text}> 그렇다고 불가능이라 생각하지 않습니다. </p>
      <p className={styles.text}> 하루 하루 죽어가가기 보다는, 하루 하루 꿈을 위해 살아가겠습니다. </p>
      <p className={styles.text}> 늦은 만큼 더 배우고 싶은 개발자 이효승 입니다. </p>
    </div>
  </section>  
  )
}

export default Intro
