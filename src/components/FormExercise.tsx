import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface formData {
  description: string;
  amount: number;
  category: string;
}

const FormExercise = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<formData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          {...register("description", { required: true, minLength: 3 })}
          id="desc"
          type="text"
          className="form-control"
        />
        { errors.description?.type === 'required' && <p className="text-danger">Description is required.</p> }
        { errors.description?.type === 'minLength' && <p className="text-danger">Description should be at least 3 characters.</p> }
      </div>
      <div className="mb-3">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, minLength: 1 })}
          id="amt"
          type="number"
          className="form-control"
        />
        { errors.amount?.type === 'required' && <p className="text-danger">Amount is required.</p> }
        { errors.amount?.type === 'minLength' && <p className="text-danger">Amount should be at least 1.</p> }
      </div>
      <div className="mb-3">
        <label htmlFor="ctg" className="form-label">
          Category
        </label>
        <select {...register("category", { required: true })} className="form-control" id="ctg">
          <option></option>
          <option>Groceries</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
        { errors.category?.type === 'required' && <p className="text-danger">Category is required.</p> }
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormExercise;
