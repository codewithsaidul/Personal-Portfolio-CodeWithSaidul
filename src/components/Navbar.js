import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icon";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";





const MobileCustomLink = ({ href, title, className = "", toggle }) => {

  const router = useRouter();

  const handleClick = () => {
      toggle()
      router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group my-2`} onClick={handleClick}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath == href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

// Desktop 
const DesktopCustomLink = ({ href, title, className = "" }) => {

  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath == href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {


  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 lg:px-16 md:px-12 sm:px-8 xs:px-4 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">


      {/* Humburger Menu */}
      <button onClick={handleClick} className="flex-col items-center justify-center hidden lg:flex">
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 rotate-0 ${isOpen && 'rotate-45 translate-y-1 duration-300'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5  ${isOpen && 'opacity-0'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1 duration-300' : ''}`}></span>
      </button>



      {/* Mobile Menu */}
     {
      isOpen &&
        (    
          <motion.div 
          initial={{scale: 0, opacity: 0, x:"-50%", y:"-50%"}}
          animate={{scale: 1, opacity: 1, transition: {duration: 0.5}}}
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/80 dark:bg-light/80 rounded-lg backdrop-blur-md py-32 text-light dark:text-dark">
                {/* Navigation Menu */}
                <nav className="flex flex-col items-center justify-center">
                  <MobileCustomLink href="/" title="Home" toggle={handleClick} />
                  <MobileCustomLink href="/about" title="About" className="" toggle={handleClick} />
                  <MobileCustomLink href="/projects" title="Projects" toggle={handleClick} />
                  <MobileCustomLink href="/articles" title="Articles" className="" toggle={handleClick} />
                </nav>
          
                {/* Social Medial Links  */}
                <nav className="flex items-center justify-center flex-wrap gap-5 mt-3 sm:gap-1">
          
                  <motion.a href="https://facebook.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
                    <FacebookIcon />
                  </motion.a>
          
                  <motion.a href="https://instagram.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
                    <InstagramIcon />
                  </motion.a>
          
                  <motion.a href="https://twitter.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
                    <TwitterIcon />
                  </motion.a>
          
                  <motion.a href="https://linkedin.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
                    <LinkedInIcon />
                  </motion.a>
          
                  <motion.a href="https://github.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6"> 
                    <GithubIcon />
                  </motion.a>
          
                  <button 
                  className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                  onClick={() => setMode(mode === "light" ? 'dark' : 'light')}>
                      {
                        mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                      }
                  </button>
          
          
                </nav>
          </motion.div>
        )
     }

      {/* Desktop Menu */}
     <div className="w-full flex items-center justify-between lg:hidden">
        {/* Navigation Menu */}
        <nav>
          <DesktopCustomLink href="/" title="Home" />
          <DesktopCustomLink href="/about" title="About" className="mx-4" />
          <DesktopCustomLink href="/projects" title="Projects" />
          <DesktopCustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
  
        {/* Social Medial Links  */}
        <nav className="flex items-center justify-center flex-wrap gap-5">
  
          <motion.a href="https://facebook.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
            <FacebookIcon />
          </motion.a>
  
          <motion.a href="https://instagram.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
            <InstagramIcon />
          </motion.a>
  
          <motion.a href="https://twitter.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
            <TwitterIcon />
          </motion.a>
  
          <motion.a href="https://linkedin.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6">
            <LinkedInIcon />
          </motion.a>
  
          <motion.a href="https://github.com" target="_blank" whileHover={{y: -2}} whileTap={{scale: 0.9}} className="w-6"> 
            <GithubIcon />
          </motion.a>
  
          <button 
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          onClick={() => setMode(mode === "light" ? 'dark' : 'light')}>
              {
                mode === 'dark' ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
              }
          </button>
  
  
        </nav>
     </div>

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        {/* Logo */}
        <Logo />
        {/* Logo */}
      </div>
    </header>
  );
};

export default Navbar;
