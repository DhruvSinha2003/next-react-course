import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmailChange = (e) => {
  //   setEmail(e);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert(`Email: ${email}, Name: ${name}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
      <h6>
        Name: {name}, Email: {email}
      </h6>
    </form>
  );
};
export default ControlledInputs;
