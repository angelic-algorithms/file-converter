import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
// import type { NextPage } from "next";
// import Head from "next/head";
import styles from '../styles/home.module.css'
function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  const handleFileChange = e => {

  };

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
          <form id="file-input">
            {/* <label for="myfile">Convert</label> */}
            <input style ={{color: "blue;"}} type="file" id="myFile" name="filename" onChange={handleImageChange}></input>
              {base64Image && (
                <img src={base64Image} alt="Converted Image" />
              )}
            {/* <output id="output"></output> */}
            {/* <button style = {{left: "22çpx;"}}type="submit">Submit</button> */}
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