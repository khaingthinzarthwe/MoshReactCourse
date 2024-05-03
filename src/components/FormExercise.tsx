import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface formData {
  description: string;
  amount: number;
  category: string;
}

const FormExercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>();

  const [items, setItems] = useState<Array<formData>>([]);
  const [filters, setFilter] = useState<Array<formData>>([]);

  const onSubmit = (data: formData) => {
    setItems([...items, data]);
    setFilter([...filters, data])
  };

  const [visible, setVisible] = useState(true);

  const onDelete = () => {
    setVisible(false);
  }

  return (
    <>
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
          {errors.description?.type === "required" && (
            <p className="text-danger">Description is required.</p>
          )}
          {errors.description?.type === "minLength" && (
            <p className="text-danger">
              Description should be at least 3 characters.
            </p>
          )}
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
          {errors.amount?.type === "required" && (
            <p className="text-danger">Amount is required.</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="ctg" className="form-label">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            className="form-control"
            id="ctg"
          >
            <option></option>
            <option>Foods</option>
            <option>Drinks</option>
            <option>Fruits</option>
          </select>
          {errors.category?.type === "required" && (
            <p className="text-danger">Category is required.</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <br></br>

      <select onChange={e => setFilter(e.target.value == "All Categories" ? items : items.filter(item => item.category == e.target.value))} className="form-control" id="ctg">
      <option value="All Categories">All Categories</option>
        <option value="Foods">Foods</option>
        <option value="Drinks">Drinks</option>
        <option value="Fruits">Fruits</option>
      </select>
      <br></br>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {visible && <tbody>
            {filters.map((item) => (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
                <td><button onClick={onDelete} type="button" className="btn btn-outline-danger">Delete</button></td>
              </tr>
            ))}
        </tbody>}
      </table>
    </>
  );
};

export default FormExercise;
