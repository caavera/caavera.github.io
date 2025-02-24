import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/hero-animation.json"; // Guarda aquí tu animación JSON

const Hero = () => {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">
            <div className="w-72 md:w-96">
                <Lottie animationData={animationData} loop={true} />
            </div>
            <h1 className="text-4xl font-bold mt-4">¡Hola, soy Carlos Vera!</h1>
            <p className="text-lg text-gray-500">Desarrollador Full Stack</p>
        </section>
    );
};

export default Hero;
