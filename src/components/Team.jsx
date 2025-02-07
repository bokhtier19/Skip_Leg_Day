import React, { useContext } from "react";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import trainer4 from "../assets/trainer4.jpg";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";
import { AnimationContext } from "../context/AnimationContext";

const Team = () => {
    const { childVariants, containerVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center w-3/4 my-12 text-white">
                    <div className="flex items-center justify-between my-8">
                        <div>
                            <h1>OUR TEAM</h1>
                            <h2 className="uppercase">Train with experts</h2>
                        </div>
                        <button className="px-6 py-2 tracking-wider uppercase border-2 hover:bg-GRed border-GRed h-fit">Appointment</button>
                    </div>
                    <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <motion.div variants={childVariants} className="flex items-end h-[50vh] md:h-[70vh]" style={{ backgroundImage: `url(${trainer1})`, backgroundSize: "cover" }}>
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
                        <motion.div variants={childVariants} className="flex items-end  h-[50vh] md:h-[70vh]" style={{ backgroundImage: `url(${trainer2})`, backgroundSize: "cover" }}>
                            <div className="flex items-end w-full bg-gray-500 h-1/3 clip-path-classes">
                                <div className="flex justify-around w-full h-1/2">
                                    <div className="flex flex-col">
                                        <p>STRENGTH</p>
                                        <h2>WEIGHTLIFTING</h2>
                                    </div>
                                    <FaChevronRight size={40} className="px-2 py-2 bg-black" color="green" />
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={childVariants} className="flex items-end  h-[50vh] md:h-[70vh]" style={{ backgroundImage: `url(${trainer3})`, backgroundSize: "cover" }}>
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
        </>
    );
};

export default Team;
