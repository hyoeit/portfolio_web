import React, {useState, useEffect} from 'react'
import styles from './header.module.css'

const Header = () => {

  const txt = 'HYOSEUNG LEE';
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => { 
    const interval = setInterval( () => {
      setText(text + txt[count]);
      setCount(count + 1);
    }, 100);
    if(count === txt.length){
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  })

  return (
    <div className={styles.header}>
      <h1 className={styles.text}>{text}</h1>
    </div>
  )
}

export default Header
