import React, { useContext } from "react";
import class1 from "../assets/class1.jpg";
import { AnimationContext } from "./../context/AnimationContext";
import { motion } from "motion/react";
const AboutUs = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);
    return (
        <>
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col gap-4 my-12 md:flex-row">
                <motion.div variants={childVariants} className="flex-1 mx-8">
                    <img src={class1} alt="" />
                </motion.div>
                <motion.div variants={childVariants} className="flex justify-center flex-1">
                    <div className="flex flex-col justify-around w-4/5">
                        <h2 className="uppercase text-GRed">About Us</h2>
                        <h1 className="text-nowrap">What we were able to accomplish till now ?</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                            commodo viverra maecenas accumsan lacus vel facilisis. aliquip ex ea commodo consequat sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>

                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p>Body Building</p>
                                <p>75%</p>
                            </div>
                            <div className="bg-gray-900">
                                <hr className="w-3/4 h-2 bg-white" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p>Training</p>
                                <p>80%</p>
                            </div>
                            <div className="bg-gray-900">
                                <hr className="w-4/5 h-2 bg-white" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <p>Fitness</p>
                                <p>90%</p>
                            </div>
                            <div className="bg-gray-900">
                                <hr className="w-11/12 h-2 bg-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default AboutUs;
