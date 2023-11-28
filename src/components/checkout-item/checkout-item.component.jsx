/* eslint-disable react/prop-types */
import { useContext } from "react";
import { SlTrash } from "react-icons/sl";
import { CartContext } from "../../contexts/cart.context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { removeItem, addItem, clearItem } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <FaChevronLeft
          style={{ cursor: "pointer" }}
          onClick={() => removeItem(item)}
        />
        {quantity}
        <FaChevronRight
          style={{ cursor: "pointer" }}
          onClick={() => addItem(item)}
        />
      </Quantity>
      <Price>${quantity * price}</Price>

      <RemoveButton>
        <SlTrash onClick={() => clearItem(item)} />
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
