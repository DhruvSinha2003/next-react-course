type BasicUser = { type: "basic"; name: "string" };
type AdvancedUser = { type: "advanced"; name: "string"; email: "string" };
type User = BasicUser | AdvancedUser;
function Component(props: User) {
  const { type, name } = props;
  if (type === "basic") {
    return (
      <article className="alert alert-success">
        <h2>User: {name}</h2>
      </article>
    );
  } else {
    const { email } = props;
    return (
      <article className="alert alert-danger">
        <h2>User: {name}</h2>
        {email && <h2>Email: {email}</h2>}
      </article>
    );
  }
}
export default Component;
