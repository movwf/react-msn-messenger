import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import JWTApi from "../../api/jwt";
import AuthApi from "../../api/auth";
import { updateHeaderConfig } from "../../api/api";

import { useUserDispatch } from "../../contexts/AuthContext";

import { loginSchema } from "../../validations/schemas";
import useSessionStorage from "../../hooks/useSessionStorage";

import Input from "../../components/Input";
import Links from "../../components/Links";
import Radio from "../../components/Radio";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Papillon from "../../components/Papillon";
import WindowBody from "../../components/WindowBody";
import UserAvatar from "../../components/UserAvatar";
import RadioContainer from "../../components/Radio/RadioContainer";
import ButtonContainer from "../../components/Button/ButtonContainer";
import CheckboxContainer from "../../components/Checkbox/CheckboxContainer";

import styles from "./Login.module.css";

interface LoginFormData {
  email: string;
  password: string;
}

type InputNames = "email" | "password";
type Methods = "session" | "jwt";

function Login() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [method, setMethod] = React.useState<Methods>("session");
  const [loginHistory, setLoginHistory] = useSessionStorage("user", {
    email: "",
    password: "",
  });

  const updateUser = useUserDispatch();
  const navigate = useNavigate();

  const resolver = yupResolver(loginSchema);
  const {
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
  } = useForm<LoginFormData>({
    mode: "all",
    defaultValues: {
      email: loginHistory.email,
      password: loginHistory.password,
    },
    resolver,
  });

  const loginUser = async (formData: LoginFormData) => {
    setIsLoading(true);

    if (method === "session") {
      const res = await AuthApi.login(formData);

      if (res.result === "OK" && res.user) {
        updateUser({
          email: formData.email,
          name: res.user.name,
          avatar: res.user.avatar,
        });
        navigate("/app");
      }
    }

    if (method === "jwt") {
      const res = await JWTApi.login(formData);

      if (res.result === "OK" && res.user) {
        updateHeaderConfig(res.user.token);
        updateUser({
          email: formData.email,
          name: res.user.name,
          avatar: res.user.avatar,
          token: res.user.token,
        });
        navigate("/app");
      }
    }

    setIsLoading(false);
  };

  const handleInputChange = (fieldName: InputNames) => (text: string) => {
    setValue(fieldName, text);
  };

  const handleCheckboxChange = (checkboxName: string) => () => {
    // UNSAFE: Don't use it unless you use 123456 as your password
    // You don't even need a protection
    const { email, password } = getValues();

    if (checkboxName == "rememberEmail")
      setLoginHistory({ ...loginHistory, email });
    if (checkboxName == "rememberPassword")
      setLoginHistory({ ...loginHistory, password });
  };

  const handleRadioChange = (radioName: Methods) => (checked: boolean) => {
    setMethod(radioName);
  };

  const handleSubmitForm = () => {
    handleSubmit(loginUser)();
  };

  return (
    <>
      <WindowBody>
        <div className={styles.Login}>
          <UserAvatar />
          <Input
            id="email"
            label="E-mail address:"
            mode="dropdown"
            type="email"
            value={loginHistory.email}
            error={errors.email?.message}
            onChange={handleInputChange("email")}
          />
          <Input
            id="password"
            label="Password:"
            mode="default"
            type="password"
            value={loginHistory.password}
            error={errors.password?.message}
            onChange={handleInputChange("password")}
          />
          <CheckboxContainer>
            <Checkbox
              id="save_email"
              label="Remember Me"
              onChange={handleCheckboxChange("rememberEmail")}
            />
            <Checkbox
              id="save_pass"
              label="Remember my Password"
              onChange={handleCheckboxChange("rememberPassword")}
            />
          </CheckboxContainer>
          <RadioContainer>
            <Radio
              id="session"
              label="Session"
              name="auth"
              selected
              onChange={handleRadioChange("session")}
            />
            <Radio
              id="jwt"
              label="JWT"
              name="auth"
              onChange={handleRadioChange("jwt")}
            />
          </RadioContainer>
          <ButtonContainer>
            <Button id="login" label="Sign In" onClick={handleSubmitForm} />
          </ButtonContainer>
          {isLoading ? <Papillon text="Signing In" /> : null}
        </div>
      </WindowBody>
      <Links />
    </>
  );
}

export default Login;
