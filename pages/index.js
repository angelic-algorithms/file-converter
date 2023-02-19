import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {

  return (
    <main className={styles.main}>
      <div id="title" style={{textAlign: "center;"}}>
        <h1>File Converter</h1>
      </div>
      <p style ={{color: "blue;", textAlign: "center;"}}>
        Please input the file you'd like to convert.
      </p>
      <div style={{textAlign: "center;"}}>
        <div style={{textAlign: "center;"}}>
          <form>
            {/* <label for="myfile">Convert</label> */}
            <input onInput={handleFileChange()} style ={{color: "blue;"}} type="file" id="myFile" name="filename"></input>
            {/* <input style ={{color: "blue;"}} type="submit"></input> */}
            {/* input.addEventListener('change', handleFileChange); */}
          </form>
        </div>
        <div style={{textAlign: "center;", margin: "10px;" }}>
          <form action="/send-data-here" method="post">
              <label style ={{color: "blue;"}} for="target-file-extension">Enter file extension to convert to </label>
              <input type="text" id="target-file-extension" name="file-ext" />
              <button style = {{left: "22çpx;"}}type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Home

function handleFileChange(value) {
  
  console.log(value);

}