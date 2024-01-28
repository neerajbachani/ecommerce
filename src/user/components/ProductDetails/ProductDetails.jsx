import { useState } from 'react'
import productdetails_img from '../../../assets/productdetails.jpg'
import DeptAndSearch from '../DepartmentAndSearch/DeptAndSearch'
import DeliveryAndReturn from './DeliveryAndReturn'
import UploadImage from './UploadImage'
import Dropdown from './Dropdown'
import WhatsAppButton from './Whatsapp'
import { Link, useNavigate } from 'react-router-dom'
import SimilarProducts from './SimilarProducts'
import productsData from '../../productData'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slice/CartSlice';



const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails({ product }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dispatch = useDispatch();
  const handleAddToCart = () => {

    // navigate("/cart")
    // Create a new item object with the necessary details
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      subtotal: product.price,
      discount: product.discount,
      originalprice: product.originalprice,

    };
  
    // Dispatch the addItemToCart action with the new item as payload
    dispatch(addItemToCart(newItem));
  };
  


  const [selectedTab, setSelectedTab] = useState('highlight');

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const navigate = useNavigate();


  let totalRating = 0;
  let averageRating = 0;

  if (product.reviews && product.reviews.length > 0) {
    // Compute total count of reviews and average rating
    product.reviews.forEach(review => {
      totalRating += review.rating;
    });
    averageRating = totalRating / product.reviews.length;
  }

  const [selectedProductId, setselectedProductId] = useState(product.id)

  return (
    <div className="bg-white">
      <DeptAndSearch />
      <div className="pt-10">

        {/* Image gallery */}
        <div className=' flex flex-col sm:flex-row mx-auto mf:max-w-7xl lg:max-w-[105rem] gap-20 '>
          <div className=" py-auto ">
            <div className=" sm:overflow-hidden sm:rounded-lg">
              <img
                src={product.image}
                alt='product_detail'
                className="h-[51rem] max-w-[46rem] object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className=" max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">

            <div className=' lg:col-span-2' >

              <h1 className="text-2xl font-bold tracking-tight text-gray-900 font-poppins sm:text-6xl">{product.name}</h1>

            </div>


            {/* Options */}
            <div className="mt-4 lg:row-span-3 ">
              <h2 className="sr-only">Product information</h2>
              <p className="text-5xl tracking-tight text-gray-900 font-poppins">{product.price} <span className=' text-light-text-color text-3xl ml-2 line-through font-poppins ' >{product.originalprice}</span> </p>
              <p className=' mt-10 text-4xl text-primarycolor font-poppins ' >You Save: {product.savedprice} <span>({product.discount})</span> </p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <label key={star} htmlFor={`star${star}`}>
                      <input type="radio" id={`star${star}`} name="rating" className="sr-only" />
                      <svg
                        className="w-7 h-7 text-primarycolor me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </label>
                  ))}
                  <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400 font-poppins ">4.95</p>
                  <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400 font-poppins">out of</p>
                  <p className="ms-1 text-lg font-medium text-gray-500 dark:text-gray-400 font-poppins">5</p>
                  <p className="ms-1 text-lg font-medium text-[#808080] font-poppins">(117 reviews)</p>

                </div>


              </div>

              <div className=' mt-10 ' >
                <h3 className="sr-only font-poppins">Description</h3>
                <div className="mt-4">
                  <ul role="list" className=" list-none space-y-2 pl-4 text-md">

                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.description1}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.description2}</span>
                    </li>
                    <li className="text-gray-400">
                      <span className="text-gray-600 font-poppins text-xl ">{product.description3}</span>
                    </li>
                  </ul>
                </div>
              </div>


              <form className="mt-10 ">
                <div className="mb-5">
                  <label
                    htmlFor="large-input"
                    className="block mb-2 font-poppins text-xl font-medium text-[#808080] dark:text-white"
                  >
                    *Note
                  </label>
                  <input
                    type="text"
                    id="large-input"
                    className="block w-full h-[10rem] p-4 text-gray-900 pb-24 text-xl font-poppins border border-light-text-color rounded-md "
                    placeholder="Share your desired changes or customizations in your note. "
                  />
                </div>
              </form>

              <button
                onClick={handleAddToCart}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3  font-medium  bg-primarycolor hover:bg-light-text-color  transition duration-500 text-2xl font-poppins "
              >
                Add to Cart
              </button>


              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3  font-medium   hover:bg-secondary-dark-color hover:text-light-bg-color  transition duration-500 text-2xl font-poppins "
              >
                Buy Now
              </button>

            </div>

            <div className=' flex justify-between mt-5 ' >
              <DeliveryAndReturn className='max-w-screen-sm h-5rem' />
              <UploadImage />
              <div>
               
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>
        

        
      </div>
      {/* <div className=' flex justify-evenly items-center ' >
          <Dropdown onSelect={handleTabSelect} />
          <div className=' border border-primarycolor p-20 max-w-7xl text-3xl ' >
            {selectedTab === 'highlight' && <p>Highlight content goes here</p>}
            {selectedTab === 'details' && <p>Details content goes here</p>}
            {selectedTab === 'reviews' && <p>Reviews content goes here</p>}
          </div>
        </div> */}
        <div className='' >
          <h1 className='text-5xl font-poppins text-secondary-dark-color text-center underline underline-offset-8 w-full ' >Details</h1>
          <p className='text-3xl font-poppins font-light text-[#434242] py-10 px-10 w-full ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vel odio. Quidem sunt unde explicabo corrupti. Placeat incidunt libero illo adipisci eligendi earum! Voluptate repellat animi vitae minus rerum, officiis ullam ratione necessitatibus beatae soluta veniam fugiat non voluptatem quos minima eius doloribus, consequuntur nihil? Laudantium, cupiditate, illo architecto provident esse est qui eveniet a consectetur autem expedita, placeat neque sapiente! Fuga facere repellat nulla ad! Excepturi neque saepe quibusdam, velit, dolorum laboriosam consequuntur necessitatibus reiciendis repudiandae delectus eum facere quod similique sed nulla. Omnis quas facilis modi sed voluptatibus et, iusto ab ut alias suscipit accusamus architecto commodi possimus?</p>
          <ul className=' ' >
            <li className='text-3xl font-poppins font-light text-[#434242] py-10 px-10 w-full' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut non ut dignissimos suscipit! Soluta atque aliquid facilis.</li>
            <li className='text-3xl font-poppins font-light text-[#434242] py-10 px-10 w-full' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut non ut dignissimos suscipit! Soluta atque aliquid facilis.</li> 
            <li className='text-3xl font-poppins font-light text-[#434242] py-10 px-10 w-full' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut non ut dignissimos suscipit! Soluta atque aliquid facilis.</li>
            <li className='text-3xl font-poppins font-light text-[#434242] py-10 px-10 w-full' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut non ut dignissimos suscipit! Soluta atque aliquid facilis.</li>
          </ul>
        </div>
        <>
        <div className='mt-20 w-full'>
          <h1 className=' text-5xl font-poppins text-secondary-dark-color text-center underline underline-offset-8 w-full ' >Ratings & Review</h1>
          
        </div>
        <div className='grid grid-cols-2 gap-32 ml-36 mt-20 items-center '>
        <article>
  <div className="flex items-center mb-4 col-span-1  ">
    <img
      className="w-10 h-10 me-4 rounded-full"
      src="/docs/images/people/profile-picture-5.jpg"
      alt=""
    />
    <div className="font-medium font-poppins text-4xl dark:text-white">
      <p>
        Jese Leos{" "}
        <time
          dateTime="2014-08-16 19:00"
          className="block text-3xl text-gray-500 dark:text-gray-400"
        >
          Joined on August 2014
        </time>
      </p>
    </div>
  </div>
  <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
    <svg
      className="w-7 h-7 text-[#ffe14d]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d]"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#c3c1c1] dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <h3 className="ms-2 text-3xl font-semibold text-gray-900 dark:text-white">
      Thinking to buy another one!
    </h3>
  </div>
  <footer className="mb-5 text-3xl text-gray-500 dark:text-gray-400">
    <p>
      Reviewed in the United Kingdom on{" "}
      <time dateTime="2017-03-03 19:00">March 3, 2017</time>
    </p>
  </footer>
  <p className="mb-2 text-2xl text-gray-500 dark:text-gray-400">
    This is my third Invicta Pro Diver. They are just fantastic value for money.
    This one arrived yesterday and the first thing I did was set the time,
    popped on an identical strap from another Invicta and went in the shower
    with it to test the waterproofing.... No problems.
  </p>
  <p className="mb-3 text-2xl text-gray-500 dark:text-gray-400">
    It is obviously not the same build quality as those very expensive watches.
    But that is like comparing a Citroën to a Ferrari. This watch was well under
    £100! An absolute bargain.
  </p>
  <a
    href="#"
    className="block mb-5 text-2xl font-medium text-blue-600 hover:underline dark:text-blue-500"
  >
    Read more
  </a>
  <aside>
    <p className="mt-1 text-xl text-gray-500 dark:text-gray-400">
      19 people found this helpful
    </p>
    <div className="flex items-center mt-3">
      <a
        href="#"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Helpful
      </a>
      <a
        href="#"
        className="ps-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 border-gray-200 ms-4 border-s md:mb-0 dark:border-gray-600"
      >
        Report abuse
      </a>
    </div>
  </aside>
</article>

<div className=' col-span-1'>
  <div className="flex items-center mb-2  ">
    <svg
      className="w-7 h-7 text-[#ffe14d] me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d] me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d] me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#ffe14d] me-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <svg
      className="w-7 h-7 text-[#bab8b8] me-1 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
    <p className="ms-1 font-medium font-poppins text-primarycolor text-2xl">
      4.95
    </p>
    <p className="ms-1 font-medium font-poppins text-secondary-dark-color text-2xl">
      out of
    </p>
    <p className="ms-1 font-medium font-poppins text-secondary-dark-color text-2xl">
      5
    </p>
  </div>
  <p className="font-medium font-poppins text-2xl text-[#808080] ">
    745 ratings
  </p>
  <div className="flex items-center mt-4">
    <a
      href="#"
      className="text-2xl font-medium font-poppins text-secondary-dark-color text-blue-600 dark:text-blue-500 hover:underline"
    >
      5 star
    </a>
    <div className=" w-1/2 h-5 mx-4 bg-gray-200 rounded bg-[#e8e8e8]">
      <div className="h-5 bg-[#ffe14d] rounded" style={{ width: "70%" }} />
    </div>
    <span className="text-2xl font-medium text-primarycolor dark:text-gray-400">
      70%
    </span>
  </div>
  <div className="flex items-center mt-4">
    <a
      href="#"
      className="text-2xl font-medium font-poppins text-secondary-dark-color text-blue-600 dark:text-blue-500 hover:underline"
    >
      4 star
    </a>
    <div className=" w-1/2 h-5 mx-4 bg-gray-200 rounded bg-[#e8e8e8]">
      <div className="h-5 bg-[#ffe14d] rounded" style={{ width: "12%" }} />
    </div>
    <span className="text-2xl font-medium text-primarycolor dark:text-gray-400">
      12%
    </span>
  </div>
  <div className="flex items-center mt-4">
    <a
      href="#"
      className="text-2xl font-medium font-poppins text-secondary-dark-color text-blue-600 dark:text-blue-500 hover:underline"
    >
      3 star
    </a>
    <div className=" w-1/2 h-5 mx-4 bg-gray-200 rounded bg-[#e8e8e8]">
      <div className="h-5 bg-[#ffe14d] rounded" style={{ width: "10%" }} />
    </div>
    <span className="text-2xl font-medium text-primarycolor dark:text-gray-400">
      10%
    </span>
  </div>
  <div className="flex items-center mt-4">
    <a
      href="#"
      className="text-2xl font-medium font-poppins text-secondary-dark-color text-blue-600 dark:text-blue-500 hover:underline"
    >
      2 star
    </a>
    <div className=" w-1/2 h-5 mx-4 bg-gray-200 rounded bg-[#e8e8e8]">
      <div className="h-5 bg-[#ffe14d] rounded" style={{ width: "5%" }} />
    </div>
    <span className="text-2xl font-medium text-primarycolor dark:text-gray-400">
      5%
    </span>
  </div>
  <div className="flex items-center mt-4">
    <a
      href="#"
      className="text-2xl font-medium font-poppins text-secondary-dark-color text-blue-600 dark:text-blue-500 hover:underline"
    >
      1 star
    </a>
    <div className=" w-1/2 h-5 mx-4 bg-gray-200 rounded bg-[#e8e8e8]">
      <div className="h-5 bg-[#ffe14d] rounded" style={{ width: "3%" }} />
    </div>
    <span className="text-2xl font-medium text-primarycolor dark:text-gray-400">
      3%
    </span>
  </div>
  </div>
        </div>
        

</>

      {/* <div className="mt-10">
        <h3 className="text-2xl font-bold mb-4">Reviews</h3>

        {product.reviews && product.reviews.length > 0 ? (
          <div>
            <p className="text-lg font-medium mb-2">Total Reviews: {product.reviews.length}</p>
            <p className="text-lg font-medium mb-4">Average Rating: {averageRating.toFixed(1)} / 5</p>

            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border p-4 rounded">
                  <p className="text-lg font-semibold">{review.reviewerName}</p>
                  <p className="text-gray-600">Rating: {review.rating}/5</p>
                  <p className="mt-2">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-lg font-medium text-gray-500">No reviews yet.</p>
        )}

      </div> */}
      <SimilarProducts  products={productsData} selectedSubCategory={product.subCategory} selectedProductId={selectedProductId}  />
    </div>
  )
}
