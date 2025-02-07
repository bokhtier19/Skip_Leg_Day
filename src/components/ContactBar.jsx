import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import BRed4 from "../assets/BRed4.jpg";
import BRed5 from "../assets/BRed5.jpg";
const ContactBar = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-around gap-8 py-8 text-white md:items-center md:flex-row">
                {/* -------Address--------- */}
                <div className="flex items-center gap-4">
                    <div className="px-4 py-4 rounded-full bg-GRed">
                        <MdLocationOn className="" color="white" size={25} />
                    </div>
                    <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
                </div>
                {/* -------Phones--------- */}
                <div className="flex items-center gap-4">
                    <div className="px-4 py-4 rounded-full bg-GRed">
                        <MdPhoneIphone color="white" size={25} />
                    </div>
                    <p>125-711-811 125-668-886</p>
                </div>
                {/* -------Email--------- */}
                <div className="flex items-center gap-4">
                    <div className="px-4 py-4 rounded-full bg-GRed">
                        <MdEmail color="white" size={25} />
                    </div>
                    <p>Support.gymcenter@gmail.com</p>
                </div>
            </div>
        </>
    );
};

export default ContactBar;
