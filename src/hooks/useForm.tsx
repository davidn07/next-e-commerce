import { useState } from "react";

// Custom hook for handling form state, validation, and submission
export const useForm = <T extends object>(
  initialValues: T,
  onSubmit: (values: T) => void
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes with proper typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate and call onSubmit if no errors
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
      console.log(JSON.stringify(values, null, 2));
      setIsSubmitting(false); // Logging the form values in JSON format
    } else {
      setErrors(validationErrors);
      setIsSubmitting(false);
    }
  };

  // Form validation logic (this can be extended to be more dynamic based on the fields)
  const validate = (values: T) => {
    const validationErrors: Partial<T> = {};
    console.log(values);
    // if ("email" in values && !values.email) validationErrors.email = "Email is required";
    // if ("password" in values && !values.password) validationErrors.password = "Password is required";
    return validationErrors;
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
