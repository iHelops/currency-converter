import React from 'react'
import Converter from '../Converter/Converter'
import Currency from '../Currency/Currency'
import styles from './Course.module.css'

function Course() {
  return (
    <div className={styles.course}>
        <div className="container">
            <Currency/>
            <Converter/>
        </div>
    </div>
  )
}

export default Course