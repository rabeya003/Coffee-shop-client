import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="space-x-10 max-w-7xl mx-auto pt-10">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive
            ? "font-bold text-red-500 underline"
            : isPending
            ? "pending"
            : "text-[#002D74] font-bold"
        }
      >
        {" "}
        Home{" "}
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive, isPending }) =>
          isActive
            ? "font-bold text-red-500 underline"
            : isPending
            ? "pending"
            : "text-[#002D74] font-bold"
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive, isPending }) =>
          isActive
            ? "font-bold text-red-500 underline"
            : isPending
            ? "pending"
            : "text-[#002D74] font-bold"
        }
      >
        Signup
      </NavLink>
    </div>
  );
};

export default Header;
