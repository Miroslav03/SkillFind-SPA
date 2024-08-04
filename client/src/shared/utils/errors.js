export function registerFreelancerErrors(values) {
    let errors = {};
    if (
        values.password &&
        values.confirmPassword &&
        values.password !== values.confirmPassword
    ) {
        errors.confirmPassword = "Passwords do not match";
    }
    if (values.name && values.name.length < 3) {
        errors.name = "Name must be more than 3 letters!";
    }

    if (values.title && values.title.length < 5) {
        errors.title = "Title must be more than 5 letters!";
    }

    if (values.skills && values.skills.length < 10) {
        errors.skills = "Skills must be more than 10 letters!";
    }

    if (values.hourRate && values.hourRate === 0) {
        errors.hourRate = "HourRate must be a number higher than 0!";
    }

    if (values.email && values.email === 0) {
        errors.email = "Email must be more than 6 letters!";
    }

    if (values.imgUrl && values.imgUrl === 0) {
        errors.imgUrl = "ImgUrl must be more than 15 letters!";
    }

    if (values.password && values.password.length < 6) {
        errors.password = "Email must be more than 6 letters!";
    }

    return errors;
}
