import React, { useContext } from "react";
import BRed1 from "../assets/BRed1.jpg";
import Navbar from "./Navbar";
import model2 from "../assets/model2.png";
import { motion } from "motion/react";
import { AnimationContext } from "../context/AnimationContext";

const Hero = () => {
    const { containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="relative h-screen overflow-hidden text-white anton-regular" style={{ backgroundImage: `url(${BRed1})`, backgroundSize: "cover" }}>
                <Navbar />
                <div>
                    <img src={model2} alt="" className="absolute bottom-0 ml-12 " />
                </div>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="absolute text-center top-60 right-20">
                    <motion.h1 variants={childVariants} className="text-4xl">
                        NEVER SHAPE YOUR LEG
                    </motion.h1>
                    <motion.h1 variants={childVariants} className="text-5xl">
                        STRONG UPPERBODY
                    </motion.h1>
                    <motion.h1 variants={childVariants} className="text-7xl">
                        DONT WORRY ABOUT LEG DAY
                    </motion.h1>
                    <motion.button variants={childVariants} className="px-6 py-4 tracking-widest bg-GRed">
                        GET INFO
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
};

export default Hero;
