// AboutSection.tsx
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  // Split description into multiple paragraphs by ". " for cleaner display
  const paragraphs = personalData.description.split(". ").filter(Boolean);

  return (
    <div id="about" className="my-12 lg:my-16 relative bg-white text-gray-900">
      {/* right-side label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-blue-600 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md shadow-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-blue-600"></span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* text */}
        <div className="order-2 lg:order-1">
          <p className="font-semibold mb-4 text-blue-600 text-xl uppercase">
            Who I am?
          </p>

          <div className="text-gray-700 text-base lg:text-lg leading-relaxed space-y-4">
            {paragraphs.map((para, index) => (
              <p key={index}>{para.trim()}.</p>
            ))}
          </div>
        </div> 

        {/* image */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Profile photo"
            className="rounded-lg border border-gray-200 shadow-lg transition-transform duration-700 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
