// @flow strict
import Image from "next/image";

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Development Engineer",
      company: "Olei Labs",
      logo: "/logos/oleilabs.jpeg",
      duration: "July 2024 – Present",
      description: `
At Olei Labs, I lead backend development for a full-featured healthcare SaaS platform built with Python (FastAPI), PostgreSQL, and AWS. I architected and deployed a scalable REST API system containerized with Docker and managed through AWS Elastic Beanstalk and ECR. 

My work focused on improving performance and cost efficiency — including optimizing AWS infrastructure to achieve a 40% monthly cost reduction by migrating from ECS to Elastic Beanstalk and fine-tuning RDS storage configurations. I also established automated test-driven workflows using pytest and GitHub Actions CI/CD pipelines, reducing rollback incidents and improving release reliability. 

In addition to backend engineering, I mentor a team of four UI interns, guiding them through weekly sprints and helping ensure seamless integration between frontend and backend systems.
      `,
    },
    {
      id: 2,
      title: "Software Development Engineer",
      logo: "/logos/vugha_technlogies.jpeg",
      company: "Vugha Technological Solutions",
      duration: "July 2021 – Jan 2022",
      description: `
At Vugha Technological Solutions, I developed a rental management platform using Next.js, Material UI, and Vercel — a project that generated over INR 100,000 in revenue. I contributed to designing and building responsive frontend interfaces, integrating Firebase for real-time data handling, which significantly reduced backend infrastructure costs. 

I also created over 20 UI screens in Figma, collaborating closely with stakeholders to refine user experience and streamline usability.
      `,
    },
    {
      id: 3,
      title: "Market Research Analyst",
      logo: "/logos/kaartech.png",
      company: "Kaar Technologies",
      duration: "Sep 2020 – Feb 2021",
      description: `
At Kaar Technologies, I worked as a Market Research Analyst supporting the sales and marketing divisions. My responsibilities included cleaning and analyzing datasets containing more than 10,000 leads to uncover actionable insights that improved campaign performance. 

I also built dynamic campaign landing pages using LeadSquared, HTML, and CSS for regional personalization. Through close collaboration with the marketing team, I helped improve user experience and boosted CTA conversion rates by 30%.
      `,
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-gray-200 bg-white text-gray-900"
    >
      <Image
        src="/section.svg"
        alt="Background section divider"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-20"
      />

      {/* Section Header */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-blue-600"></span>
          <span className="bg-blue-600 text-white w-fit p-2 px-5 text-xl rounded-md shadow-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-blue-600"></span>
        </div>
      </div>

      {/* Content */}
      <div className="py-8 max-w-6xl mx-auto grid grid-cols-1 gap-10">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="text-blue-600">
                  {exp.logo && (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={36}
                      height={36}
                      className="rounded-md border border-gray-200"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                {exp.duration}
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line">
              {exp.description.trim()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
