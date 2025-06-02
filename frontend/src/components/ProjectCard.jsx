import React from 'react';
import { fadeIn } from '../animations/gsap.js';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="bg-[#131c31] rounded-xl p-4 sm:p-5 hover:scale-105 transition-transform duration-300 shadow-lg text-white"
            ref={fadeIn}
        >
            {/* Project Image */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                />
            )}

            {/* Title */}
            <h3 className="text-xl font-bold underline mb-2 text-white">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-base text-gray-300 mb-4">
                {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-6 mt-auto">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-400 underline hover:text-blue-300 transition"
                    >
                        Live Demo
                    </a>
                )}
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-gray-300 underline hover:text-white transition"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
