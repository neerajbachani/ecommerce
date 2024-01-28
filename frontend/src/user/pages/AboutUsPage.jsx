import React from 'react'
import aboutUs from '../../assets/AboutUs.jpeg'
import aboutUs2 from '../../assets/Geode/GeodeArt1.jpg'
import DeptAndSearch from '../components/DepartmentAndSearch/DeptAndSearch'
import { TextField, Button, Grid } from '@mui/material';

const AboutUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <div>
        <DeptAndSearch/>
        {/* About Banner */}
        <section className=" mt-10 ">
          <img src={aboutUs} alt="" className=" h-[30rem] object-cover  w-full" />
        </section>


        <div className=' mt-36' >
          <h1 className=' text-7xl  text-secondary-dark-color font-poppins font-semibold text-center ' >Transform Your Space with Resin Art</h1>
          <h2 className=' max-w-[85rem] mt-5 mx-auto text-4xl tracking-wide text-secondary-dark-color font-poppins font-normal text-center' >Dive into a World of Harmony and Inclusivity. Every resin piece is crafted with care, ensuring it speaks to your style and satisfaction.</h2>

          <div className=' mt-28 flex   gap-10 flex-wrap justify-center' >
            <div className=' border-2 border-primarycolor border-dotted px-28 py-7 rounded-lg flex flex-col gap-2  ' >
              <p className=' text-6xl font-poppins font-bold text-primarycolor text-center ' > 1K </p>
              <p className=' text-3xl font-poppins font-medium text-primarycolor text-center ' > Products Delivered </p>

            </div>
            <div className=' border-2 border-primarycolor border-dotted px-28 py-7 rounded-lg flex flex-col gap-2  ' >
              <p className=' text-6xl font-poppins font-bold text-primarycolor text-center ' > 1K </p>
              <p className=' text-3xl font-poppins font-medium text-primarycolor text-center ' > Products Delivered </p>

            </div>
            <div className=' border-2 border-primarycolor border-dotted px-28 py-7 rounded-lg flex flex-col gap-2  ' >
              <p className=' text-6xl font-poppins font-bold text-primarycolor text-center ' > 1K </p>
              <p className=' text-3xl font-poppins font-medium text-primarycolor text-center ' > Products Delivered </p>

            </div>


          </div>
          <div>

          </div>
        </div>

        <div className=' bg-[#edede9] mt-36 block  md:flex py-28 gap-20 items-center  ' >

          <div className=' w-[90rem] ' >
            <img className='  h-[35rem] lg:h-[40rem] w-[100%] object-cover hidden md:block  ' src={aboutUs2} />
          </div>

          <div className=' md:max-w-3xl mx-10 ' >
            <h1 className='text-7xl  text-secondary-dark-color font-poppins font-semibold md:text-left text-center' >About Us</h1>
            <p className='text-4xl mt-10 text-secondary-dark-color font-poppins font-thin md:text-left text-center' >Established in 2023, our Resin Gift Store stands as a digital beacon for aficionados of unique, delicate, and captivating resin creations. Fusing the elegance of resin art with artisanal craftsmanship, we proudly highlight "Made In India" ingenuity in our curated collection. From contemporary resin canvases to evocative wall pieces and intricate wire designs, each piece resonates with durability and a distinct charm. We find great joy in anticipating the delight you'll experience as you delve into our resin treasures, wishing for each artwork to illuminate your space and spark genuine appreciation. As we grow, our commitment remains unwavering: to bring you the finest in resin artistry while championing the rich tapestry of Indian craftsmanship.</p>
          </div>

        </div>
        <div>
          <p className='text-4xl max-w-[110rem] mx-auto mt-28 text-secondary-dark-color font-poppins font-normal  text-center'>Our product demonstrates how something like a metal-designed incarnation can bring harmony to your space. The catalogs of our products are truly designed by The Next Decor experts, narrating their expertise and skills at a glance. We give you a plethora of options to decorate your spaces irrespective of mood and experiences that without any budget-exploiting reasons.</p>
          <div className=' mt-20 flex max-w-[100rem] mx-auto justify-between gap-20  '>
            <img className='w-[40rem] h-[40rem] object-cover' src={aboutUs} />
            <div>
              <h1 className='text-7xl  text-secondary-dark-color font-poppins font-semibold text-left '>Our Mission and Vision</h1>
              <ul className=' mt-20 space-y-7  ' >
                <li className='text-4xl  text-secondary-dark-color font-poppins font-normal ' >
                  To enable Indian consumers to renovate their spaces with a unique set of home decor items.

                </li>

                <li className='text-4xl  text-secondary-dark-color font-poppins font-normal' >
                  To provide an extensive range of home decor products at budget-friendly prices.

                </li>

                <li className='text-4xl  text-secondary-dark-color font-poppins font-normal' >
                  To hold quality, innovation, and exclusivity as the pillar to continue our adventurous journey.

                </li>
                <li className='text-4xl  text-secondary-dark-color font-poppins font-normal' >To establish a unique perspective among shoppers, edge competitiveness, and be recognized as the best home decor brand in India</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container md:max-w-[100rem] lg:max-w-[120rem] 2xl:max-w-[140rem] mt-28 mx-auto flex flex-wrap md:flex-nowrap  px-5 py-2 lg:px-20 lg:pt-24 gap-2 md:gap-8 ">


          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
            </div>
          </div>

          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs} />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={aboutUs2} />
              </div>
            </div>
          </div>
        </div>

        




       
      </div>
  )
}

export default AboutUsPage