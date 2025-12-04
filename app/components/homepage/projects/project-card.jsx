// @flow strict
import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="relative rounded-lg border border-gray-200 bg-gray-50 hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md w-full">
      {/* Decorative Header Line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-blue-300"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-blue-300 to-transparent"></div>
      </div>

      {/* Project Title Bar */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative border-b border-blue-100">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
        </div>
        <p className="text-center ml-3 text-blue-600 font-semibold text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      {/* Project Code Block */}
      <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-gray-800 leading-6">
          <div>
            <span className="mr-2 text-blue-600">const</span>
            <span className="mr-2 text-gray-900">project</span>
            <span className="mr-2 text-blue-600">=</span>
            <span className="text-gray-500">{"{"}</span>
          </div>

          {/* Project Name */}
          <div>
            <span className="ml-6 mr-2 text-gray-900">name:</span>
            <span className="text-gray-500">'</span>
            <span className="text-blue-600 font-medium">{project.name}</span>
            <span className="text-gray-500">',</span>
          </div>

          {/* Tools */}
          <div className="ml-6 mr-2">
            <span className="text-gray-900">tools:</span>
            <span className="text-gray-500">[</span>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-blue-500">{`"${tag}"`}</span>
                {i !== project.tools.length - 1 && (
                  <span className="text-gray-500">, </span>
                )}
              </React.Fragment>
            ))}
            <span className="text-gray-500">],</span>
          </div>

          {/* Description */}
          <div className="ml-6 mr-2">
            <span className="text-gray-900">description:</span>
            <span className="text-gray-500"> "</span>
            <span className="text-blue-700">{project.description}</span>
            <span className="text-gray-500">",</span>
          </div>

          <div>
            <span className="text-gray-500">{"};"}</span>
          </div>
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;
