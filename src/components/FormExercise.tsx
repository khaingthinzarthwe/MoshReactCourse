import React, { FormEvent, useRef } from "react";

const FormExercise = () => {
    const descriptionRef = useRef<HTMLInputElement>(null);
    const amountRef = useRef<HTMLInputElement>(null);
    const categoryRef =  useRef<HTMLSelectElement>(null);
    const item = { description: '', amount: 0, category: '' }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (descriptionRef.current !== null)
            item.description = descriptionRef.current.value;
        if (amountRef.current !== null)
            item.amount =  parseInt(amountRef.current.value);
        if (categoryRef.current !== null)
            item.category = categoryRef.current.value;
        console.log(item);
    }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input ref={descriptionRef} id="desc" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input ref={amountRef} id="amt" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="ctg" className="form-label">
          Category
        </label>
        <select ref={categoryRef} className="form-control" id="ctg">
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
