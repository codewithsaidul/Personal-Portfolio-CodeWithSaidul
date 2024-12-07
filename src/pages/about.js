import Layout from "@/Layout/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import AboutImage from "../../public/images/profile/aboutProfile.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Exprience from "@/components/Exprience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import SEO from "@/SEO/SEO";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      {/* Meta Tag & Web Site Title */}
      <SEO pagename="About" />
      {/* Meta Tag & Web Site Title */}

      {/* For The Transition Effect */}
      <TransitionEffect />
      {/* For The Transition Effect */}

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="!text-7xl mb-16 lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />

          <div className="w-full flex md:flex-col flex-row gap-16 sm:gap-8">
            {/* About Me */}
            <div className="md:w-full w-[65%] flex-1 flex flex-col items-start justify-start md:order-2">
              <h2 className="mt-5 text-lg font-bolt uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>

              <p className="font-medium">
                HI, I&apos;m Saidul Islam Rana, a front-end developer skilled in
                Next.js, Material UI, Tailwind CSS, React.js, and Framer Motion.
                I combine creativity and functionality to create visually
                appealing, interactive digital experiences. Delivering smooth,
                full-stack solutions is made possible by my backend expertise in
                Node.js, Express.js, and MongoDB.
              </p>
              <p className="my-4 font-medium">
                My areas of expertise are creating dynamic portfolios,
                responsive web apps, and cutting-edge e-commerce platforms. I
                implement authentication and secure backend functionalities
                using JWT and Firebase.
              </p>
              <p className="font-medium">
                In order to provide significant, user-focused digital solutions,
                I founded Saku Artisans, Saku Real Estates, and Tronix
                Electronics Commerce in addition to developing the healthcare
                management platform CarePulse. My objective is to make the web
                more aesthetically pleasing, user-friendly, and accessible to
                everyone.
              </p>
            </div>

            {/* About Image */}
            <div className="md:w-full w-[35%] relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-3  md:order-1 ">
              <div className="absolute top-1 -right-3 -z-10 w-[102%] h-[105%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={AboutImage}
                alt="about image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Exprience Satisfied Client */}
            {/* <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Client
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumber value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-5xl sm:text-4xl xs:text-3xl">
                  <AnimatedNumber value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of exprience
                </h2>
              </div>
            </div> */}
          </div>

          {/* Skill */}
          <Skills />

          {/* Exprience */}
          {/* <Exprience /> */}

          {/* Education */}
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
