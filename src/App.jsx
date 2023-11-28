import { Routes, Route } from "react-router-dom";
import Nav from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/cart/checkout.component";
import { useContext } from "react";
import { UserContext } from "./contexts/user.context";

const App = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route
          path="auth"
          element={!currentUser ? <Authentication /> : <Home />}
        />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
