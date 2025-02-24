import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/hero-animation.json"; // Guarda aquí tu animación JSON

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">
            <div className="w-72 md:w-96">
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
                ¡Hola, soy Carlos Vera!
            </h1>
            <p className="text-lg text-gray-500 mt-1">Desarrollador Full Stack</p>
        </section>
    );
};

export default Hero;
