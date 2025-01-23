import { useEffect, useState } from "react";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error while fetching the data");
      }
      const res = await response.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading please wait</h1>
      </div>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
