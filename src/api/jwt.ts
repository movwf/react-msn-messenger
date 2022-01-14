import Api from "./api";

const routeURL = "jwt/";

export interface JWTApiCredentialsRequest {
  email: String;
  password: String;
}

export interface JWTApiCredentialsResponse {
  result: string;
  user?: {
    name: string;
    avatar: string;
    token: string;
  };
  message?: string;
  error?: Object;
}

const login = async ({
  email,
  password,
}: JWTApiCredentialsRequest): Promise<JWTApiCredentialsResponse> => {
  const { data } = await Api.post(routeURL + "login", { email, password });

  return data;
};

export interface JWTApiLogoutRequest {}

export interface JWTApiLogoutResponse {
  result: string;
  message?: string;
}

const logout = async (): Promise<JWTApiLogoutResponse> => {
  //@ts-ignore
  delete Api.defaults.headers.Authorization;

  const { data } = await Api.get(routeURL + "logout");

  return data;
};

export interface JWTApiRegisterRequest {
  email: String;
  password: String;
  avatar?: String;
  name: String;
}

export interface JWTApiRegisterResponse {
  result: string;
  user?: Object;
  message?: string;
  error?: Object;
}

const register = async ({
  name,
  email,
  password,
  avatar,
}: JWTApiRegisterRequest): Promise<JWTApiRegisterResponse> => {
  const { data } = await Api.post(routeURL + "register", {
    email,
    password,
    name,
    avatar,
  });

  return data;
};

export interface JWTApiCheckRequest {}

export interface JWTApiCheckResponse {
  result: string;
  data: {
    browser: string;
    user: string;
  };
  exp: number;
  iat: number;
}

const checkJWT = async (): Promise<JWTApiCheckResponse> => {
  const { data } = await Api.get(routeURL + "check");

  return data;
};

export interface JWTApiCheckBrowserRequest {}

export interface JWTApiCheckBrowserResponse {
  result: string;
  message?: string;
}

const checkBrowser = async (): Promise<JWTApiCheckBrowserResponse> => {
  const { data } = await Api.get(routeURL + "browser");

  return data;
};

const JWTApi = {
  login,
  logout,
  register,
  checkJWT,
  checkBrowser,
};

export default JWTApi;
