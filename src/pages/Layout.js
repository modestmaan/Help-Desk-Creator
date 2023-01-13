import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <details>
        <summary></summary>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/helpdesk">Help Desk</Link>
        </nav>
      </details>
      <Outlet />
    </>
  );
};

export default Layout;
