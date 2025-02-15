import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";

import "../styles.css";

// 1️⃣ Define schema validation form with zod
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  //   email: z.string().email("Invalid email address"),
  //   age: z
  //     .number()
  //     .min(18, "You must be at least 18 years old")
  //     .max(60, "You must be under 60 years old"),
});

// 2️⃣ Determine the data type based on the schema
type FormValues = z.infer<typeof formSchema>;

export default function ZodResolver() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  console.log(register, handleSubmit, errors);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="form_container">
      <h1>React Hook Form - Zod Resolver</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} placeholder="Kotaro" />
          {errors.firstName && <p>{errors.firstName.message}</p>}
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
