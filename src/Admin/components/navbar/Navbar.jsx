// import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { Link } from "react-router-dom";


const Navbar = () => {
  

  return (
    <div className="navbar flex items-center ">
      <div className="wrapper flex w-[100%] p-5 items-center justify-between ">
        <div className="search flex items-center border border-border-color p-1  ">
          <input type="text " className=" border-none outline-none text-lg " placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items flex items-center ">
         
         
          
          <div className="item flex items-center mr-7 relative">
            <Link to='/admin/notification' >
          
            <NotificationsNoneOutlinedIcon className="icon text-6xl font-bold w-12 h-12 " />
           
            
            </Link>
            
            <div className="counter bg-primarycolor  text-whitecolor flex items-center justify-center text-xl font-poppins font-bold absolute  -top-2 -right-2 ">1</div>
          </div>
          <div className="item flex items-center mr-7 relative">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
         
          <div className="item flex items-center mr-7 relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar rounded-full w-14 h-14 "
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
