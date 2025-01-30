import UserContainer from "./UserContainer";

export const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <UserContainer user={user} logout={logout} />
    </div>
  );
};

export default NavLinks;
