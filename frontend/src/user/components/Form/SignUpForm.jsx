import React, { useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
// import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../redux/Auth/Action';


const SignUpForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const {auth} = useSelector(store => store)
    // const auth = useSelector(store => store.jwt)

    useEffect(() => {
        if(jwt){
            dispatch(getUser( jwt ))
        }
    },[jwt, auth.jwt])

    const [userData, setuserData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setuserData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        try{
            event.preventDefault();
        if(userData.password != userData.confirmPassword) {
            // toast.error("Passwords do not match");
            return ;
        }

        dispatch(register(userData))

        setIsLoggedIn(true);
        // toast.success("Account Created");
        const accountData = {
            ...userData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate(-1);
        }
        catch{
            console.error('Submit handler error:', error);
        }
        

    }


  return (
    <div>
        {/* student-Instructor tab */}
 
        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div className=' my-3 flex flex-col gap-5'>
                    <label>
                        <p className=' font-poppins text-3xl' >First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={userData.firstName}
                            className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
                        />
                    </label>

                    <label>
                        <p className=' font-poppins text-3xl'>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={userData.lastName}
                            className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
                        />
                    </label>
            </div>
            {/* email Add */}
            <label>
                    <p className=' font-poppins text-3xl '>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={userData.email}
                        className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div className='flex flex-col gap-5 mt-5'>
          <div className='relative'>
            <label>
              <p className='font-poppins text-3xl'>Create Password<sup>*</sup></p>
              <input
                required
                type={showPassword ? ('text') : ('password')}
                name='password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={userData.password}
                className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
              />
              <span className='eye-icon absolute bottom-5 text-2xl ml-5 ' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible />}
              </span>
            </label>
          </div>

          <div className='relative'>
            <label>
              <p className='font-poppins text-3xl'>Confirm Password<sup>*</sup></p>
              <input
                required
                type={showPassword ? ('text') : ('password')}
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={userData.confirmPassword}
                className='border border-light-bg-color w-60 pl-2 py-3 rounded-2xl text-xl'
              />
              <span className='eye-icon absolute bottom-5 text-2xl ml-5' onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ?  <AiOutlineEye/> : <AiOutlineEyeInvisible /> }
              </span>
            </label>
          </div>
        </div>
        <button className=' mt-10 rounded-2xl text-whitecolor bg-secondary-dark-color hover:bg-primarycolor transition-all transition-500ms font-poppins text-3xl px-7 py-3 w-full '>
            Create Account
        </button>
        </form>
        <a className=' ml-[25rem] text-xl text-secondary-dark-color' href='/signin'>Already have and Account? <span>Login</span></a>

    </div>
  )
}

export default SignUpForm
