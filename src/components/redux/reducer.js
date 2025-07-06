const initialState = {
  dark: true,
  product: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARK_BLACK":
      return { ...state, dark: (state.dark = false) };
    case "DARK_WHITE":
      return { ...state, dark: (state.dark = true) };
    case "CREATE_PRODUCT":
      return { ...state, product: [...state.product, action.payload] };
    case "SET_PRODUCTS":
      return { ...state, product: action.payload.data };
    default:
      return state;
  }
};
