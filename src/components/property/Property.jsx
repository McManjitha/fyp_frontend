import React from "react";
import Navbar from "../home/Navbar";
import { navLinks } from "../../constants";
import Detailcolumn from "./Detailcolumn";
import Slideshow from "./Slideshow";

const Property = () => {
    return (
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar navLinks={navLinks['/explore']}/>
            <div className="flex relative">
                <Detailcolumn/>
                <Slideshow/>
            </div>
        </div>
    )
}

export default Property;