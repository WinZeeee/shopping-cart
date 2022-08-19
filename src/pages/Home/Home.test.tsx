import { render, screen, waitFor } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockProductList from "../../dummy.json";
import { store } from "../../store";

import Home from "./Home";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Home", () => {
  test("Home component render properly", async () => {
    const ProductList = mockProductList;
    mockedAxios.get.mockResolvedValue({
      data: ProductList,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );
    await waitFor(() => {
      expect(screen.getByText("Newest")).toBeInTheDocument();
    });
  });

  test("Render product list property", async () => {
    const mockRes = { data: mockProductList } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockRes);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Apple iPhone 11")).toBeInTheDocument();
    });
    expect(axios.get).toHaveBeenCalled();
  });
});
