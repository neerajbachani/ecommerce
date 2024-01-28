import React from 'react'

import loginImg from "../../assets/formImg.jpg"
import Template from '../components/Form/Template'

const LoginPage = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back to Resin Gift Store"
      desc1="Where your resin art journey continues"
      desc2="log in now to explore exclusive products and connect with a vibrant community of fellow artists."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default LoginPage