// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-8 lg:py-16 bg-white text-gray-900">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10 opacity-20"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 max-w-7xl w-full px-6">
        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-[2.8rem] font-extrabold leading-snug text-gray-900">
            Hi There, 👋 <br />
            I’m <span className="text-blue-600">{personalData.name}</span>, a{" "}
            <span className="text-slate-600">{personalData.designation}</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 font-medium">
            From{" "}
            <span className="text-blue-600 font-semibold">Architecture</span> to{" "}
            <span className="text-blue-600 font-semibold">Deployment</span> — I
            build it all.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-4">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-gray-700 hover:text-blue-600 transition-all hover:scale-125 duration-300"
            >
              <BsGithub size={32} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-gray-700 hover:text-blue-600 transition-all hover:scale-125 duration-300"
            >
              <BsLinkedin size={32} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="text-gray-700 hover:text-blue-600 transition-all hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="#contact"
              className="group bg-gradient-to-r from-blue-600 to-blue-400 p-[2px] rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
            >
              <button className="px-4 md:px-8 py-3 bg-white rounded-full text-sm md:text-base font-semibold text-gray-900 flex items-center gap-2 group-hover:gap-4 transition-all duration-300 border border-blue-600 hover:text-blue-700">
                <span>Contact Me</span>
                <RiContactsFill size={18} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-2 rounded-full bg-blue-600 px-4 md:px-8 py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <span>Get Resume</span>
              <MdDownload size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - Code Style Card */}
        <div className="order-1 lg:order-2 border border-gray-200 bg-gray-50 rounded-lg shadow-md">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-blue-400"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-blue-400 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-blue-200 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base leading-6">
              <div>
                <span className="mr-2 text-blue-600">const</span>
                <span className="mr-2 text-gray-800">coder</span>
                <span className="mr-2 text-blue-600">=</span>
                <span className="text-gray-500">{"{"}</span>
              </div>

              <div>
                <span className="ml-6 mr-2 text-gray-800">name:</span>
                <span className="text-gray-500">'</span>
                <span className="text-blue-600 font-medium">
                  Jayanth Kodur Kumar
                </span>
                <span className="text-gray-500">',</span>
              </div>

              <div className="ml-6">
                <span className="mr-2 text-gray-800">skills:</span>
                <span className="text-gray-500">{`['`}</span>
                <span className="text-blue-600">Python</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">FastAPI</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">AWS</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">PostgreSQL</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">MySQL</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">MongoDB</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">Supabase</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">Docker</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">React.js</span>
                <span className="text-gray-500">{"', '"}</span>
                <span className="text-blue-600">Next.js</span>
                <span className="text-gray-500">{"']"}</span>
              </div>

              <div>
                <span className="ml-6 mr-2 text-gray-800">hardWorker:</span>
                <span className="text-green-600">true</span>
                <span className="text-gray-500">,</span>
              </div>

              <div>
                <span className="ml-6 mr-2 text-gray-800">quickLearner:</span>
                <span className="text-green-600">true</span>
                <span className="text-gray-500">,</span>
              </div>

              <div>
                <span className="ml-6 mr-2 text-gray-800">problemSolver:</span>
                <span className="text-green-600">true</span>
                <span className="text-gray-500">,</span>
              </div>

              <div>
                <span className="ml-6 mr-2 text-gray-800">hireable:</span>
                <span className="text-purple-600">function</span>
                <span className="text-gray-500">{"() {"}</span>
              </div>

              <div>
                <span className="ml-12 text-blue-600">return</span>{" "}
                <span className="text-gray-500">(</span>
              </div>

              <div>
                <span className="ml-16 text-gray-700">this.hardWorker</span>{" "}
                <span className="text-blue-600">&amp;&amp;</span>
              </div>

              <div>
                <span className="ml-16 text-gray-700">this.problemSolver</span>{" "}
                <span className="text-blue-600">&amp;&amp;</span>
              </div>

              <div>
                <span className="ml-16 text-gray-700">this.skills.length</span>{" "}
                <span className="text-blue-600">&gt;=</span>{" "}
                <span className="text-green-600">5</span>
              </div>

              <div>
                <span className="ml-12 text-gray-500">);</span>
              </div>

              <div>
                <span className="ml-6 text-gray-500">{"}"}</span>
              </div>

              <div>
                <span className="text-gray-500">{"}"}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
