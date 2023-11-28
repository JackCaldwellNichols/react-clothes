import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  Name,
  Price,
} from "./cart-dropdown-item.styles";

const CartDropdownItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} />
      <ItemDetails className="item-details">
        <Name className="name">{name}</Name>
        <Price className="price">
          {quantity} X ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartDropdownItem;
