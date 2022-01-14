import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import AuthApi from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../validations/schemas";

import Input from "../../components/Input";
import Links from "../../components/Links";
import Button from "../../components/Button";
import Papillon from "../../components/Papillon";
import Checkbox from "../../components/Checkbox";
import WindowBody from "../../components/WindowBody";
import UserAvatar from "../../components/UserAvatar";
import ButtonContainer from "../../components/Button/ButtonContainer";
import CheckboxContainer from "../../components/Checkbox/CheckboxContainer";

import styles from "./Register.module.css";

interface RegisterFormData {
  avatar: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreement: boolean;
}

type InputNames = "name" | "email" | "password" | "confirmPassword";
type CheckboxNames = "agreement";

function Register() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const resolver = yupResolver(registerSchema);
  const {
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
  } = useForm<RegisterFormData>({
    mode: "all",
    defaultValues: {
      avatar: "0",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    resolver,
  });

  const registerUser = async (formData: RegisterFormData) => {
    setIsLoading(true);

    const res = await AuthApi.register(formData);

    if (res.result === "OK") navigate("/");
    setIsLoading(false);
  };

  const changeAvatar = (id: string) => {
    setValue("avatar", id);
  };

  const handleInputChange = (fieldName: InputNames) => (text: string) => {
    setValue(fieldName, text);
  };

  const handleCheckboxChange =
    (checkboxName: CheckboxNames) => (checked: boolean) => {
      setValue(checkboxName, checked);
    };

  const handleSubmitForm = () => {
    handleSubmit(registerUser)();
  };

  return (
    <>
      <WindowBody>
        <div className={styles.Register}>
          <UserAvatar selectable setAvatar={changeAvatar} />
          <Input
            id="name"
            label="Name:"
            mode="default"
            type="text"
            error={errors.name?.message}
            onChange={handleInputChange("name")}
          />
          <Input
            id="email"
            label="E-mail address:"
            mode="default"
            type="email"
            error={errors.email?.message}
            onChange={handleInputChange("email")}
          />
          <Input
            id="password"
            label="Password:"
            mode="default"
            type="password"
            error={errors.password?.message}
            onChange={handleInputChange("password")}
          />
          <Input
            id="confirmPassword"
            label="Confirm Password:"
            mode="default"
            type="password"
            error={errors.confirmPassword?.message}
            onChange={handleInputChange("confirmPassword")}
          />
          <CheckboxContainer>
            <Checkbox
              id="agreement"
              label="I accept Ters of Use"
              onChange={handleCheckboxChange("agreement")}
              error={!!errors.agreement}
            />
          </CheckboxContainer>
          <ButtonContainer>
            <Button id="register" label="Register" onClick={handleSubmitForm} />
          </ButtonContainer>
          {isLoading ? <Papillon text="Registering..." /> : null}
        </div>
      </WindowBody>
      <Links />
    </>
  );
}

export default Register;
