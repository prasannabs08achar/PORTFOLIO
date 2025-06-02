import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import CertificateCard from '../components/CertificateCard';
import TechStackCard from '../components/TeckStackCard';
import css from '../assets/csslogo.png';
import express from '../assets/expressjslogo.png';
import git from '../assets/gitlogo.png';
import html from '../assets/htmlim.png';
import java from '../assets/javalogo.png';
import js from '../assets/javascriptlogo.png';
import mongodb from '../assets/MongoDBlogo.jpg';
import jwtlogo from '../assets/jwtlogo.png';
import node from '../assets/nodejslogo.png';
import react from '../assets/reactlogo.png';
import tl from '../assets/tailwindcss.png';
import py from '../assets/py.png';
import javac from '../assets/java.jpg';
import db from '../assets/RDBMS.jpg';
import algo from '../assets/Algo.jpg';
import adjava from '../assets/AdvanceJava.jpg';
import axios from 'axios';

const certificates = [
    { image: db, alt: 'RDBMS', link: 'https://drive.google.com/file/d/1CQf-c7XmPCXgTP0IWaD34S6nAVmV3okA/view?usp=drive_link' },
    { image: algo, alt: 'Algorithms,Data Collection and ,Starting to code', link: 'https://drive.google.com/file/d/1ZroRfwu60vbxSIKv-3FS4hWCtDoOm9XA/view?usp=drive_link' },
    { image: javac, alt: 'Multithreaded Application in Java', link: 'https://drive.google.com/file/d/1EFLT8oH1eQUcJqvJAnXrpcxpNz9m4YZk/view?usp=drive_link' },
    { image: adjava, alt: 'Advanced Data Structures in Java', link: 'https://drive.google.com/file/d/1sKn31Ca6Kov1xI2h3zsmlW5ZxrrPF8Uf/view?usp=drive_link' },
];

const techStack = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: js },
    { name: 'React', icon: react },
    { name: 'Node.js', icon: node },
    { name: 'Tailwind CSS', icon: tl },
    { name: 'Express', icon: express },
    { name: 'GitHub', icon: git },
    { name: 'Java', icon: java },
    { name: 'MongoDb', icon: mongodb },
    { name: 'JWT', icon: jwtlogo },
    { name: 'Python', icon: py },
];

function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [activeTab, setActiveTab] = useState('Projects');
    const [showAll, setShowAll] = useState(false);
    const [showP, setShowP] = useState(false);

    const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);
    const visibleProjects = showP ? projects : projects.slice(0, 3);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('api/v1/projects/get-projects');
                if (response.data && Array.isArray(response.data.data)) {
                    setProjects(response.data.data);
                } else {
                    setProjects([]);
                }
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="w-full max-w-full  text-white px-4 sm:px-6 py-10 sm:py-12 overflow-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-400 mb-4">
                Portfolio Showcase
            </h1>
            <p className="text-center text-gray-400 max-w-3xl mx-auto text-sm sm:text-base mb-10">
                Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
            </p>

            <div className="flex justify-center items-center mb-12">
                <div className="flex flex-wrap justify-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-gray-600 rounded-2xl p-1 space-x-1 sm:space-x-2 shadow-lg">
                    {['Projects', 'Certificates', 'Tech Stack'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-in-out ${activeTab === tab
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md scale-105'
                                : 'text-gray-400 hover:text-white'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {activeTab === 'Projects' && (
                    <div className="px-2 sm:px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                            {visibleProjects.map((proj, idx) => (
                                <ProjectCard key={proj._id || idx} project={proj} />
                            ))}
                        </div>

                        {projects.length > 3 && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => setShowP(!showP)}
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
                                >
                                    {showP ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'Certificates' && (
                    <div className="px-2 sm:px-4 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                            {visibleCertificates.map((cert, idx) => (
                                <CertificateCard
                                    key={idx}
                                    image={cert.image}
                                    altText={cert.alt}
                                    link={cert.link}
                                />
                            ))}
                        </div>

                        {certificates.length > 3 && (
                            <div className="flex justify-center mt-8">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md transition duration-300"
                                >
                                    {showAll ? 'Show Less' : 'Show More'}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {activeTab === 'Tech Stack' && (
                    <div className="px-2 sm:px-4 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, idx) => (
                            <TechStackCard key={idx} icon={tech.icon} name={tech.name} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
