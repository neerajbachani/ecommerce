import React from 'react';
// import rectangle1 from '../../../assets/rectangle-1@2x.png';
import footer_logo from '../../../assets/ResinWebLogo.png'
import rectangle43 from '../../../assets/rectangle-43@2x.png';
import rectangle44 from '../../../assets/rectangle-44@2x.png';
import rectangle45 from '../../../assets/rectangle-45@2x.png';
import rectangle46 from '../../../assets/rectangle-46@2x.png';
import { Link } from 'react-router-dom';

function Footer() {
  const socialMediaIcons = [
    { src: rectangle43 , alt: "Facebook" },
    { src: rectangle44 , alt: "Twitter" },
    { src: rectangle45 , alt: "YouTube" },
    { src: rectangle46 , alt: "Pinterest" },
  ];

  return (
    <>
      <footer className=" mt-[4rem] ">
        <div className="container mx-auto px-5 py-[10rem]">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              {/* <img
                src={footer_logo}
                alt="footer_logo"
                className="w-[18rem]"
              /> */}
              <h1 className='  text-5xl font-poppins font-medium text-secondary-dark-color pt-20' >Resin Logo.</h1>
              <p className="text-[15px] font-medium text-[#646464]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos omnis, obcaecati maiores animi repellat minima impedit corrupti quibusdam rerum autem?
              </p>
              <div className="flex gap-7  text-[#646464] justify-center md:justify-start">
              
                {socialMediaIcons.map(({ src, alt }, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={alt}
                    className="w-12 h-12 bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                    style={{ transition: "all 0.3s" }}
                  />
                ))}
                
              </div>
              
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Quick Links</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                All Products
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Featured
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Workshop
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                About Us
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Contact us
              </p>
            </div>

            <div className="flex flex-col gap-8 relative max-w-[13rem] ">
              <p className="text-[22px] font-bold footer-main">Quick Links </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Resin Art
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Vintage
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Festival Exclisive
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Lippan Art
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Digital Art
              </p>
            </div>

            {/* right div */}
            

            {/* middle div */}
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;



// import { FaFacebookF } from "react-icons/fa";
// import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
// import { BiLogoPinterestAlt } from "react-icons/bi";

// function Footer() {
//   const iconsTab = [
//     { icon: <FaFacebookF /> },
//     { icon: <AiOutlineTwitter /> },
//     { icon: <AiFillYoutube /> },
//     { icon: <BiLogoPinterestAlt /> },
//   ];
//   return (
//     <>
//       <footer className="bg-white">
//         <div className="container mx-auto  py-[10rem]">
//           {/* footer div all */}
//           <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
//             {/* logo side */}
//             <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
//               <img
//                 src={"https://i.imgur.com/520zDfd.png"}
//                 alt="footer_logo"
//                 className="w-[18rem]"
//               />
//               <p className="text-[15px] font-medium text-[#646464]">
//                 Take your health and body to the next level with our
//                 comprehensive program designed to help you reach your fitness
//                 goals.
//               </p>
//               {/* socials */}
//               <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
//                 {iconsTab.map(({ icon }, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
//                       style={{ transition: "all 0.3s" }}
//                     >
//                       {icon}
//                     </div>
//                   );
//                 })}
//               </div>
//               <p className="text-[16px] font-medium text-[#646464]">
//                 Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
//                 Design by{" "}
//                 <a
//                   target="_blank"
//                   rel="noreferrer"
//                   href="https://www.radiustheme.com/"
//                 >
//                   RadiusTheme
//                 </a>
//               </p>
//             </div>

//             {/* middle div */}
//             <div className="flex flex-col gap-8 relative">
//               <p className="text-[22px] font-bold footer-main">Our Classes</p>

//               <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

//               <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Fitness Classes
//               </p>
//               <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Aerobics Classes
//               </p>
//               <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Power Yoga
//               </p>
//               <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Learn Machines
//               </p>
//               <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
//                 Full-body Strength
//               </p>
//             </div>

//             {/* right div */}
//             <div className="flex flex-col gap-8 relative">
//               <p className="text-[22px] font-bold footer-main">Working Hours</p>

//               <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

//               <p className="text-[16px]  text-[#646464] font-bold">
//                 Monday - Friday:
//               </p>
//               <p className="text-[16px] text-[#646464] font-medium">
//                 7:00am - 21:00pm
//               </p>
//               <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
//               <p className="text-[16px] text-[#646464] font-medium">
//                 7:00am - 19:00pm
//               </p>
//               <p className="text-[16px] text-[#646464] font-bold ">
//                 Sunday - Closed
//               </p>
//             </div>

//             {/* middle div */}
//             <span></span>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;