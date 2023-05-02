import { Outlet, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AuthProvider";

const AdminLayout = () => {
  const { adminAuth } = useAdmin();
  return (
    <>
      <nav className="w-full px-4 py-2 mb-4 flex justify-center bg-gray-900 text-white">
        {/* <Link className="link-item" to="restaurants">
          Restaurants
        </Link> */}
        <Link className="link-item" to="restaurants/add">
          Add a restaurant
        </Link>
        {/* <Link className="link-item" to="foods">
          Food Items
        </Link> */}
        <Link className="link-item" to="foods/add">
          Add Food
        </Link>

        {!adminAuth && (
          <>
            <Link className="link-item" to="login">
              Login
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

export default AdminLayout;
