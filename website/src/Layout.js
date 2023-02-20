import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Layout() {
  return (
    <div className="App">
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
