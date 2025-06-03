import React, { useState } from 'react';
import axios from 'axios'; // ✅ Add this line
import { FaUser, FaEnvelope, FaPaperPlane, FaShareAlt } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { LiaLinkedinIn } from 'react-icons/lia';
import { motion } from 'framer-motion';

const Contact = () => {
    const [messageData, setMessageData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/contact/send-messege`, messageData); // ✅ Ensure route starts with `/`

            alert("✅ " + response.data.message);
            setMessageData({ name: '', email: '', message: '' });
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Something went wrong. Please try again later.";
            alert("❌ " + errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative  text-white px-4 py-10 flex justify-center items-start">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-[#2e084f]/50 to-[#080724]/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl w-full sm:max-w-lg shadow-2xl border border-white/10"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-400">Contact Me</h2>
                    <p className="text-sm sm:text-base text-gray-400 mt-2">Got a question? Send me a message.</p>
                </motion.div>

                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-purple-300">Get in Touch</h3>
                    <motion.div
                        whileHover={{ rotate: 20 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaShareAlt className="text-purple-400 text-lg sm:text-xl cursor-pointer" />
                    </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="relative">
                        <FaUser className="absolute top-3.5 left-4 text-gray-400 text-sm sm:text-base" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={messageData.name}
                            onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                            className="w-full bg-transparent border border-white/20 text-sm sm:text-base text-white py-3 pl-10 pr-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                            required
                        />
                    </div>

                    <div className="relative">
                        <FaEnvelope className="absolute top-3.5 left-4 text-gray-400 text-sm sm:text-base" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={messageData.email}
                            onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                            className="w-full bg-transparent border border-white/20 text-sm sm:text-base text-white py-3 pl-10 pr-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                            required
                        />
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            value={messageData.message}
                            onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                            className="w-full bg-transparent border border-white/20 text-sm sm:text-base text-white py-3 px-4 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 resize-none"
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white text-sm sm:text-base font-semibold py-3 rounded-xl flex items-center justify-center transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                    >
                        <FaPaperPlane className="mr-2 text-base" />
                        {loading ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </form>

                <div className="mt-8 bg-black/30 border border-white/10 rounded-2xl p-5">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full inline-block" />
                        Connect With Me
                    </h4>
                    <div className="space-y-3">
                        <a href="https://www.linkedin.com/in/prasannabs08/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-3 rounded-xl transition text-sm">
                            <LiaLinkedinIn className="text-blue-400 text-xl" />
                            <div>
                                <div className="font-semibold text-white">Let's Connect</div>
                                <div className="text-gray-400 text-xs">on LinkedIn</div>
                            </div>
                        </a>
                        <a href="https://github.com/prasannabs08achar" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-3 rounded-xl transition text-sm">
                            <FiGithub className="text-gray-300 text-xl" />
                            <div>
                                <div className="font-semibold text-white">Github</div>
                                <div className="text-gray-400 text-xs">@PrasannaBS</div>
                            </div>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
