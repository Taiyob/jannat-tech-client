// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [] as any,
//   selectedItems: 0,
//   totalPrice: 0,
//   tax: 0,
//   taxRate: 0.1,
//   grandTotal: 0,
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const isExist = state.products.find(
//         (product) => product.id === action.payload.id
//       );

//       if (!isExist) {
//         state.products.push({ ...action.payload, quantity: 1 });
//       }
//       // } else {
//       //   isExist.quantity += 1;
//       // }

//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },
//     updateQuantity: (state, action) => {
//       const products = state.products.map((product) => {
//         if (product.id === action.payload.id) {
//           if (action.payload.type === "increment") {
//             product.quantity += 1;
//           } else if (
//             action.payload.type === "decrement" &&
//             product.quantity > 0
//           ) {
//             product.quantity -= 1;
//           }
//         }
//         return product;
//       });
//       state.products = products;
//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },
//     removeFromCart: (state, action) => {
//       state.products = state.products.filter(
//         (product) => product.id !== action.payload
//       );
//       // Recalculate cart totals after removing an item
//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },
//     clearCart: (state) => {
//       state.products = [];
//       state.selectedItems = 0;
//       state.totalPrice = 0;
//       state.tax = 0;
//       state.grandTotal = 0;
//     },
//   },
// });

// export const selectSelectedItems = (state) =>
//   state.products.reduce((total, product) => total + product.quantity, 0);

// export const selectTotalPrice = (state) =>
//   state.products.reduce(
//     (total, product) => total + product.quantity * product.price,
//     0
//   );

// export const selectTax = (state) => selectTotalPrice(state) * state.taxRate;

// export const selectGrandTotal = (state) =>
//   selectTotalPrice(state) + selectTax(state);

// export const { addToCart, updateQuantity, removeFromCart, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;
