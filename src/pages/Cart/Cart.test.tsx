import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../store";
import Cart from "./Cart";
import ItemList from "./ItemList/ItemList";

describe("Cart", () => {
  test("Cart component render properly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Cart />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText("0$")).toBeInTheDocument();
  });

  test("Selected item list render properly", () => {
    const selectedItems = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1660212963,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 1660214050,
        quantity: 1,
      },
    ];

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ItemList Items={selectedItems} />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByText("Điện thoại Samsung Galaxy A03 (3GB/32GB)")
    ).toBeInTheDocument();
  });
});
