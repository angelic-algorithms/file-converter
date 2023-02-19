import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function test() {

  return (
    <main className={styles.main}>
      <div id="title" style={{textAlign: "center;"}}>
        <h1>File Converter</h1>
      </div>
      <p style ={{color: "blue;", textAlign: "center;"}}>
        Please input the file you'd like to convert.
      </p>
      <div style={{textAlign: "center;"}}>
        <form action="/test">
        <input onChange={(e) => handleFileChange(e)} style ={{color: "blue;"}} type="file" id="myFile" name="filename"></input>
        <input style ={{color: "blue;"}} type="submit"></input>
      </form>
      </div>
    </main>
  )
}

export default test