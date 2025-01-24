const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" className="form-input" id="name" />
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input type="email" className="form-input" id="email" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
