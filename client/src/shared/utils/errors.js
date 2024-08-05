export function registerFreelancerErrors(values) {
    let errors = {};
    if (
        (values.password &&
            values.confirmPassword &&
            values.password !== values.confirmPassword) ||
        values.confirmPassword == ""
    ) {
        errors.confirmPassword = "Passwords do not match";
    }
    if ((values.name && values.name.length <= 3) || values.name === "") {
        errors.name = "Name must be more than 3 letters!";
    }

    if ((values.title && values.title.length <= 5) || values.title === "") {
        errors.title = "Title must be more than 5 letters!";
    }

    if ((values.skills && values.skills.length <= 10) || values.skills === "") {
        errors.skills = "Skills must be more than 10 letters!";
    }

    if ((values.hourRate && values.hourRate <= 0) || values.hourRate === "") {
        errors.hourRate = "HourRate must be a number higher than 0!";
    }

    if ((values.email && values.email <= 6) || values.email === "") {
        errors.email = "Email must be more than 6 letters!";
    }

    if ((values.imgUrl && values.imgUrl <= 15) || values.imgUrl === "") {
        errors.imgUrl = "ImgUrl must be more than 15 letters!";
    }

    if (
        (values.password && values.password.length <= 6) ||
        values.password === ""
    ) {
        errors.password = "Email must be more than 6 letters!";
    }

    if (values.industry === "") {
        errors.industry = "You must select an industry!";
    }
    return errors;
}
