import Info from "../screens/Info";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Test from "../screens/Test";

const routes = [
  { name: "Login", path: "/", Component: Login, safe: false },
  { name: "App", path: "/app", Component: Info, safe: true },
  {
    name: "Register",
    path: "/register",
    Component: Register,
    safe: false,
  },
  { name: "Test", path: "/test", Component: Test, safe: false },
];

export default routes;
