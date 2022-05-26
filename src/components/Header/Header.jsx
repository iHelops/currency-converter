import React from 'react'
import style from './Header.module.css'

function Header(props) {
  return (
    <div className={style.header}>
        <div className="container">
            <h1>Currency Converter</h1>
        </div>
    </div>
  )
}

export default Header