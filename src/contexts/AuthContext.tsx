import React from "react";

enum ACTIONS {
  SET_USER,
  CLEAR,
}

interface UserData {
  email?: string;
  token?: string;
  name?: string;
  avatar?: string;
}

type Action =
  | { type: ACTIONS.SET_USER; payload: UserData }
  | { type: ACTIONS.CLEAR };

interface AuthState {
  email?: string;
  token?: string;
  name?: string;
  avatar?: string;
}

const initialValues: AuthState = {
  email: "",
  token: "",
  name: "",
  avatar: "0",
};

type AuthDispatch = (action: Action) => void;

const AuthStateContext = React.createContext<AuthState | undefined>(undefined);
const AuthDispatchContext = React.createContext<AuthDispatch | undefined>(
  undefined
);

const AuthReducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.CLEAR:
      return {
        ...initialValues,
      };
    default:
      return state;
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialValues);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const useUserInfo = (): AuthState => {
  const context = React.useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error("useUserInfo must be used within a AuthProvider");
  }

  return context;
};

export const useUserDispatch = (): ((payload: AuthState) => void) => {
  const dispatch = React.useContext(AuthDispatchContext);

  if (dispatch === undefined) {
    throw new Error("useUserDispatch must be used within a AuthProvider");
  }

  return (payload: AuthState) => dispatch({ type: ACTIONS.SET_USER, payload });
};

export const useUserClearDispatch = (): (() => void) => {
  const dispatch = React.useContext(AuthDispatchContext);

  if (dispatch === undefined) {
    throw new Error("useUserClearDispatch must be used within a AuthProvider");
  }

  return () => dispatch({ type: ACTIONS.CLEAR });
};
