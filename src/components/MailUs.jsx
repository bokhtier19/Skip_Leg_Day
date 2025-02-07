import React, { useContext } from "react";
import { AnimationContext } from "../context/AnimationContext";
import { motion } from "motion/react";

const MailUs = () => {
    const { rightVariants, leftVariants, containerVariants, childVariants } = useContext(AnimationContext);

    return (
        <>
            <motion.div className="my-20">
                <div>
                    <h1 className="my-4 text-center uppercase text-GRed">Contact Us</h1>
                </div>
                <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} action="" className="flex flex-col w-1/2 gap-4 mx-auto">
                    <motion.input variants={childVariants} type="text" className="px-4 py-2 border-2" placeholder="Name" />
                    <motion.input variants={childVariants} type="text" className="px-4 py-2" placeholder="Email" />
                    <motion.input variants={childVariants} type="text" className="px-4 py-2" placeholder="Comment" />
                </motion.form>
            </motion.div>
        </>
    );
};

export default MailUs;
