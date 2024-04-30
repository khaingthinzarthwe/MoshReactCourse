import React, { FormEvent } from "react";

const FormExercise = () => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("Submitted");
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input id="desc" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input id="amt" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="ctg" className="form-label">
          Category
        </label>
        <select className="form-control" id="ctg">
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormExercise;
