import React, { useContext } from "react";
import class1 from "../assets/class1.jpg";
import class2 from "../assets/class2.jpg";
import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import trainer4 from "../assets/trainer4.jpg";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "motion/react";
const Gallery = () => {
    const { childVariants, containerVariants } = useContext(AnimationContext);

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="uppercase">Image Gallery</h1>
                <motion.div initial="hidden" whileInView="show" variants={containerVariants} className="grid w-3/4 grid-cols-3 gap-4">
                    <motion.img variants={childVariants} src={class2} alt="" />
                    <motion.img variants={childVariants} src={class2} alt="" />
                    <motion.img variants={childVariants} src={class2} alt="" />
                    <motion.img variants={childVariants} src={trainer2} alt="" />
                    <motion.img variants={childVariants} src={trainer3} alt="" />
                    <motion.img variants={childVariants} src={trainer4} alt="" />
                </motion.div>
            </div>
        </>
    );
};

export default Gallery;
