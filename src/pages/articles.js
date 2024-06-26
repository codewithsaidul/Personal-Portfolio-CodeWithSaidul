import Layout from "@/Layout/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import featuredArticle1 from "../../public/images/articles/pagination component in reactjs.jpg";
import featuredArticle2 from "../../public/images/articles/create loading screen in react js.jpg";
import article1 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article2 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import article5 from "../../public/images/articles/What is Redux with easy explanation.png";
import article6 from "../../public/images/articles/What is higher order component in React.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import SEO from "@/SEO/SEO";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summery, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light dark:text-light">
      <div className="absolute top-1 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="title"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl md:text-xl sm:text-lg xs:text-base font-bold my-2 hover:underline underline-offset-2">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summery}</p>
      <span className="text-primary dark:text-primaryDark font-semibold">
        {time}
      </span>
    </li>
  );
};

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  const handleMouse = (event) => {
    (imageRef.current.style.display = "inline-block"), x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event) => {
    (imageRef.current.style.display = "none"), x.set(0);
    y.set(0);
  };

  return (
    <Link
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>

      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imageRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-2xl flex sm:flex-col items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5 }, ease: "easeInOut" }}
      // viewport={{once: true}}
    >
      <MovingImg
        title={title}
        img={img}
        link={link}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <span className="font-semibold pl-4 text-primary dark:text-primaryDark sm:self-start sm:pl-0 xm:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const articles = () => {
  return (
    <>



      {/* Meta Tag & Web Site Title */}
      <SEO pagename="Articles" />
      {/* Meta Tag & Web Site Title */}




      {/* For The Transition Effect */}
      <TransitionEffect />
      {/* For The Transition Effect */}

      <main className="w-full mb-6 flex flex-col itmes-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className="mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl"
          />

          <div>
            {/* Featured Articles */}
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-16 lg:gap-8 md:gap-x-16 mt-5">
              {/* Featured Articles 1 */}
              <FeaturedArticle
                img={featuredArticle1}
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summery="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
              />

              {/* Featured Articles 2 */}
              <FeaturedArticle
                img={featuredArticle2}
                title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                summery="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
                time="10 min read"
                link="/"
              />
            </ul>

            {/* All Articles */}
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
              All Articles
            </h2>

            <ul>
              {/* Article 1 */}
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                img={article1}
                link="/"
                date="March 22, 2023"
              />

              {/* Article 2 */}
              <Article
                title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                img={article2}
                link="/"
                date="June 01, 2023"
              />

              {/* Article 3 */}
              <Article
                title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                img={article3}
                link="/"
                date="July 05, 2023"
              />

              {/* Article 4 */}
              <Article
                title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                img={article4}
                link="/"
                date="December 31, 2023"
              />

              {/* Article 5 */}
              <Article
                title="Redux Simplified: A Beginner's Guide For Web Developers"
                img={article5}
                link="/"
                date="June 10, 2024"
              />

              {/* Article 6 */}
              <Article
                title="What Is Higher Order Component (Hoc) In React?"
                img={article6}
                link="/"
                date="June 25, 2024"
              />
            </ul>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default articles;
