import React from "react";
import { updateHeaderConfig } from "../../api/api";
import AuthApi from "../../api/auth";
import JWTApi from "../../api/jwt";
import { useUserClearDispatch } from "../../contexts/AuthContext";

function Test() {
  const [data, setData] = React.useState<object>({ test: "test" });
  const clear = useUserClearDispatch();

  const handleTest = async () => {
    const res = await AuthApi.login({
      email: "test12@test.com",
      password: "12345",
    });

    setData(res);

    // if (res.user) updateHeaderConfig(res.user.token);
  };

  const handleLogout = async () => {
    const res = await AuthApi.logout();

    if (res.result === "OK") clear();
    setData(res);
  };

  const handleSession = async () => {
    const res = await AuthApi.checkSession();

    setData(res);
  };

  return (
    <div style={{ width: "200px", textOverflow: "ellipsis" }}>
      <span style={{ color: "red" }}>{JSON.stringify(data)}</span>
      <br />
      <button type="button" style={{ color: "red" }} onClick={handleTest}>
        Login
      </button>
      <br />
      <button type="button" style={{ color: "red" }} onClick={handleLogout}>
        Logout
      </button>
      <br />
      <button type="button" style={{ color: "red" }} onClick={handleSession}>
        Check Session
      </button>
    </div>
  );
}

export default Test;
