import React from "react";
import { Link } from "react-router-dom";
import AuthApi from "../../api/auth";
import JWTApi from "../../api/jwt";

import { useUserClearDispatch, useUserInfo } from "../../contexts/AuthContext";

import UserAvatar from "../UserAvatar";
import styles from "./InfoBar.module.css";

function InfoBar() {
  const { name, avatar, token, email } = useUserInfo();
  const clear = useUserClearDispatch();

  const handleLogout = async () => {
    if (token !== "") {
      const data = await AuthApi.logout();

      console.log(data.message);
    } else {
      const data = await JWTApi.logout();

      console.log(data.message);
    }

    clear();
  };

  return (
    <div className={styles.UserInfo}>
      <div className={styles.Avatar}>
        <UserAvatar defaultAvatar={avatar} />
      </div>
      <div className={styles.UserInformation}>
        <span className={styles.Username}>{name}</span>
        <span className={styles.Description}>{email}</span>
        <span className={styles.SessionData} title={token}>
          {token ? token : "{%token%}"}
        </span>
        <span className={styles.Logout} onClick={handleLogout}>
          Logout
        </span>
      </div>
    </div>
  );
}

export default InfoBar;
