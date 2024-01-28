// import React from 'react';
// import herosection from '../../../assets/herosection.jpeg';
// import herosection1 from '../../../assets/herosection.jpeg';

// import { useState } from 'react';

// const images = [

  
//   // '../../../assets/herosection.jpeg',
//   herosection,
//   herosection,
//   herosection,

  
  

  
//   // '/docs/images/carousel/carousel-3.svg',
//   // '/docs/images/carousel/carousel-4.svg',
//   // '/docs/images/carousel/carousel-5.svg',
// ];

// const HeroSection = ({ isOpen }) => {
//   const widthClass = isOpen ? 'w-[70vw] ml-[28rem] transition-all duration-500 ' : 'w-full transition-all duration-500 ml-[0rem] ';
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const currentImage = images[currentIndex];

//   return (
//     <div className={` ${widthClass} flex justify-center items-center  mt-[2rem]`}>
//       {/* <img className={` h-[40rem] object-cover`} src={herosection} /> */}
//       <div className='flex justify-center items-center mt-[2rem] relative'>
//        <div className="relative h-[40rem] overflow-hidden rounded-lg md:h-96">
//          <div className="block duration-700 ease-in-out" style={{ transitionDuration: '0.5s', transform: `translateX(-${currentIndex * 100}%)` }}>
//           {images.map((src, index) => (
//             <div key={index} className={index === currentIndex ? "absolute block w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}>
//               <img src={src} className= {` object-cover w-[70vw] h-[40vw]`} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M5 1 1 5l4 4"
//         />
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//       </button>
//       <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="m1 9 4-4-4-4"
//         />
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//       </button>
//     </div>

//     </div>
//   );
// };

// export default HeroSection;
// import React, { useState } from 'react';
// import herosection from '../../../assets/herosection.jpeg';


// const images = [
//   herosection,
  

  
//   // '/docs/images/carousel/carousel-3.svg',
//   // '/docs/images/carousel/carousel-4.svg',
//   // '/docs/images/carousel/carousel-5.svg',
// ];

// const HeroSection = ({ isOpen }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const currentImage = images[currentIndex];

//   const widthClass = isOpen ? 'w-[70vw] ml-[28rem] transition-all duration-500 ' : 'w-full transition-all duration-500 ml-[0rem] ';

//   return (
//     <div className='flex justify-center items-center mt-[2rem] relative'>
//       <div className="relative h-[40rem] overflow-hidden rounded-lg md:h-96">
//         <div className="block duration-700 ease-in-out" style={{ transitionDuration: '0.5s', transform: `translateX(-${currentIndex * 100}%)` }}>
//           {images.map((src, index) => (
//             <div key={index} className={index === currentIndex ? "absolute block w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""}>
//               <img src={src} className= {`${widthClass} object-cover w-full`} alt={`Slide ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M5 1 1 5l4 4"
//         />
//       </svg>
//       <span className="sr-only">Previous</span>
//     </span>
//       </button>
//       <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//       <svg
//         className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 6 10"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="m1 9 4-4-4-4"
//         />
//       </svg>
//       <span className="sr-only">Next</span>
//     </span>
//       </button>
//     </div>
//   );
// };

// export default HeroSection;
import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const HeroSection = ({ images , isOpen }) => {
  const widthClass = isOpen ? 'max-w-[70vw] mx-auto ml-[32rem] transition-all duration-500 ' : ' w-full mx-8 px-8 transition-all duration-500 ml-[0rem] ';
  const widthClas = isOpen ? 'mx-0 ' : ' mx-8';
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className={` ${widthClass} relative mt-[3rem] `}    >
      <div>
      <img src={images[currentImage]} alt="Carousel Image" className={` relative w-[100%] h-[40rem] object-cover  `} />
      <div className={  ` ${widthClas} absolute top-0 bottom-0 left-0 right-0 bg-opacity-80 opacity-40  `}style={{
                        background: "rgb(224,235,255)",
                        background: "linear-gradient(90deg, rgba(224,235,255,1) 0%, rgba(107,154,240,1) 100%)",

                      }}></div>
      </div>
      
      
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2  text-6xl text-secondary-dark-color text-white px-10 py-1 rounded"
        onClick={prevImage}
      >
        <IoIosArrowDropleftCircle/>
      </button>
      <h1 className=' absolute top-[15rem] left-[11rem] text-5xl font-poppins font-semibold text-secondary-dark-color ' >We strive the world we fashionable resin art</h1>
      <h1 className=' absolute top-[18rem] left-[11rem] text-5xl font-poppins font-semibold text-secondary-dark-color ' >Desings Handcrafts arts </h1>
      {/* <h1 className=' absolute top-[21rem] left-[11rem] text-5xl font-poppins font-semibold text-secondary-dark-color ' >We strive the world we fashionable resin art</h1> */}
      <button className=' absolute top-[23rem] left-[11rem] text-4xl font-poppins font-normal bg-primarycolor text-[#fff]  rounded-md px-7 py-2  '>
        Show Now
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2   text-6xl text-secondary-dark-color px-10 py-1 rounded "
        onClick={nextImage}
      >
        <IoIosArrowDroprightCircle/>
      </button>
    </div>
  );
};

export default HeroSection;


