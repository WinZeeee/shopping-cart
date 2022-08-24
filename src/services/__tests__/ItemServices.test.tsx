import axios, { AxiosResponse } from "axios";
import mockItems from "../../common/mockItems";
import { getShopItems, sortItems } from "../ItemServices";

jest.mock("axios");

describe("ItemServices", () => {
  test("getItems return data", async () => {
    const mockRes = { data: mockItems } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mockRes);
    const result = await getShopItems().then((res) => res.data);
    expect(result).toEqual(mockItems);
  });

  test("sortItems sort by Newest", async () => {
    const selectedItems = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
    ];
    const expectedResult = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },
    ];
    const result = sortItems(selectedItems, "Newest");
    expect(result).toEqual(expectedResult);
  });

  test("sortItems sort by PriceAsc", async () => {
    const selectedItems = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 250,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 50,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
    ];
    const expectedResult = [
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 50,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 250,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
    ];
    const result = sortItems(selectedItems, "PriceAsc");
    expect(result).toEqual(expectedResult);
  });

  test("sortItems sort by PriceDsc", async () => {
    const selectedItems = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 250,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 50,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
    ];
    const expectedResult = [
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 250,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 500,
        quantity: 1,
      },
      {
        id: 1,
        name: "Điện thoại Samsung Galaxy M23 5G (6GB/128GB)",
        unitPrice: 200,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/8d/1b/e9/6c4b0e5309a8f34c8db4910e35b9f51d.jpg",
        createdAt: 1000,
        quantity: 1,
      },
      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 150,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 200,
        quantity: 1,
      },

      {
        id: 2,
        name: "Điện thoại Samsung Galaxy A03 (3GB/32GB)",
        unitPrice: 50,
        image:
          "https://salt.tikicdn.com/cache/200x200/ts/product/aa/eb/7c/f50ac931ea3d2d12ea501c8f748aaaff.jpg",
        createdAt: 600,
        quantity: 1,
      },
    ];
    const result = sortItems(selectedItems, "PriceDsc");
    expect(result).toEqual(expectedResult);
  });
});
