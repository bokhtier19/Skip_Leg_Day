import React, { useContext } from "react";
import trainer1 from "../assets/trainer1.jpg";
import { LiaStarSolid } from "react-icons/lia";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";
import { AnimationContext } from "./../context/AnimationContext";

const Review = () => {
    const { rightVariants, leftVariants, containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="flex justify-center my-10">
                <div className="relative flex flex-col items-center justify-center text-center md:w-1/2">
                    <div className="absolute left-0 top-1/2">
                        <FaChevronRight size={40} className="px-2 py-2 rotate-180 bg-gray-500 rounded-full" color="white" />
                    </div>
                    <div className="absolute right-0 top-1/2">
                        <FaChevronRight size={40} className="px-2 py-2 bg-gray-500 rounded-full" color="white" />
                    </div>
                    <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center gap-8">
                        <motion.div variants={leftVariants} className="flex flex-col items-center gap-4">
                            <h2 className="uppercase text-GRed">Testimonial</h2>
                            <h1 className="uppercase anton-regular">Nice words from our clients</h1>
                        </motion.div>
                        <motion.div variants={rightVariants} className="flex flex-col items-center justify-center gap-4">
                            <motion.div className="w-48 h-48 overflow-hidden rounded-full">
                                <img src={trainer1} alt="" className="" />
                            </motion.div>
                            <motion.div variants={leftVariants} className="flex flex-col items-center gap-2 mx-8 text-center">
                                <p>
                                    A well-equipped, clean, and spacious gym with modern machines, free weights, and a motivating atmosphere. The friendly staff and knowledgeable trainers make it a
                                    great choice for all fitness levels. With convenient parking, clean locker rooms, and a strong community vibe, it’s an excellent place to work out.
                                </p>
                                <p>Mr. PoopyPants</p>
                                <div className="flex items-center gap-2">
                                    <LiaStarSolid color="#ed1b24" />
                                    <LiaStarSolid color="#ed1b24" />
                                    <LiaStarSolid color="#ed1b24" />
                                    <LiaStarSolid color="#ed1b24" />
                                    <LiaStarSolid color="#ffffff" />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Review;
