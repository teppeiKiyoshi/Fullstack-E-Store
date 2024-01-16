import * as Yup from "yup";

export const LoginValidation = Yup.object({
    username: Yup.string().required("Username is required and cannot be blank."),
    password: Yup.string().required("Password is required and cannot be blank."),
})