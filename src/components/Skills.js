import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light md:bg-transparent md:dark:bg-transparent md:text-dark md:dark:text-light md:font-bold"
      whileHover={{ scale: 1.2 }}
      initial={{x:0, y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
    >
      <h3 className="text-xl">{name}</h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="text-8xl font-bold mt-64 w-full text-center md:text-6xl md:mt-32 sm:text-4xl">Skills</h2>

      <div
        className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] relative flex items-center justify-center rounded-full bg-circularLight lg:bg-circularLightLg md:bg-circularLightMd sm:bg-circularLightSm dark:bg-circularDark lg:dark:bg-circularDarkLg md:dark:bg-circularDarkMd sm:dark:bg-circularDarkSm"
        whileHover={{ scale: 1.5 }}
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 md:p-4 sm:p-2 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light"
          whileHover={{ scale: 1.2 }}
          transition={{duration: 0.9}}
        >
          <h3>Web</h3>
        </motion.div>


        <Skill name="HTML" x="10vw" y="-10vw" />
        <Skill name="CSS" x="-15vw" y="-2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="Bootstrap" x="0vw" y="-20vw" />
        <Skill name="Tailwind" x="0vw" y="13vw" />
        <Skill name="React JS" x="-25vw" y="10vw" />
        <Skill name="Next JS" x="32vw" y="18vw" />
        <Skill name="Figma" x="-30vw" y="22vw" />
        <Skill name="Firebase" x="10vw" y="25vw" />
        <Skill name="Express JS" x="-18vw" y="-30vw" />
        <Skill name="MongoDb" x="25vw" y="-25vw" />
        <Skill name="Node JS" x="-28vw" y="-15vw" />
      </div>
    </>
  );
};

export default Skills;
