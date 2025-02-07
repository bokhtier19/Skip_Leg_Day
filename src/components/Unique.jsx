import React, { useContext } from "react";
import { CgGym } from "react-icons/cg";
import { GiChickenLeg } from "react-icons/gi";
import { FaNutritionix } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa";
import { motion } from "motion/react";
import { AnimationContext } from "./../context/AnimationContext";

const Unique = () => {
    const { containerVariants, rightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="flex flex-col items-center my-20 text-white">
                <h2>WHY CHOOSE US?</h2>
                <h1>WE DONT PUSH FOR LEG DAYS</h1>

                <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col gap-8 px-8 my-4 md:flex-row">
                    <motion.div variants={leftVariants} className="flex flex-col items-center flex-1 gap-2 p-8 border-2 rounded-3xl">
                        <div className="flex justify-center">
                            <div className="px-4 py-4 rounded-full bg-GRed">
                                <CgGym size={60} />
                            </div>
                        </div>
                        <h1>Modern Equipment</h1>
                        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                    </motion.div>
                    <motion.div variants={leftVariants} className="flex flex-col items-center flex-1 gap-2 p-8 border-2 rounded-3xl">
                        <div className="flex justify-center">
                            <div className="px-4 py-4 rounded-full bg-GRed">
                                <FaUserNinja size={60} />
                            </div>
                        </div>
                        <h1>Professional Trainers</h1>
                        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                    </motion.div>
                    <motion.div variants={rightVariants} className="flex flex-col items-center flex-1 gap-2 p-8 border-2 rounded-3xl">
                        <div className="flex justify-center">
                            <div className="px-4 py-4 rounded-full bg-GRed">
                                <FaNutritionix size={60} />
                            </div>
                        </div>
                        <h1>Healthy Nutrition Plans</h1>
                        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                    </motion.div>
                    <motion.div variants={rightVariants} className="flex flex-col items-center flex-1 gap-2 p-8 border-2 rounded-3xl">
                        <div className="flex justify-center">
                            <div className="px-4 py-4 rounded-full bg-GRed">
                                <GiChickenLeg size={60} />
                            </div>
                        </div>
                        <h1>No Leg Days</h1>
                        <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Unique;
