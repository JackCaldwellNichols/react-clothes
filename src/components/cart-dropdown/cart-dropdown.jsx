import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown.item";
import { Link } from "react-router-dom";
import {
  CartDropdwonContainer,
  CartItems,
  Message,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen, isCartOpen } = useContext(CartContext);
  return (
    <CartDropdwonContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartDropdownItem key={item.id} item={item} />
          ))
        ) : (
          <Message>Your cart is empty.</Message>
        )}
      </CartItems>
      <Link to="/checkout" className="link">
        <Button onClick={() => setIsCartOpen(!isCartOpen)}>
          Go to checkout
        </Button>
      </Link>
    </CartDropdwonContainer>
  );
};

export default CartDropdown;
