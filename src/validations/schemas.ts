import * as Yup from "yup";
import { emailRegexp, passwordRegexp } from "./config";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, "Must be an e-mail")
    .required("Email is required!"),
  password: Yup.string()
    .min(5, "Minimum: 5")
    .max(12, "Maximum: 12")
    .required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required!"),
  email: Yup.string()
    .matches(emailRegexp, "Must be an e-mail")
    .required("Email is required!"),
  password: Yup.string()
    .min(5, "Minimum: 5 Character")
    .max(12, "Maximum: 12 Character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Type password again"),
  agreement: Yup.boolean().isTrue().required("Should agree the terms!"),
});
