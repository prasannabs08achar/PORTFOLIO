import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section
            id="about"
            className=" px-4 md:px-20 py-20  text-white text-center"
        >
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-extrabold text-purple-400 mb-6"
            >
                About Me
            </motion.h2>

            {/* Intro */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
                Hello, I'm <span className="font-bold text-white">Prasanna B S</span>, a full-stack web developer passionate about building smart and scalable web applications. I have completed comprehensive full-stack development training and continuously explore new technologies to enhance my skills. With a strong focus on continuous learning, I’m dedicated to delivering quality solutions and growing my expertise in the industry.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-10 flex justify-center gap-4 flex-wrap"
            >
                <a
                    href="https://drive.google.com/uc?export=download&id=18W4FMFqYyUUiCMXA06z2TrmlV3fsINiw"
                    download
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
                >
                    <FaDownload /> Download CV
                </a>
                <Link
                    to="/portfolio"
                    className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 text-purple-400 hover:text-white transition"
                >
                    <FaCode /> View Projects
                </Link>
            </motion.div>

            {/* Education Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-14 max-w-3xl mx-auto text-left bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg"
            >
                <h3 className="text-2xl font-bold text-purple-400 mb-6 border-b border-gray-700 pb-2">
                    Education
                </h3>
                <div className="mb-4">
                    <p className="text-white font-semibold">Bachelor of Engineering (B.E)</p>
                    <p className="text-gray-300">Information Science and Engineering</p>
                    <p className="text-gray-400 text-sm">The National Institute of Engineering, Mysuru</p>
                </div>
                <div className="mb-4">
                    <p className="text-white font-semibold">Current Semester:</p>
                    <p className="text-gray-300">6th Semester</p>
                    <p className="text-gray-400 text-sm">Expected Graduation: 2026</p>
                </div>
                <div>
                    <p className="text-white font-semibold">CGPA (Till 5th Sem):</p>
                    <p className="text-gray-300">9.00 / 10</p>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
