import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



// Exprience Details Component
const Details = ({ type, time, place, info }) => {

    const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">

        <LiIcon reference={ref} />

      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration: 0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium dark:text-white/75 text-dark/75  text-base xs-text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-base xs-text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )


  return (
    <div className="my-64">
      <h2 className="text-8xl md:text-6xl sm:text-4xl font-bold mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] lg:w-[90%] mx-auto relative">

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-7 xs:left-5"
         />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

        {/* Education BSC*/}
          <Details
            type="Diploma Engineering In Computer Technology"
            time="2019-2023"
            place="Sylhet Polytechnic Institute (SPI)"
            info="Along with other fundamental computer science courses, my diploma in Computer Science & Technology comprised classes like Data Structures and Algorithms."
          />



        </ul>
      </div>
    </div>
  );
};

export default Education;
