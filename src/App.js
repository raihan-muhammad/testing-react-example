import logo from './logo.svg';
import './App.css';
import ListCar from "./Listcar/ListCar";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useState, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

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

  const dataChart = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "terjual",
        backgroundColor: "royalblue",
        data: [10, 3, 90],
      },
      {
        label: "Tidak terjual",
        backgroundColor: "salmon",
        data: [3, 5, 61],
      },
    ],
  };

  return (
    <>
      {/* Data Visualiasi with react chart.js */}
      <div style={{ width: 900 }}>
        <Bar data={dataChart} />
      </div>

      {/* Media handling with react dropzone */}
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
