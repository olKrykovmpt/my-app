import { useForm } from "react-hook-form";
import React from "react";
import style from "./form.module.css";
import axios from "axios";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post(`https://638f3aa14ddca317d7f21cb0.mockapi.io/form`, data);
    alert("the application has been sent");
  };

  return (
    <div className={style.form}>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Fill out a callback request</h2>
        <div>
          <div className="input-group mb-3">
            <input
              {...register("lastName", {
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Lastname"
            />
          </div>
          {errors?.lastName?.type === "required" && <p>required to fill in</p>}
          {errors?.lastName?.type === "maxLength" && (
            <p>Lastname cannot contain more 50 characters </p>
          )}
          {errors?.lastName?.type === "pattern" && (
            <p>Field filled not correct</p>
          )}

          <div className="input-group mb-3">
            <input
              {...register("firstName", {
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Firstname"
            />
          </div>
          {errors?.firstName?.type === "required" && <p>required to fill in</p>}
          {errors?.firstName?.type === "maxLength" && (
            <p>firstName cannot contain more 50 characters </p>
          )}
          {errors?.firstName?.type === "pattern" && (
            <p>Field filled not correct</p>
          )}

          <div className="input-group mb-3">
            <input
              {...register("middleName", {
                maxLength: 50,
                pattern: /^[A-Za-z]+$/i,
              })}
              type="text"
              className="form-control"
              placeholder="Middlename"
            />
          </div>

          {errors?.middleName?.type === "maxLength" && (
            <p>middleName cannot contain more 50 characters </p>
          )}
          {errors?.middleName?.type === "pattern" && (
            <p>Field filled not correct</p>
          )}

          <div className="input-group mb-3">
            <input
              {...register("email", {
                required: true,
                maxLength: 50,
                pattern: /^[A-Za-z@._-]+$/i,
              })}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          {errors?.email?.type === "required" && <p>required to fill in</p>}
          {errors?.email?.type === "maxLength" && (
            <p>Lastname cannot contain more 50 characters </p>
          )}
          {errors?.email?.type === "pattern" && <p>Field filled not correct</p>}

          <div>
            <input className="btn btn-outline-primary" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
