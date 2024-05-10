import React from "react";
import LogInComponent from "./LogInComponent";
import { StarsCanvas } from "../canvas";

const LogIn = () => {
    return(
        <div className='relative z-0'>
          <LogInComponent />
          <StarsCanvas />
        </div>
    )
}

export default LogIn;