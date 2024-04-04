import { NavLink, Outlet } from "react-router-dom";




const DashbordLayout = () => {
    return (
        <div className="flex gap-5 p-2 mb-12">
            <div className="w-1/4">
                <ul className="space-y-2 bg-slate-200 p-2 rounded-lg shadow-lg">
                    <li><NavLink to='/dashbord'>Dashbord</NavLink></li>
                    <li><NavLink to='/dashbord/profile'>Profile</NavLink></li>
                    <li><NavLink to='/dashbord/editProfile'>Edit Profile</NavLink></li>
                </ul>
            </div>
            <div className="w-3/4">
                <Outlet></Outlet>
            </div>
    
        </div>
    );
};

export default DashbordLayout;