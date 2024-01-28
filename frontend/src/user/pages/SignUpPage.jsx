import React from 'react'

import loginImg from "../../assets/formImg.jpg"
import Template from '../components/Form/Template'

const SignUpPage = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Start Now!!"
      desc1="Create Your Resin Art Account"
      desc2="Unlock a World of Possibilities by Joining Our Resin Community"
      image={loginImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default SignUpPage