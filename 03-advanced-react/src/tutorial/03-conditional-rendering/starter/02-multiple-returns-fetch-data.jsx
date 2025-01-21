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

  const { avatar_url, name, company, bio } = user;

  return (
    <div
      style={{
        backgroundColor: "#085",
        padding: "50px",
        maxWidth: "50%",
        borderBottomRightRadius: "40px",
      }}
    >
      <h1>In memoriam</h1>
      <img
        src={avatar_url}
        alt={name}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          borderTopLeftRadius: "40px",
        }}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <span>{bio}</span>
    </div>
  );

  return <h2>No user data available</h2>;
};
export default MultipleReturnsFetchData;
