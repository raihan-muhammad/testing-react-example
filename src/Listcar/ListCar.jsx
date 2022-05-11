import { useState } from "react";
import axios from "axios";

const ListCar = () => {
  const [listCar, setListCar] = useState([]);
  const getCar = async () => {
    const { data } = await axios(
      `https://rent-cars-api.herokuapp.com/admin/car`
    );

    setListCar(data);
  };
  return (
    <>
      <h1>List Car</h1>
      <button data-testid="btn-show" onClick={getCar}>
        Show List
      </button>
      <ul>
        {listCar.map((car) => (
          <li key={car.id} data-testid="car">
            {car.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListCar;
