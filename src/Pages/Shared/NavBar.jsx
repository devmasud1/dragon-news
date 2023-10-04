import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/user.png";

const NavBar = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 space-y-5 flex items-center justify-between my-4">
      {/* <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
      </div> */}
      <div className="navbar-center ">
        <ul className="menu menu-horizontal">{navItem}</ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-8 rounded-full">
            <img src={avatar} />
          </div>
        </label>
        <div>
          <Link className="px-6 py-1 bg-[#706F6F] text-white rounded">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
