import { useEffect, useState } from "react";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Error Fetching");
        }
        const data = await res.json();
        setTours(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div>Tours Starter</div>;
};
export default App;
