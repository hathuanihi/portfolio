import { useEffect, useState } from "react";
import { styles } from "./styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            
            // Set scrolled state for background
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Handle navbar visibility based on scroll direction
            if (scrollTop > lastScrollY && scrollTop > 100) {
                // Scrolling down & past 100px - hide navbar
                setIsVisible(false);
            } else {
                // Scrolling up - show navbar
                setIsVisible(true);
            }

            setLastScrollY(scrollTop);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-500 ease-in-out ${
            scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        } ${
            isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center">
                    <a 
                        className="cursor-pointer flex items-center gap-0 hover:scale-105 transition-transform duration-300"
                        href="#home" onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}>
                        <img 
                            src={logo} 
                            alt="HaThu Logo" 
                            className="w-12 h-12"
                        />
                        <span className="text-white font-bold text-xl tracking-wider">
                            HATHU
                        </span>
                    </a>
                </div>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile menu toggle */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <div
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    >
                        <div className="flex flex-col justify-between w-6 h-6">
                            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}></span>
                            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </div>
                </div>

                {/* Mobile menu dropdown */}
                <div
                    className={`${
                        !toggle ? "hidden" : "flex"
                    } p-6 bg-gradient-to-b from-gray-900 to-black border border-gray-700 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:hidden backdrop-blur-md`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                                    active === nav.title ? "text-white" : "text-secondary"
                                }`}
                                onClick={() => {
                                    setToggle(!toggle);
                                    setActive(nav.title);
                                }}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;