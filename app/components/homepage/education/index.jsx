// @flow strict
import Image from "next/image";

function Education() {
  const educations = [
    {
      id: 1,
      degree: "MS in Computer Science",
      institution: "Indiana University Bloomington",
      duration: "Aug 2022 – May 2024",
      logo: "/logos/iu.jpeg", 
    },
    {
      id: 2,
      degree: "B.Tech in Computer Science Engineering",
      institution: "BSAC Institute of Science & Technology",
      duration: "Aug 2016 – Aug 2020",
      logo: "/logos/bsac.jpeg",
    },
  ];

  return (
    <section
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-gray-200 bg-white text-gray-900"
    >
      {/* Background Accent */}
      <Image
        src="/section.svg"
        alt="Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-20"
      />

      {/* Decorative Divider */}
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
            Education
          </span>
          <span className="w-24 h-[2px] bg-blue-600"></span>
        </div>
      </div>

      {/* Education Cards */}
      <div className="py-8 max-w-4xl mx-auto flex flex-col gap-6">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-x-4">
                {/* College Logo */}
                {edu.logo && (
                  <Image
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    width={40}
                    height={40}
                    className="rounded-md border border-gray-200 object-cover"
                  />
                )}

                <div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-900">
                    {edu.degree}
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <p className="text-sm text-blue-600 font-medium">
                {edu.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
