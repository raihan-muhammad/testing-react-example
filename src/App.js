import logo from './logo.svg';
import './App.css';
import ListCar from "./Listcar/ListCar";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";
import { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart } from "chart.js/auto";

function App() {
  const [files, setFiles] = useState();
  const [dataCar, setDataCar] = useState([]);

  const getDataCar = async () => {
    const data = await fetch(`https://rent-cars-api.herokuapp.com/admin/car`);
    const result = await data.json();
    setDataCar(result);
    console.log(result);
  };

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

  useEffect(() => {
    getDataCar();
  }, [files]);

  const dataChart = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "terjual",
        backgroundColor: "royalblue",
        data: dataCar.map((item) => item.price),
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
        <Bar data={dataChart} redraw={true} />
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
