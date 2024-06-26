import Layout from "@/Layout/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import featuredProject1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import featuredProject2 from "../../public/images/projects/portfolio-cover-image.jpg";
import project1 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import project2 from "../../public/images/projects/fashion-studio-website.jpg";
import project3 from "../../public/images/projects/agency-website-cover-image.jpg";
import project4 from "../../public/images/projects/devdreaming.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import SEO from "@/SEO/SEO";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, githubLink }) => {
  return (
    <article className="w-full py-8 px-6 flex lg:flex-col items-center justify-between rounded-3xl xs:rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark dark:text-light shadow-2xl relative rounded-br-2xl xs:rounded-br-3xl xs:py-4 xs:px-4">
      <div className="absolute top-1 -right-3 xs:-right-2 sm:h-[102%] xs:w-full  -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 lg:w-full cursor-pointer overflow-hidden rounded-lg"
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

      <div className="w-1/2 lg:w-full flex flex-col items-start justify-between pl-6 lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl sm:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl md:text-2xl sm:text-sm font-bold">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>

        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-6 sm:px-4 text-lg sm:text-base font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4 relative dark:border-light dark:bg-dark">
      <div className="absolute top-1 -right-3  -z-10 w-[101%] h-[103%] md:-right-2 md:h-[102%] md:w-[101%]  rounded-[2rem] xs:rounded-[1.5rem] bg-dark dark:bg-light rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
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

      <div className="w-full flex flex-col items-start justify-between mt-4 dark:text-light">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl md:text-xl sm:text-base xs:text-sm">
            {title}
          </h2>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={githubLink}
            target="_blank"
            className="w-10 md:w-6 order-2"
          >
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="text-lg md:text-base font-semibold order-1 underline"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>



      {/* Meta Tag & Web Site Title */}
      <SEO pagename="Projects" />
      {/* Meta Tag & Web Site Title */}




      {/* For The Transition Effect */}
      <TransitionEffect />
      {/* For The Transition Effect */}

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="!text-7xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl"
          />

          <div className="grid grid-cols-12 gap-24 mt-16 xl:gap-x-16 lg:gap-8 md:gap-y-24 sm:gap-x-0">
            {/* {Featured Project} */}
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summery="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                type="Featured Project"
                link="/"
                img={featuredProject1}
                githubLink="/"
              />
            </div>

            {/* Project 1 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NFT collection Website"
                type="Website Template"
                link="/"
                img={project1}
                githubLink="/"
              />
            </div>

            {/* Project 2 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Fashion Studio Website"
                type="Website"
                link="/"
                img={project2}
                githubLink="/"
              />
            </div>

            {/* {Featured Project} */}
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio"
                title="React Portfolio Website"
                summery="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                link="/"
                img={featuredProject2}
                githubLink="/"
              />
            </div>

            {/* Project 3 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Agency Website Template"
                type="Website Template"
                link="/"
                img={project3}
                githubLink="/"
              />
            </div>

            {/* Project 4 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="DevDreaming"
                type="Blog Template"
                link="/"
                img={project4}
                githubLink="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
