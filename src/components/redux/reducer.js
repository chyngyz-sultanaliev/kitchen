/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
const initialState = {
  dark: JSON.parse(localStorage.getItem("dark")) || false,
  product: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_BLACK":
      localStorage.setItem("dark", "true");
      return { ...state, dark: true };
    case "DARK_WHITE":
      localStorage.setItem("dark", "false");
      return { ...state, dark: false };
    case "CREATE_PRODUCT":
      return { ...state, product: [...state.product, action.payload] };
    case "SET_PRODUCTS":
      return { ...state, product: action.payload.data };
    case "ADD_TO_CART":
      const res = state.cart.find((item) => item.id === action.payload._id);
      if (!res) {
        let result = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(result));
        return { ...state, cart: result };
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (el) => el._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    case "INCREMENT_QUANTITY":
      const incrementedCart = state.cart.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(incrementedCart));
      return { ...state, cart: incrementedCart };
    case "DECREMENT_QUANTITY":
      const decrementedCart = state.cart.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(decrementedCart));
      return { ...state, cart: decrementedCart };
    default:
      return state;
  }
};
