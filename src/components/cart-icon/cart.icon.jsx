import { useContext } from "react";
import "./cart-icon.styles.jsx";

import { CartContext } from "../../contexts/cart.context";
import {
  CartQuantity,
  ShoppingCartIcon,
  ShoppingcartWrapper,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartItemsAmount } =
    useContext(CartContext);

  const handleShow = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <ShoppingcartWrapper>
      <ShoppingCartIcon style={{ fontSize: "20px" }} onClick={handleShow} />
      <CartQuantity className="cart-quantity">{cartItemsAmount}</CartQuantity>
    </ShoppingcartWrapper>
  );
};

export default CartIcon;
