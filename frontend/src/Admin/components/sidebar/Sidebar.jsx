// import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";



const Sidebar = () => {
 
  return (
    <div className="sidebar flex flex-col shadow-[0_3px_10px_rgb(0,0,0,0.2)] min-h-[100vh] mr-5 px-7 ">
      <div className="top flex items-center justify-center ">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo text-2xl font-poppins font-semibold  ">Resin Gift Shop Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center pl-5 ">
        <ul className=" list-none m-0 p-0" >
          <p className="title text-3xl font-poppins font-semibold text-secondary-dark-color mt-8   ">MAIN</p>
          <li className=" flex items-center p-4 cursor-pointer hover:bg-whitecolor duration-300 text-2xl  " >
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title title text-3xl font-poppins font-semibold text-secondary-dark-color mt-5 ">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/products" style={{ textDecoration: "none" }}>
            <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/admin/orders" >
          <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          
          
          <p  className="title title text-3xl font-poppins font-semibold text-secondary-dark-color mt-5 ">MANAGE</p>
          <Link to='/admin/all-product' >
          <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
            
            <span>Add Products</span>
          </li>
          </Link>
          
          <Link to='/admin/hero-section-manager' >
          <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
          
          <span>Manage Herosection</span>
        </li>
          </Link>
          
          
          
         
          
          <p className="title title text-3xl font-poppins font-semibold text-secondary-dark-color mt-5 ">USER</p>
          <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl ">
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li className="hover:bg-whitecolor flex items-center p-4 cursor-pointer text-2xl">
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;
