import { useEffect, useState } from "react";
import data from "./data";
import Menu from "./Menu";
const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <div>
      <h1>Menu</h1>
      <Menu menu={menuItems} />
    </div>
  );
};
export default App;
