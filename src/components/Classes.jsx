import React, { useContext } from "react";
import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";
import { FaChevronRight } from "react-icons/fa";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "motion/react";

const Classes = () => {
    const { containerVariants, childVariants, rightVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="flex justify-center my-20 text-white">
                <div className="flex flex-col items-center justify-center w-3/4 gap-8">
                    <h1>OUR CLASSES</h1>
                    <h2>WHAT DO WE OFFER</h2>
                    <div className="w-full">
                        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <motion.div variants={rightVariants} className="flex items-end h-80 " style={{ backgroundImage: `url(${class1})`, backgroundSize: "cover" }}>
                                <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes ">
                                    <div className="flex justify-around w-full h-1/2">
                                        <div className="flex flex-col">
                                            <p>STRENGTH</p>
                                            <h2>WEIGHTLIFTING</h2>
                                        </div>
                                        <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={rightVariants} className="flex items-end w-auto h-80" style={{ backgroundImage: `url(${class1})`, backgroundSize: "cover" }}>
                                <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes ">
                                    <div className="flex justify-around w-full h-1/2">
                                        <div className="flex flex-col">
                                            <p>STRENGTH</p>
                                            <h2>WEIGHTLIFTING</h2>
                                        </div>
                                        <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={rightVariants} className="flex items-end w-auto h-80" style={{ backgroundImage: `url(${class1})`, backgroundSize: "cover" }}>
                                <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes ">
                                    <div className="flex justify-around w-full h-1/2">
                                        <div className="flex flex-col">
                                            <p>STRENGTH</p>
                                            <h2>WEIGHTLIFTING</h2>
                                        </div>
                                        <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="w-full">
                        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
                            <motion.div variants={rightVariants} className="flex items-end h-80" style={{ backgroundImage: `url(${class1})`, backgroundSize: "cover" }}>
                                <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes ">
                                    <div className="flex justify-around w-full h-1/2">
                                        <div className="flex flex-col">
                                            <p>STRENGTH</p>
                                            <h2>WEIGHTLIFTING</h2>
                                        </div>
                                        <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={rightVariants} className="flex items-end w-auto h-80" style={{ backgroundImage: `url(${class1})`, backgroundSize: "cover" }}>
                                <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes ">
                                    <div className="flex justify-around w-full h-1/2">
                                        <div className="flex flex-col">
                                            <p>STRENGTH</p>
                                            <h2>WEIGHTLIFTING</h2>
                                        </div>
                                        <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Classes;
