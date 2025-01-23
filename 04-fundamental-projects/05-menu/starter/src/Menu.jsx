import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu, category }) => {
  return (
    <div>
      <h3>Menu for category: {category}</h3>
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} menuItem={menuItem} />;
      })}
      ;
    </div>
  );
};

export default Menu;
