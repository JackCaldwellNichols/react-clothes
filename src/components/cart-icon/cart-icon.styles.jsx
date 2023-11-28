import styled from "styled-components";
import { RiShoppingCartLine } from "react-icons/ri";

export const ShoppingcartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartQuantity = styled.span`
  background-color: #646cff;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -3px;
  left: 12px;
`;

export const ShoppingCartIcon = styled(RiShoppingCartLine)`
  font-zie: 20px;
`;
