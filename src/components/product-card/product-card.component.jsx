/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
  ProductCardImage,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const { imageUrl, name, price } = product;

  const addProductToCart = () => addItem(product);

  return (
    <ProductCardContainer>
      <ProductCardImage src={imageUrl} alt={`${name}`} />
      <Footer className="footer">
        <Name className="name">{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
