import { useEffect, useState } from "react";
import data from "./data";
import Menu from "./Menu";
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const categories = data.map((item) => item.category);
  const categorySet = new Set(categories);
  const categoryList = ["all", ...categorySet];

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div>
        {categoryList.map((category) => {
          return (
            <button
              className="btn"
              style={{ margin: "10px" }}
              onClick={() => {
                filterItems(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <Menu menu={menuItems} category={categoryFilter} />
    </div>
  );
};
export default App;
