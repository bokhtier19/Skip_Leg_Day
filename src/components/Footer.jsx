import React from "react";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center w-full">
                <div className="flex flex-col justify-between gap-4 my-8 text-white md:px-12 md:flex-row bg-GBlack">
                    {/* -----description -------- */}
                    <div className="flex flex-col flex-1 gap-4 px-8">
                        <h1 className="anton-regular">SKIP LEG DAY</h1>
                        <p className="w-3/4 text-pretty">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.
                        </p>
                        <div className="flex gap-2">
                            <TiSocialFacebook size={20} />
                            <FaXTwitter size={20} />
                            <FaYoutube size={20} />
                            <IoLogoWhatsapp size={20} />
                        </div>
                    </div>

                    <div className="flex flex-1">
                        {/* --------useful Links---------- */}

                        <div className="flex-1 px-8">
                            <ul className="flex flex-col gap-4">
                                <h1>Useful Links</h1>
                                <Link>About</Link>
                                <Link>Blog</Link>
                                <Link>classes</Link>
                                <Link>Contact</Link>
                            </ul>
                        </div>

                        {/* --------Support -------------- */}
                        <div className="flex-1 px-8">
                            <ul className="flex flex-col gap-4">
                                <h1>Support</h1>
                                <Link>Login</Link>
                                <Link>My Account</Link>
                                <Link>Subscribe</Link>
                                <Link>Contact</Link>
                            </ul>
                        </div>
                    </div>
                    {/* ---------------Tips and Guides--------------- */}
                    <div className="flex-1 px-8">
                        <h1>Tips and Guides</h1>
                        <div className="">
                            <h1 className="text-2xl">Physical fitness helps prevent depression anxiety</h1>
                            <div className="flex gap-8 text-sm">
                                <p>3 Min Read </p>
                                <p>48 Comments</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-2xl">How long should you excercise daily?</h1>
                            <div className="flex gap-8 text-sm">
                                <p>7 Min Read </p>
                                <p>93 Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <hr className="w-3/4" />
                </div>

                <div className="flex justify-center py-4 my-4 text-sm">
                    <p className="tracking-wider text-white">
                        Copyright ©2024 All rights reserved | This template is made with ❤️ by <span className="text-GRed">Bokhtier</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
