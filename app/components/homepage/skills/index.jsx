// @flow strict
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";

function Skills() {
  return (
    <section
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-gray-200 bg-white text-gray-900"
    >
      {/* Soft background accent */}
      <div className="w-[120px] h-[120px] bg-blue-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-30"></div>

      {/* Gradient Divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-blue-600"></span>
          <span className="bg-blue-600 w-fit text-white p-2 px-5 text-xl rounded-md shadow-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-blue-600"></span>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="w-full mt-10 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, id) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-105 p-5 cursor-pointer shadow-sm"
            >
              <div className="h-10 w-10 mb-3 flex items-center justify-center">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </div>
              <p className="text-gray-800 text-sm sm:text-base font-medium text-center">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
