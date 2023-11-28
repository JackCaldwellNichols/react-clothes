/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (itemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const itemExists = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (itemExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  itemsAmount: 0,
  clearItem: () => {},
  cartTotal: 0,
});

const CART_OPEN_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  cartItems: [],
  cartTotal: 0,
  cartItemsAmount: 0,
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_OPEN_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_OPEN_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error("error");
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartTotal, cartItemsAmount }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItems) => {
    const newCartItemsAmount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_OPEN_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartItemsAmount: newCartItemsAmount,
      },
    });
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_OPEN_TYPES.SET_IS_CART_OPEN, payload: bool });
  };

  const addItem = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItem = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItem = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItem,
    removeItem,
    cartItems,
    cartItemsAmount,
    clearItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
