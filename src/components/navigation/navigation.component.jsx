import "./navigation.styles.jsx";
import { Outlet, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebaseConfig";
import CartIcon from "../cart-icon/cart.icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";
import {
  LinksContainer,
  Logo,
  LogoContainer,
  NavLink,
  NavigationContainer,
} from "./navigation.styles.jsx";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo src={logo} />
        </LogoContainer>
        <LinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          <NavLink to="/shop">CONTACT</NavLink>
          {currentUser === null ? (
            <NavLink to="/auth">SIGN IN</NavLink>
          ) : (
            <NavLink as="span" to="/auth" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          )}
          <CartIcon />
        </LinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Nav;
