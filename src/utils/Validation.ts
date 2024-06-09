import { useCallback, useState } from 'react';

interface ValidationErrors {
  [key: string]: string;
}

interface ValidationValues {
  [key: string]: string;
}

function useValidation() {
  const [values, setValues] = useState<ValidationValues>({});
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    const form = e.target.closest('form');
    const isValid = form ? form.checkValidity() : false;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    setIsValid(isValid);
  }

  const resetValidation = useCallback(
    (
      newValues: ValidationValues = {},
      newErrors: ValidationErrors = {},
      newIsValid: boolean = false
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    []
  );

  return {
    errors,
    values,
    isValid,
    handleChange,
    resetValidation,
  };
}

export default useValidation;
