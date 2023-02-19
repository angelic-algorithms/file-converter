import React, { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import styles from '../styles/home.module.css'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}


function ImageConverter() {
  const [file, setFile] = useState(null);
  const [base64Image, setBase64Image] = useState('');

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {base64Image && (
        <img src={base64Image} alt="Converted Image" />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Image Converter</h1>
      <ImageConverter />
    </div>
  );
}

