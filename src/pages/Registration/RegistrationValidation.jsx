import * as Yup from "yup";

export const RegistrationValidation = Yup.object({
    username: Yup.string().min(4, "Username must be at least 4 characters.").max(20, "Username must be 20 characters at most.").required("Username is a required field."),
    email: Yup.string().email("Please enter a valid email.").required("Email is a required field."),
    firstName: Yup.string().min(4, "First Name must be at least 4 characters.").max(20, "First Name must be 20 characters at most.").required("First Name is a required field."),
    lastName: Yup.string().min(4, "Last Name must be at least 4 characters.").max(20, "Last Name must be 20 characters at most.").required("Last name is a required field."),
    password: Yup.string().min(5, "Password must be at least 4 characters.").max(20, "Passwords must be 20 characters at mos.t").required("Password is a required field."),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password does not match.").required("Confirm Password is a required field."),
    termsAndConditions: Yup.boolean().oneOf([true], "Please accept the terms of service")
})