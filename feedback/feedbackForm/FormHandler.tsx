import React, { useState } from "react";
import { User, FormSubmission, FormData } from "../types";
import { DynamicForm } from "./DynamicForm";

const FormHandler = ({ formData }: FormData) => {
  const [formState, setFormState] = useState<{
    [key: string]: string | string[];
  }>({});

  const [rating, setRating] = useState<number | null>(2.5); // Initialize the rating value

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    question: string
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      const updatedValue = formState[question]
        ? [...(formState[question] as string[])]
        : [];

      if (checked && !updatedValue.includes(name)) {
        updatedValue.push(name); // Add the checkbox value if checked
      } else if (!checked && updatedValue.includes(name)) {
        const index = updatedValue.indexOf(name);
        updatedValue.splice(index, 1); // Remove the checkbox value if unchecked
      }

      setFormState({ ...formState, [question]: updatedValue });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate user authentication (replace with actual user data)
    const user: User = {
      id: "user123",
      username: "example_user",
    };

    const formSubmission: FormSubmission = {
      formData: formState,
      rating: rating,
      user: user,
    };

    console.log("Form Submission Data:", formSubmission);
  };

  return (
    <div>
      <DynamicForm
        formData={formData}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setRating={setRating}
        formState={formState}
        rating={rating}
      />
    </div>
  );
};

export default FormHandler;
