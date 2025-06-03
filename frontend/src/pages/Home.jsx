import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaDownload, FaCode } from "react-icons/fa";
import {
    SiReact,
    SiJavascript,
    SiNodedotjs,
    
    SiMongodb
} from "react-icons/si";
import gsap from "gsap";
import homepageImg from "../assets/homepage.png"; // Ensure this path is correct
import { Link } from "react-router-dom";
const Home = () => {
    const badgeRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            badgeRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1.5, repeat: -1, yoyo: true }
        );
    }, []);

    return (
        <div id="home" className="flex items-start pt-10 pl-14 justify-between px-12  text-white mb-10">
            {/* Left Section */}
            <div className="flex flex-col gap-6 max-w-2xl">
                <div
                    ref={badgeRef}
                    className="inline-flex items-center px-4 py-2 bg-purple-700 text-sm rounded-full w-fit shadow-lg"
                >
                    🚀 Ready to Innovate
                </div>

                <h1 className="text-5xl font-bold leading-tight">
                    Full Stack <br />
                    <span className="text-purple-400">Developer</span>
                </h1>

                <h2 className="text-xl font-light">Information Science & Engineering Student</h2>

                <p className="text-md text-gray-300">
                    {/* Enhancing digital experiences that are smooth, scalable, and made to impress. */}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-2">
                    <span className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                        <SiReact /> React
                    </span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                        <SiJavascript /> Javascript
                    </span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                        <SiNodedotjs /> Node.js
                    </span>
                    <span className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
                        <SiMongodb /> MongoDB
                    </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <Link
                        to="/portfolio"
                        className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 text-purple-400 hover:text-white transition"
                    >
                        Projects
                    </Link>
                    {/* <Link
                        to="/contact"
                        className="border border-purple-500 hover:bg-purple-600 px-6 py-3 rounded-lg flex items-center gap-2 text-purple-400 hover:text-white transition"
                    >
                        Contact
                    </Link> */}
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6 text-2xl">
                    <a href="https://github.com/prasannabs08achar"
                        target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/prasannabs08/" 
                        target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
                        <FaLinkedin />
                    </a>
                   
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-[1000px]">
                <img
                    src={homepageImg}
                    alt="Hero"
                    className="w-full h-auto object-contain animate-fadeIn"
                />
            </div>
        </div>
    );
};

export default Home;
