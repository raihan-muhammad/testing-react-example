import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import ListCar from "./ListCar";

jest.mock("axios");

test("Apakah data dari api jumlahnya sama", async () => {
  const dataListCar = [
    {
      id: 1,
      name: "Kijang",
    },
    {
      id: 2,
      name: "Inova",
    },
    {
      id: 3,
      name: "Fortuner",
    },
  ];

  axios.mockImplementation(() => Promise.resolve({ data: dataListCar }));
  render(<ListCar />);

  const btnShow = screen.getByTestId("btn-show");
  userEvent.click(btnShow);
  await waitFor(() => {
    const listCar = screen.getAllByTestId("car");
    expect(listCar).toHaveLength(dataListCar.length);
  });
});
