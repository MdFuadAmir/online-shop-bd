import { NavLink } from "react-router-dom";



const Header = () => {
    const links = <>
    <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-500" : ""
  } to='/home'>Home</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-500" : ""
  } to='/products'>Products</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-500" : ""
  } to='/about'>About</NavLink></li>
    <li><NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-500" : ""
  } to='/dashbord'>Dashbord</NavLink></li>
    </> 
    return (
       <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content shadow bg-base-100 rounded-box mt-3 z-[1] p-2  w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Online-Shop</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links} 
    </ul>
  </div>
</div>

       </div>
    );
};

export default Header;
