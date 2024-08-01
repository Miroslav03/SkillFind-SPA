import { useState } from "react";
import { registerFreelancerErrors } from "../shared/utils/errors";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(values);
        const validationErrors = registerFreelancerErrors(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            await submitCallback(values);
        }
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler,
    };
}
