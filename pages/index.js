import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill, BsSun,BsArrowDown } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio - Mohamed Laaguili</title>
        <meta name="description" content="Mohamed Laaguili's professional portfolio showcasing web development and design expertise." />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="bg-white px-8 dark:bg-gray-900 md:px-16 lg:px-32">
        <section className="min-h-screen">
          <nav className="py-6 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-2xl tracking-wider">Mohamed Laaguili</h1>
            <ul className="flex items-center">
              <li className={"mx-10"}>
                <a
                  className="ml-8 px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all flex font-bold text-2xl"
                  href="./IT-CV.pdf"
                >
                <BsArrowDown /> Resume
                </a>
              </li>
              <li>
                <button
                  aria-label="Toggle Dark Mode"
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-2xl cursor-pointer"
                >
                  {darkMode ? <BsSun /> : <BsFillMoonStarsFill />}
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl md:text-6xl py-2 text-teal-600 font-bold dark:text-teal-400">
              Mohamed Laaguili
            </h2>
            <h3 className="text-2xl md:text-3xl py-2 dark:text-white">Web Developer</h3>
            <p className="text-md md:text-lg py-4 text-gray-800 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
              Providing top-tier programming and design solutions to bring your ideas to life.
            </p>
            <div className="flex justify-center gap-6 text-5xl py-4 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin className="hover:text-cyan-500 cursor-pointer transition-colors" />
              <AiFillGithub className="hover:text-cyan-500 cursor-pointer transition-colors" />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden shadow-lg md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="Profile Image" />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-semibold">Services I Offer</h3>
            <p className="text-md md:text-lg py-2 text-gray-800 dark:text-gray-300 leading-relaxed">
              Since the beginning of my journey as a designer and developer, Ive collaborated with 
              <span className="text-teal-500"> agencies </span> and 
              <span className="text-teal-500"> startups</span>, creating digital products that empower both businesses and consumers.
            </p>
            <p className="text-md md:text-lg py-2 text-gray-800 dark:text-gray-300 leading-relaxed">
              My services range from brand design, programming, and consulting, providing quality solutions for diverse needs.
            </p>
          </div>
          <div className="lg:flex gap-10">
            {[{ src: design, title: "Beautiful Designs" }, { src: code, title: "Code your dream project" }, { src: consulting, title: "Consulting" }]
              .map(({ src, title }, index) => (
                <div key={index} className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-800 flex-1 transition-transform transform hover:scale-105">
                  <Image src={src} width={100} height={100} alt={`${title} icon`} />
                  <h3 className="text-lg font-semibold pt-8 pb-2">{title}</h3>
                  <p className="py-2 text-gray-700 dark:text-gray-300">
                    Delivering {title.toLowerCase()} tailored to your needs and backed by years of expertise.
                  </p>
                  <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                  {["Photoshop", "Illustrator", "Figma", "Indesign"].map((tool, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300 py-1">{tool}</p>
                  ))}
                </div>
              ))}
          </div>
        </section>

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white font-semibold">Portfolio</h3>
            <p className="text-md md:text-lg py-2 text-gray-800 dark:text-gray-300 leading-relaxed">
              Discover the projects Ive worked on, spanning various industries and helping clients achieve impactful results.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {[web1, web2, web3, web4, web5, web6].map((web, index) => (
              <div key={index} className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover shadow-lg transform hover:scale-105 transition-transform"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web}
                  alt={`Project ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
