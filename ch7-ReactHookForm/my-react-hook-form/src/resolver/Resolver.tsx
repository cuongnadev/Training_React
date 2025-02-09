import React from "react";
import { useForm, Resolver } from "react-hook-form";

import "../styles.css";

type FormValues = {
  firstName: string;
  lastName: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: !values.firstName ? {} : values,
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function CustomResolverForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: resolver,
  });
  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

  return (
    <div className="form_container">
      <h1>React Hook Form - Resolver</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} placeholder="Kotaro" />
          {errors?.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <label>Last Name</label>
          <input {...register("lastName")} placeholder="Sugawara" />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
