import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

import devImg from "../assets/dev-ed-wave.png";
import design from "../assets/design.png";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";

import saabith from "../assets/saabith.png";

import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";
import { useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Mohammed Saabith CP
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl ">
              Mohammed Saabith CP
            </h2>
            <h3 className="text-2xl md:text-3xl py-2">
              Developer and designer.{" "}
            </h3>
            <p className="text-md md:text-xl py-5 leading-8 text-gray-800 max-w-lg mx-auto dark:text-white">
              Freelancer providing service for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className="relative  mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96">
            <img src={saabith} alt="" className="" />
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h1 className="text-3xl py-1">Service I offer</h1>
            <p className="text-md py-2 leading-8 text-grey-800">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>consulted for{" "}
              <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-grey-800 ">
              I offer from a wide range of service, including brandm design ,
              programming and teaching.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center  shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img
                src={design}
                alt=""
                className="mx-auto "
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegent designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-grey-800 py-1">PhotoShop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div>
            <div className="text-center dark:bg-white shadow-lg p-10 rounded-xl my-10">
              <img
                src={code}
                alt=""
                className="mx-auto "
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegent designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-grey-800 py-1">PhotoShop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div>
            <div className="text-center dark:bg-white shadow-lg p-10 rounded-xl my-10">
              <img
                src={consulting}
                alt=""
                className="mx-auto "
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegent designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-grey-800 py-1">PhotoShop</p>
              <p className="text-grey-800 py-1">Illustrator</p>
              <p className="text-grey-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-grey-800">
              Since the beginning of my journey as a freelancer developer, I've
              done remote work for
              <span className="text-teal-500"> agencies </span>consulted for{" "}
              <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-grey-800 ">
              I offer from a wide range of service, including brandm design ,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web4}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web5}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web6}
                alt=""
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
