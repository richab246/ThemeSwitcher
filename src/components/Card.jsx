import React from "react";
import Landscape from '../assets/landscape.jpg'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
                <img className="p-8 rounded-lg w-full h-[280px]" src={Landscape} alt="product_image1" />
            <div className="px-5 pb-5">
                    <h5 className="text-xs font-bold tracking-tight text-[#ab5941] uppercase">
                        Ux research
                    </h5>
                    <h4 className="text-xl font-bold mt-2 tracking-tight text-gray-900 dark:text-white">
                        How bad UX can impact user experience
                    </h4>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <p
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                </p>
            </div>
        </div>
        </div>
    );
}
