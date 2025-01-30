export const UserContainer = ({ user, logout }) => {
  return (
    <div>
      {user.name ?
      (<>
      <h1>{user.name}</h1>
      <button className="btn" onClick={logout}>
        logout
      </button></>) : <p>Please Login</p> }
    </div>
  );
};

export default UserContainer;
