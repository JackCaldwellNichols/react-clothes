/* eslint-disable react/prop-types */
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryComponent } from "./directory.component-styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirectoryComponent className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </DirectoryComponent>
  );
};

export default Directory;
