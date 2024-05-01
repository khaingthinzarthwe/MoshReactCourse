import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

const FormExercise = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="desc"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amt"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ctg" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-control" id="ctg">
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
