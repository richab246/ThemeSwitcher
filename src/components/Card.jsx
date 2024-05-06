import React from "react";
import Landscape from '../assets/landscape.jpg';
import User from '../assets/user.png';

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                <img src={Landscape} alt="product_image1" className="m-8 rounded-xl h-[255px]" />
            <div className="px-5 pb-5 items-center">
                <h5 className="text-xs font-bold tracking-tight text-[#ab5941] uppercase">
                    Ux research
                </h5>
                <h4 className="text-lg font-bold mt-2 tracking-wide text-gray-900 dark:text-white">
                    How bad UX can impact user experience
                </h4>
                <p className="text-[#888888] text-xs font-semibold tracking-wide mt-2 text-justify">It's indeed our goal as Product designers to design intuitive and user-friendly interfaces for our users. People's lives can be significantly impacted by poor UX, which can result in frustation, lost time and even financial loss. A clutterd o...</p>
            </div>
            <div className="px-5 pb-8 flex flex-row gap-2 items-center">
                <img src={User} className="rounded-full w-12 h-12"/>
                <div className="items-center">
                   <h5 className="text-xs font-bold text-[#888888]">Lucy Smith</h5> 
                   <p className="text-[10px] text-[#9a9a9a]">Author, January 09th 2023</p>
                </div>
            </div>
        </div>
    );
}
