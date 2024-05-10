import React from "react";
import SignInComponent from "./SignInComponent";
import { StarsCanvas } from "../canvas";

const Login = () => {
    return(
        <div className='relative z-0'>
          <SignInComponent />
          <StarsCanvas />
        </div>
    )
}

export default Login;