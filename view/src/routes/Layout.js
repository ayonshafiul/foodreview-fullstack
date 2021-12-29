import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="w-full px-4 py-2 mb-4 flex justify-center bg-gray-900 text-white md:mx-auto ">
        <Link className="link-item" to="/">Home</Link>

        <Link className="link-item" to="/Login">Login</Link>

        <Link className="link-item" to="/Register">Register</Link>
      </nav>
      <div className="container">
      <Outlet />
      </div>
    </>
  );
};

export default Layout;
