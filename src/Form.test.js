import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Test Form", () => {
  const MOCK_FUNCTION = jest.fn();

  beforeEach(() => {
    // eslint-disable-next-line
    render(<Form CALL_FUNCTION={MOCK_FUNCTION} />);
  });

  test("cek apakah text halaman form ada atau engga", () => {
    const textHeading = screen.getByTestId("text-form");
    expect(textHeading).toBeInTheDocument();
  });

  test("Check apakah button submit menjalankan sebuah function", () => {
    const btnSubmit = screen.getByRole("button");
    userEvent.click(btnSubmit);

    expect(MOCK_FUNCTION).toHaveBeenCalled();
  });
});
