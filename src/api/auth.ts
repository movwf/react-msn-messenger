import Api from "./api";

const routeURL = "auth/";

export interface AuthApiLoginRequest {
  email: String;
  password: String;
}

export interface AuthApiLoginResponse {
  result: string;
  user?: {
    name: string;
    avatar: string;
  };
  message?: string;
  error?: Object;
}

const login = async ({
  email,
  password,
}: AuthApiLoginRequest): Promise<AuthApiLoginResponse> => {
  const { data } = await Api.post(routeURL + "login", { email, password });

  return data;
};

export interface AuthApiLogoutRequest {}

export interface AuthApiLogoutResponse {
  result: string;
  message?: string;
}

const logout = async (): Promise<AuthApiLogoutResponse> => {
  const { data } = await Api.get(routeURL + "logout");

  return data;
};

export interface AuthApiRegisterRequest {
  email: String;
  password: String;
  avatar?: String;
  name: String;
}

export interface AuthApiRegisterResponse {
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
}: AuthApiRegisterRequest): Promise<AuthApiRegisterResponse> => {
  const { data } = await Api.post(routeURL + "register", {
    email,
    password,
    name,
    avatar,
  });

  return data;
};

export interface AuthApiCheckRequest {}

export interface AuthApiCheckResponse {
  result: string;
  message?: string;
  session?: {
    cookie: {
      expires: string;
      httpOnly: boolean;
      originalMaxAge: number;
      path: string;
    };
    user: {
      browser: string;
      user: string;
    };
  };
}

const checkSession = async (): Promise<AuthApiCheckResponse> => {
  const { data } = await Api.get(routeURL + "check");

  return data;
};

export interface AuthApiCheckBrowserRequest {}

export interface AuthApiCheckBrowserResponse {
  result: string;
  message?: string;
}

const checkBrowser = async (): Promise<AuthApiCheckBrowserResponse> => {
  const { data } = await Api.get(routeURL + "browser");

  return data;
};

const AuthApi = {
  login,
  logout,
  register,
  checkSession,
  checkBrowser,
};

export default AuthApi;
