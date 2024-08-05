export function registerFreelancerErrors(values, ErrorTypes) {
    const errors = {};

    if (ErrorTypes === "description") {
        validateLength("description", 6, "Description must be at least 50 words");
        return errors;
    }

    if (ErrorTypes === "guest") {
        return errors;
    }
    // Helper function to check string length and emptiness
    const validateLength = (field, minLength, errorMessage) => {
        if (!values[field] || values[field].length < minLength) {
            errors[field] = errorMessage;
        }
    };

    // Password validation
    if (
        (values.password &&
            values.confirmPassword &&
            values.password !== values.confirmPassword) ||
        values.confirmPassword == ""
    ) {
        errors.confirmPassword = "Passwords do not match";
    }

    // Validate fields
    validateLength("name", 3, "Name must be more than 3 letters!");
    validateLength("email", 6, "Email must be more than 6 letters!");
    validateLength("imgUrl", 15, "ImgUrl must be more than 15 letters!");
    validateLength("password", 6, "Password must be more than 6 letters!");

    if (ErrorTypes === "freelancer") {
        validateLength("title", 5, "Title must be more than 5 letters!");
        validateLength("skills", 10, "Skills must be more than 10 letters!");

        if (isNaN(values.hourRate) || values.hourRate <= 0) {
            errors.hourRate = "HourRate must be a number higher than 0!";
        }
    }

    if (!values.industry) {
        errors.industry = "You must select an industry!";
    }

    return errors;
}
