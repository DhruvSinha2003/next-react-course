import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Dhruv" });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h1>Hello {user.name}</h1>
          <button onClick={logout} className="btn">
            Login
          </button>
        </>
      ) : (
        <>
          <h1>Please Login</h1>
          <button onClick={login} className="btn">
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
