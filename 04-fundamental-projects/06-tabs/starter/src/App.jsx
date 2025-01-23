import { useEffect, useState } from "react";
import JobInfo from "../JobInfo";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error while fetching the data");
      }
      const res = await response.json();
      setData(res);
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

  return (
    <div>
      {data.length > 0 ? (
        data.map((job) => <JobInfo key={job.id} job={job} />)
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default App;
