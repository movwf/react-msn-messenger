import React from "react";

import MainWindow from "../components/MainWindow";

const Layout: React.FC = ({ children }) => {
  return <MainWindow>{children}</MainWindow>;
};

export default Layout;
