// import React, { useEffect } from 'react';
// import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import logo from '../../../assets/ResinWebLogo.png';
// import like from '../../../assets/heartIcon.png';
// import cart from '../../../assets/cartIcon.png';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { getUser } from '../../redux/Auth/Action';

// const Navbar = (props) => {
//   let isLoggedIn = props.isLoggedIn;
//     let setIsLoggedIn = props.setIsLoggedIn;
//   const location = useLocation();
// const navigate = useNavigate();
// const dispatch = useDispatch();
// const jwt = localStorage.getItem("jwt")
// const {auth} = useSelector(store => store)
//   const isActive = (pathname) => {
//     return location.pathname === pathname;
//   };

//   useEffect(() => {
//     if(jwt){
//         dispatch(getUser(jwt))
//     }
// },[jwt, auth.jwt])
//   useEffect(() => {
//     if(location.pathname === '/signup' || location.pathname === '/signin'){
//       navigate(-1)
//     }

//   },[auth.user])

//   return (
//     <header className='flex  flex-col'>
//       <div className='flex justify-end items-center gap-x-4'>
               
//                 <Link to="/signup">
//                     <button  className='bg-richblack-800 text-richblack-100 py-[8px] 
//                     px-[12px] rounded-[8px] border border-richblack-700'>
//                         Sign up
//                     </button>
//                 </Link>
       
      
//                 <Link to="/">
//                     <button onClick={() => {
//                         setIsLoggedIn(false);
                      
//                     }}
//                     className='bg-richblack-800 text-richblack-100 py-[8px] 
//                     px-[12px] rounded-[8px] border border-richblack-700'>
//                         Log Out
//                     </button>
//                 </Link>
    
//             {/* { isLoggedIn &&
//                 navigate("/")
//             }  */}
//         </div>
//       <nav className=' flex justify-between items-center ml-5'>
//         <img src={logo} className='w-[13rem] h-[13rem] object-cover' />
//         {/* <h1 className=' text-5xl font-poppins font-medium text-secondary-dark-color'>Resin Logo.</h1> */}
//         <ul className='flex font-poppins gap-5'>
//           <li className={`text-3xl ${isActive('/') ? ' text-primarycolor' : ' text-secondary-dark-color'} hover:underline`}>
//             <Link to='/'>Home</Link>
//           </li>
//           <li className={`text-3xl ${isActive('/products') ? ' text-primarycolor' : ' text-secondary-dark-color'} hover:underline`}>
//             <Link to='/products'>All Products</Link>
//           </li>
//           <li className={`text-3xl ${isActive('/feature') ? ' text-primarycolor' : ' text-secondary-dark-color'}hover:underline`}>
//             <Link to='/feature'>Coupon Code</Link>
//           </li>
//           <li className={`text-3xl ${isActive('/about-us') ? ' text-primarycolor' : ' text-secondary-dark-color'} hover:underline`}>
//             <Link to='/about-us'>About Us</Link>
//           </li>
          
          
//           <li className={`text-3xl ${isActive('/contact') ? ' text-primarycolor' : ' text-secondary-dark-color'}hover:underline`}>
//             <Link to='/contact'>Contact Us</Link>
//           </li>
          
//         </ul>
//         <div className='flex gap-3 mr-8'>
//           <button>
//             <img className='w-8 h-8' src={like} alt="Like" />
//           </button>
//           <Link to='/cart' >
//           <button>
//             <img className='w-8 h-8' src={cart} alt="Cart" />
//           </button>
//           </Link>
          
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../assets/ResinWebLogo.png';
import like from '../../../assets/heartIcon.png';
import cart from '../../../assets/cartIcon.png';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser, logout } from '../../redux/Auth/Action';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store);

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  useEffect(() => {
    if (location.pathname === '/signup' || location.pathname === '/signinn') {
      navigate(-1);
    }
  }, [auth.user]);

  const handleLogout = () => {
    // Implement your logout logic here
    logout(dispatch)
    navigate("/")
  };

  return (
    <header className='flex flex-col'>
      <div className='flex justify-end items-center gap-x-4'>
        {!auth.user ? (
          <Link to="/signup">
            <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
              Sign up
            </button>
          </Link>
        ) : (
          <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
            {auth.user.firstName.charAt(0)}
          </button>
        )}
        {auth.user && (
          <button onClick={handleLogout} className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
            Log Out
          </button>
        )}
      </div>
      <nav className='flex justify-between items-center ml-5'>
        <img src={logo} className='w-[13rem] h-[13rem] object-cover' />
        <ul className='flex font-poppins gap-5'>
          <li className={`text-3xl ${isActive('/') ? 'text-primarycolor' : 'text-secondary-dark-color'} hover:underline`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`text-3xl ${isActive('/products') ? 'text-primarycolor' : 'text-secondary-dark-color'} hover:underline`}>
            <Link to='/products'>All Products</Link>
          </li>
          <li className={`text-3xl ${isActive('/feature') ? 'text-primarycolor' : 'text-secondary-dark-color'} hover:underline`}>
            <Link to='/feature'>Coupon Code</Link>
          </li>
          <li className={`text-3xl ${isActive('/about-us') ? 'text-primarycolor' : 'text-secondary-dark-color'} hover:underline`}>
            <Link to='/about-us'>About Us</Link>
          </li>
          <li className={`text-3xl ${isActive('/contact-us') ? 'text-primarycolor' : 'text-secondary-dark-color'} hover:underline`}>
            <Link to='/contact-us'>Contact Us</Link>
          </li>
        </ul>
        <div className='flex gap-3 mr-8'>
          <button>
            <img className='w-8 h-8' src={like} alt="Like" />
          </button>
          <Link to='/cart'>
            <button>
              <img className='w-8 h-8' src={cart} alt="Cart" />
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
