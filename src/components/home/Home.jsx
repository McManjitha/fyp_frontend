import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Tech from "./Tech";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import { navLinks} from "../../constants";
import { useSelector } from "react-redux";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.logSlice.logged === "LOGGED_IN");
  const navLink = isLoggedIn ? navLinks['/logedin'] : navLinks['/'];
    return(
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-no-repeat bg-center'>
            <Navbar navLinks={navLink}/>
            <Hero dmodel={true}/>
          </div>
          <About />
          <Experience />
          <Tech />
          <Feedbacks />
        </div>
    )
}

export default Home;