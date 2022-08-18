import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
  name: "selectedItems",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // if item already exists add 1 to quantity
      if (
        state.items.filter((item) => item.id === action.payload.id).length > 0
      ) {
        state.items.filter(
          (item) => item.id === action.payload.id
        )[0].quantity += 1;
        return state;
      }
      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    updateItemQuantity: (state, action) => {
      state.items.filter((item) => item.id === action.payload.id)[0].quantity =
        action.payload.quantity;
    },
  },
});

export const selectSelectedItems = (state) => state.selectedItems.items;
export const { addItem, removeItem, updateItemQuantity } = ItemSlice.actions;
export default ItemSlice.reducer;
