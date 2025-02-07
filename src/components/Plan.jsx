import React, { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "motion/react";

const Plan = () => {
    const { rightVariants, containerVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="my-20 text-center text-white">
                <h1 className="text-GRed">OUR PLANS</h1>
                <h1>CHOOSE YOUR PRICING PLAN</h1>
                <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col justify-center gap-8 mx-auto my-8 md:flex-row">
                    <motion.div
                        variants={rightVariants}
                        class="relative w-96 border items-center py-8 flex flex-col gap-4 text-sm transition-all duration-200 border-transparent before:absolute before:inset-0 before:-skew-y-3 hover:cursor-pointer hover:text-black before:border hover:bg-white before:hover:cursor-pointer before:hover:text-GRed before:border-white before:pointer-events-none"
                    >
                        <h1 className="text-4xl">Class drop-in</h1>
                        <h1 className="text-6xl font-bold anton-regular text-GRed">$ 39.00</h1>
                        <p>SINGLE CLASS</p>
                        <p>Free riding</p>
                        <p>Unlimited equipments</p>
                        <p>Personal trainer</p>
                        <p>Weight losing classes</p>
                        <p>Month to mouth</p>
                        <p>No time restriction</p>
                        <button className="px-6 py-2 text-center w-fit bg-GRed">ENROLL NOW</button>
                    </motion.div>
                    <motion.div
                        variants={rightVariants}
                        class="relative w-96 border items-center py-8 flex flex-col gap-4 text-sm transition-all duration-200 border-transparent before:absolute before:inset-0 before:-skew-y-3 hover:cursor-pointer hover:text-black before:border hover:bg-white before:hover:cursor-pointer before:hover:text-GRed before:border-white before:pointer-events-none"
                    >
                        <h1 className="text-4xl">Class drop-out</h1>
                        <h1 className="text-6xl font-bold anton-regular text-GRed">$ 39.00</h1>
                        <p>SINGLE CLASS</p>
                        <p>Free riding</p>
                        <p>Unlimited equipments</p>
                        <p>Personal trainer</p>
                        <p>Weight losing classes</p>
                        <p>Month to mouth</p>
                        <p>No time restriction</p>
                        <button className="px-6 py-2 text-center w-fit bg-GRed">ENROLL NOW</button>
                    </motion.div>
                    <motion.div
                        variants={rightVariants}
                        class="relative w-96 border items-center py-8 flex flex-col gap-4 text-sm transition-all duration-200 border-transparent before:absolute before:inset-0 before:-skew-y-3 hover:cursor-pointer hover:text-black before:border hover:bg-white before:hover:cursor-pointer before:hover:text-GRed before:border-white before:pointer-events-none"
                    >
                        <h1 className="text-4xl">Class no-leg</h1>
                        <h1 className="text-6xl font-bold anton-regular text-GRed">$ 39.00</h1>
                        <p>SINGLE CLASS</p>
                        <p>Free riding</p>
                        <p>Unlimited equipments</p>
                        <p>Personal trainer</p>
                        <p>Weight losing classes</p>
                        <p>Month to mouth</p>
                        <p>No time restriction</p>
                        <button className="px-6 py-2 text-center w-fit bg-GRed">ENROLL NOW</button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default Plan;
