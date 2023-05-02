import { Outlet, Link } from "react-router-dom";
import { useUser } from "../contexts/AuthProvider";

const Layout = () => {
  const { userAuth } = useUser();
  return (
    <>
      <nav className="w-full px-4 py-2 mb-4 flex justify-center bg-gray-900 text-white">
        <Link className="link-item" to="/">
          Home
        </Link>
        <Link className="link-item" to="/search">
          Search
        </Link>

        {!userAuth && (
          <>
            <Link className="link-item" to="/login">
              Login
            </Link>

            <Link className="link-item" to="/register">
              Register
            </Link>
          </>
        )}
      </nav>
      <div className="w-full mx-auto md:max-w-2xl rounded-lg">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
