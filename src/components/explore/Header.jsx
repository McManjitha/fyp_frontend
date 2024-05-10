import { motion } from "framer-motion";

import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";

const Header = ({dmodel}) => {
  return (
    <section className={`relative w-full h-[350px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      > 
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Digi<span className='text-[#915EFF]'>Deeds</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Revolutionizing Real Estate Trading with<br className='sm:block hidden' />
          Blockchain Technology
          </p>
        </div>
      </div>

    </section>
  );
};

export default Header;
