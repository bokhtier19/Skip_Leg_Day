import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { IoMdSearch } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "motion/react";

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between px-8 py-4 text-white">
                {/* -------------Logo-------------- */}
                <div>
                    <h1 className="anton-regular">SKIP LEG DAY</h1>
                </div>

                {/* --------Navigations------------ */}
                <div className="hidden lg:block">
                    <ul className="flex gap-8 oswald">
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">HOME</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">ABOUT US</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">CLASSES</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">SERVICES</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">OUR TEAM</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">PAGES</NavHashLink>
                        </motion.div>
                        <motion.div whileHover={{ y: -10 }}>
                            <NavHashLink to="#home">CONTACT</NavHashLink>
                        </motion.div>
                    </ul>
                </div>

                {/* ----------Search and Social Media------------ */}

                <div className="flex gap-2">
                    <IoMdSearch size={20} />
                    <TiSocialFacebook size={20} />
                    <FaXTwitter size={20} />
                    <FaYoutube size={20} />
                    <IoLogoWhatsapp size={20} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
