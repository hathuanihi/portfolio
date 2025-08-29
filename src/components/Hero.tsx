import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

import { styles } from "./styles";
import { hathu } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen`}>
      <div
        className={`absolute inset-0 top-[90px] ${styles.paddingX} flex flex-row items-center justify-center gap-5`}
      >
        <div className="flex flex-row items-start gap-5">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              <TypeAnimation
                sequence={[
                  "Hi, I'm Phạm Hà Anh Thư",
                  3000,
                  "",
                  3000,
                ]}
                wrapper="span"
                speed={10}
                className='text-[#915EFF]'
                repeat={Infinity}
              />
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <TypeAnimation
                sequence={[
                  'I’m a Fullstack Developer with experience in Web and Mobile Development, currently a 3rd-year student at the University of Information Technology - VNUHCM, focused on building efficient, scalable, and user-friendly applications.'
                ]}
                wrapper="span"
                speed={90}
                cursor={true}
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <Tilt
            className='w-[300px] h-[400px]'
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
          >
            <div
            >
              <img
                src={hathu}
                alt='Hà Thư'
                className='w-full h-full object-cover'
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;