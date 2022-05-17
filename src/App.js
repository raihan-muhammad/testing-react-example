import logo from './logo.svg';
import './App.css';
import ListCar from "./Listcar/ListCar";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useState, useEffect } from "react";

function App() {
  const [files, setFiles] = useState();

  const getUploadParams = ({ meta }) => {
    setFiles(meta);
    return { url: "https://httpbin.org/post" };
  };

  const hanldeChangeStatus = ({ meta, file }, status) => {
    console.log(`Perubahaan terjadi ${status}`);
    setFiles(meta);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(`Files => ${files} && all Files => ${allFiles}`);
    allFiles.forEach((data) => data.remove());
  };

  useEffect(() => {}, [files]);

  return (
    <>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={hanldeChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
      />
      <ListCar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
