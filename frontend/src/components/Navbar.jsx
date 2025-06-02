import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
    ];

    // activeSection is exactly location.pathname
    const activeSection = location.pathname;

    const handleNavClick = (path) => {
        setMenuOpen(false);
        navigate(path);

        // Scroll after navigation updates URL & DOM
        setTimeout(() => {
            const sectionId = path === "/" ? "home" : path.slice(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 50);
    };

    return (
        <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white font-medium px-6 py-4 md:px-10 md:py-6 fixed top-0 w-full z-50">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold text-purple-400">Prasanna B S</div>
                <button
                    className="text-white md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-8 text-sm">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <button
                                onClick={() => handleNavClick(item.href)}
                                className={`transition duration-300 ${activeSection === item.href
                                        ? "text-white font-semibold border-b-2 border-purple-400 pb-1"
                                        : "text-gray-300 hover:text-purple-400"
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <ul className="flex flex-col mt-4 md:hidden space-y-4 text-sm">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <button
                                onClick={() => handleNavClick(item.href)}
                                className={`block transition duration-300 ${activeSection === item.href
                                        ? "text-white font-semibold border-b border-purple-400 pb-1"
                                        : "text-gray-300 hover:text-purple-400"
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
