import React from "react";
import Navbar from "../home/Navbar";
import Header from "./Header";
import FilterTab from "./Filter";
import Lands from "./Lands";
import { navLinks } from "../../constants";

const Explore = () => {
    return(
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar navLinks={navLinks['/explore']}/>
            <Header/>
          </div>
          <FilterTab/>
          <Lands/>
        </div>
    )
}

export default Explore;