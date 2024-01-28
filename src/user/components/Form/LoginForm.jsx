import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/Auth/Action';
// import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [userData, setuserData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setuserData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        // toast.success("Logged In");
        dispatch(login(userData))
        navigate("/");
    }

  return (
    <form onSubmit={submitHandler}>
        <div className=' flex flex-col gap-5' >
        <label>
            <p className=' font-poppins text-3xl' >
                Email Address<sup>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {userData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
            />
        </label>

        <label>
            <p className=' font-poppins text-3xl'>
                Password<sup>*</sup>
            </p>
            <div className='relative'>
            <input 
                required
                type= {showPassword ? ("text") : ("password")}
                value = {userData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='border  border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
            />

            <span className='absolute bottom-5 text-2xl ml-5' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
            </div>

            <Link to="#">
                <p className=' text-secondary-dark-color font-poppins ml-[10rem] mt-2 text-xl'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className=' mt-10 rounded-2xl text-whitecolor bg-secondary-dark-color hover:bg-primarycolor transition-all transition-500ms font-poppins text-3xl px-7 py-3 w-full '>
            Log In
        </button>
        </div>

    </form>
  )
}

export default LoginForm