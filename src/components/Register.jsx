import React, { useContext } from "react";
import Bred5 from "../assets/Bred5.jpg";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "motion/react";

const Register = () => {
    const { childVariants, containerVariants } = useContext(AnimationContext);

    return (
        <>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col items-center gap-8 py-20 text-center text-white anton-regular"
                style={{ backgroundImage: `url(${Bred5})`, backgroundSize: "cover", opacity: 0.95 }}
            >
                <motion.h1 variants={childVariants} className="text-6xl ">
                    REGISTER NOW AND GET 20% OFF
                </motion.h1>
                <motion.h2 variants={childVariants} className="text-4xl">
                    WHERE BEAUTY HEALTH AND FITNESS MEETS
                </motion.h2>
                <motion.button variants={childVariants} className="px-8 py-4 text-2xl bg-white text-GRed w-fit">
                    REGISTER NOW
                </motion.button>
            </motion.div>
        </>
    );
};

export default Register;
