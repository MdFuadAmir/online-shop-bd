import { NavLink } from "react-router-dom";

const Footer = () => {
    const links = <>
    <li><NavLink to='/home'>Home</NavLink></li>
    <li><NavLink to='/products'>Products</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
    </> 
  return (
    <footer className="footer footer-center bg-base-300 text-base-content  lg:flex justify-center">
      <p>Copyright © 2024 - All right reserved by KST Industries Ltd</p>
        <div className="navbar-end md:flex-cols-1 lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
    </footer>
  );
};
export default Footer;
