// import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured  shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 flex flex-col ">
      <div className="top flex items-center justify-between 
       text-secondary-dark-color">
        <h1 className="title text-2xl font-poppins font-medium ">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom p-12 flex flex-col items-center justify-center gap-5 ">
        <div className="featuredChart w-40 h-40 ">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title font-poppins font-medium text-primarycolor text-2xl ">Total sales made today</p>
        <p className="amount text-5xl p-20 ">$420</p>
        <p className="desc font-poppins font-thin text-2xl text-[#808080] text-center max-w-[25rem] ">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary w-full flex items-center justify-around mt-10 ">
          <div className="item text-center ">
            <div className="itemTitle text-xl text-secondary-dark-color ">Last Week</div>
            <div className="itemResult negative flex items-center mt-7 text-2xl ">
              
              <div className="resultAmount text-center ml-2">$12.4k</div>
            </div>
          </div>
          <div className="item text-center ">
            <div className="itemTitle text-xl text-secondary-dark-color ">Last Month</div>
            <div className="itemResult negative flex items-center mt-7 text-2xl ">
             
              <div className="resultAmount text-center ml-2 ">$12.4k</div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Featured;
