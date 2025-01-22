import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((menuItem) => {
        return <MenuItem key={menuItem.id} menuItem={menuItem} />;
      })}
      ;
    </div>
  );
};

export default Menu;
