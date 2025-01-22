import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const url = "https://www.course-api.com/react-tours-project";
const App = () => {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Error Fetching");
      }
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <button onClick={() => fetchData()} className="btn">
        Refresh tourlist
      </button>
    );
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return <div>{tours && <Tours tours={tours} removeTour={removeTour} />}</div>;
};
export default App;
