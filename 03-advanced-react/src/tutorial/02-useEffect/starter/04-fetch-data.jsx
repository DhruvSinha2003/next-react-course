const url = "https://api.github.com/users";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Github Users</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.login}</h1>;
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default FetchData;
