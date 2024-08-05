import { useState } from "react";
import { registerFreelancerErrors } from "../shared/utils/errors";

export function useForm(initialValues, submitCallback, userType) {
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

        const validationErrors = registerFreelancerErrors(values, userType);
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
