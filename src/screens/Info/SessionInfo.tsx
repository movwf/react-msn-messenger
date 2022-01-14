import React from "react";

import AuthApi, {
  AuthApiCheckBrowserResponse,
  AuthApiCheckResponse,
} from "../../api/auth";
import JWTApi, {
  JWTApiCheckBrowserResponse,
  JWTApiCheckResponse,
} from "../../api/jwt";

import styles from "./Info.module.css";

function SessionInfo() {
  const [sessionData, setSessionData] = React.useState<AuthApiCheckResponse>();
  const [browserCheck, setBrowserCheck] =
    React.useState<AuthApiCheckBrowserResponse>();

  const [jwtData, setJWTData] = React.useState<JWTApiCheckResponse>();
  const [browserCheckJWT, setBrowserCheckJWT] =
    React.useState<JWTApiCheckBrowserResponse>();

  const getSessionInfo = async () => {
    const data = await AuthApi.checkSession();

    setSessionData(data);
  };

  const getBrowserCheck = async () => {
    const data = await AuthApi.checkBrowser();

    setBrowserCheck(data);
  };

  const getJWTSessionInfo = async () => {
    const data = await JWTApi.checkJWT();

    setJWTData(data);
  };

  const getBrowserCheckJWT = async () => {
    const data = await JWTApi.checkBrowser();

    setBrowserCheckJWT(data);
  };

  return (
    <>
      <span className={styles.Title}>
        Session Data ( Session ) - <span onClick={getSessionInfo}>Get</span>
      </span>
      {sessionData && sessionData.session && (
        <>
          {Object.entries({
            ...sessionData.session?.cookie,
            ...sessionData.session.user,
          }).map((item) => (
            <>
              <span className={styles.Key}>{item[0]}</span>
              <span className={styles.Value}>{item[1].toString()}</span>
            </>
          ))}
        </>
      )}
      <br />
      <span className={styles.Title}>
        Browser Check ( Session ) - <span onClick={getBrowserCheck}>Check</span>
      </span>
      {browserCheck && (
        <>
          {Object.entries(browserCheck).map((item) => (
            <>
              <span className={styles.Key}>{item[0]}</span>
              <span className={styles.Value}>{item[1].toString()}</span>
            </>
          ))}
        </>
      )}
      <br />
      <span className={styles.Title}>
        Session Data (JWT) - <span onClick={getJWTSessionInfo}>Get</span>
      </span>
      {jwtData && (
        <>
          {Object.entries({
            ...jwtData,
            ...jwtData.data,
          }).map((item) => (
            <>
              <span className={styles.Key}>{item[0]}</span>
              <span className={styles.Value}>{item[1].toString()}</span>
            </>
          ))}
        </>
      )}
      <br />
      <span className={styles.Title}>
        Browser Check ( JWT ) - <span onClick={getBrowserCheckJWT}>Check</span>
      </span>
      {browserCheckJWT && (
        <>
          {Object.entries(browserCheckJWT).map((item) => (
            <>
              <span className={styles.Key}>{item[0]}</span>
              <span className={styles.Value}>{item[1].toString()}</span>
            </>
          ))}
        </>
      )}
    </>
  );
}

export default SessionInfo;
