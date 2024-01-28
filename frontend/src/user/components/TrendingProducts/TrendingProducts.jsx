import React from 'react'

import TpWearings from '../../../assets/TrendingProductsWearings.jpeg'
import TpChains from '../../../assets/TrendingProductsChains.jpg'
import TpPoojaThali from '../../../assets/TrendingProductsPoojaThali.jpeg'





const TrendingProducts = () => {
  return (
    <section className=' mt-[13rem]' >
        <h3 className=' text-[3.5rem] text-secondary-dark-color text-left font-bold ml-[3rem] font-poppins ' >
            Trending Products
        </h3>
        <div className=' mx-8 h-[0.1rem] bg-light-text-color ' ></div>

        <div className=' mt-[4rem]  ' >
        <div className=' flex justify-center px-3 mx-auto gap-6  ' >
            <div className=' flex flex-col gap-4 ' >



            <div className="relative">                
                <img className=' w-[56rem] h-[24rem] object-cover object-center rounded-md transition-300 '  src={TpChains} />
                <div className=' absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-[#8ecae6] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center bg-opacity-50 '>
                    <a href='#' className="  text-[#c1121f] font-poppins text-5xl ">View All →</a>
                </div>
                </div>
                <div className="relative">                
                <img className=' w-[56rem] h-[30rem] object-cover object-center rounded-md ' src={TpWearings} /> 
                <div className=' absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-[#8ecae6] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center bg-opacity-50 '>
                    <a href='#' className=" text-[#c1121f] font-poppins text-5xl  ">View All →</a>
                </div>
                </div>
                
                  

            </div>
            <div className=' flex flex-col gap-4 ' >
            <div className="relative">                
                <img className=' w-[56rem] h-[30rem] object-cover object-center rounded-md ' src={TpWearings} /> 
                <div className=' absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-[#8ecae6] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center bg-opacity-50 '>
                    <a href='#' className=" text-[#c1121f] font-poppins text-5xl   ">View All →</a>
                </div>
                </div>
                <div className="relative">                
                <img className=' w-[56rem] h-[24rem] object-cover object-center rounded-md ' src={TpPoojaThali}  /> 
                <div className=' absolute bottom-0 left-0 right-0 top-0  overflow-hidden bg-[#8ecae6] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 flex justify-center items-center bg-opacity-50 '>
                    <a href='#' className=" text-[#c1121f] font-poppins text-5xl   ">View All →</a>
                </div>
                </div>
           
            </div>    
        </div>
        </div>

    </section>
  )
}

export default TrendingProducts