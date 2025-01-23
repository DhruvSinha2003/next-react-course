import { useEffect, useState } from "react";
import data from "./data";
import Menu from "./Menu";
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const categories = data.map((item) => item.category);
  const categorySet = new Set(categories);
  const categoryList = ["all", ...categorySet];

  return (
    <div>
      <h1>Menu</h1>
      <div>
        {categoryList.map((category) => {
          return (
            <button className="btn" style={{ margin: "10px" }}>
              {category}
            </button>
          );
        })}
      </div>
      <Menu menu={menuItems} />
    </div>
  );
};
export default App;
