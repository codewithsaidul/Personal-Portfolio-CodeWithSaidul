import Layout from "@/Layout/Layout";
import Image from "next/image";
import ProfilePic from "../../public/images/profile/profile.png";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
import SEO from "@/SEO/SEO";

export default function Home() {
  return (
    <>
      {/* Meta Tag & Web Site Title */}
      <SEO pagename="Home" />
      {/* Meta Tag & Web Site Title */}

      {/* For The Transition Effect */}
      <TransitionEffect />
      {/* For The Transition Effect */}

      <main className="flex items-center text-dark w-full min-h-[calc(100vh-195px)] dark:text-light">
        {/* Home Page */}
        <Layout className="pt-0 md:pt-16 sm:pt-8 md:mt-12">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={ProfilePic}
                alt="profile image"
                className="w-full h-auto  md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 lg:w-full flex flex-col">
              <span className="text-lg font-semibold">Front-End Developer</span>
              <AnimatedText
                text="Saidul Islam Rana"
                className="!text-6xl !text-left xl:!text-5xl  lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-5 text-base font-medium md:text-sm sm:text-xs">
                Modern design meets front-end whiz! I turn concepts into
                beautiful, engaging online experiences. Discover projects and
                insights created with proficiency in React.js and
                state-of-the-art web technologies in my portfolio, where
                functionality and creativity coexist.
              </p>

              <div className="flex items-center self-start mt-2 gap-3 lg:self-center">
                <Link
                  href="/saidulIslamRanaResume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 md:p-2 md:px-4 md:text-base rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-slid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href="mailto:codewithsaidul@gmail.com"
                  target="_blank"
                  className="text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-20 bottom-52 w-24 h-24 inline-block md:hidden">
          <Image src={LightBulb} alt="codewithsaidul" />
        </div>
      </main>
    </>
  );
}
