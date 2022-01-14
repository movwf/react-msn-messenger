import React from "react";
import styles from "./MainWindow.module.css";

import TopBar from "../TopBar";
import Footer from "../Footer";

const MainWindow: React.FC = ({ children }) => {
  return (
    <div className={styles.MainWindow}>
      <TopBar />
      {children}
      <Footer />
    </div>
  );
};

export default MainWindow;
