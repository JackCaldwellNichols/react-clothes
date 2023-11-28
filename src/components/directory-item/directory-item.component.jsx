import { Link } from "react-router-dom";
import {
  BackgroundImage,
  CategoryBodyContainer,
  DirectoryItemContainer,
  ShopNow,
  Title,
} from "./directory.item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryBodyContainer>
        <Title>{title}</Title>
        <Link to={`/shop/${title}`} className="link">
          <ShopNow>Shop Now</ShopNow>
        </Link>
      </CategoryBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
