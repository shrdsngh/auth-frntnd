import { createContext, useContext, useReducer } from "react";

export const initialState = {
  products: [],
  quantity: 0,
};

const CartContext = createContext();

export function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case "addToCart":
      return {
        ...state,
        products: state.products.concat(action.payload),
        quantity: state.quantity + 1,
      };

    default:
      throw new Error("WRONG!");
  }
}

function CartProvider({ children }) {
  const [{ products, quantity }, dispatch] = useReducer(reducer, initialState);

  const productsLength = products.length;

  return (
    <CartContext.Provider
      value={{ products, quantity, productsLength, dispatch }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (context === undefined)
    throw new Error("CartContext was used outside the CartProvider");

  return context;
}

export { CartProvider, useCart };
