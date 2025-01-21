import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <>
        <h1>An error occured</h1>
      </>
    );
  }

  if (user && !error) {
    return (
      <div>
        <h1>User Data</h1>
        <img
          src={user.avatar_url}
          alt={user.name}
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
            borderRadius: "40px",
          }}
        />
        <h2>{user.name}</h2>
        <h4>Works at {user.company}</h4>
        <span>{user.bio}</span>
      </div>
    );
  }

  return <h2>No user data available</h2>;
};
export default MultipleReturnsFetchData;
