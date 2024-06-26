import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";



// Exprience Details Component
const Details = ({ position, company, companyLink, time, address, work }) => {

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
          {position}&nbsp;{" "}
          <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 text-base xs-text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-base xs:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Exprience = () => {

    const ref = useRef(null)

    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )


  return (
    <div className="my-64">
      <h2 className="text-8xl md:text-6xl sm:text-4xl font-bold mb-32 w-full text-center">Exprience</h2>

      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">

        <motion.div 
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-1 h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-7 xs:left-5"
         />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

        {/* Exprience At Google */}
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2022-Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />

        {/* Exprience At Facebook */}
          <Details
            position="Intern"
            company="Facebook"
            companyLink="https://facebook.com"
            time="Summer 2021"
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
          />

        {/* Exprience At Amazon */}
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://amazon.com"
            time="2020-2021"
            address="Seattle, WA."
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />


        {/* Exprience At Microsoft */}
          <Details
            position="Software Developer Intern"
            company="Microsoft"
            companyLink="https://microsoft.com"
            time="Summer 2019"
            address="Redmond, WA."
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component."
          />



        {/* Exprience At MIT */}
          <Details
            position="Teaching Assistant"
            company="MIT"
            companyLink="https://mit.com"
            time="Fall 2018"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Exprience;
