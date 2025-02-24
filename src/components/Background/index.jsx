import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";

const RotatingStars = () => {
    const stars = useRef();

    useFrame(() => {
        if (stars.current) {
            stars.current.rotation.x += 0.00015;
            stars.current.rotation.y += 0.00015;
        }
    });

    return (
        <Stars
            ref={stars}
            radius={100}    // Radio de dispersión de las estrellas
            depth={50}      // Profundidad de las estrellas
            count={600}     // Cantidad de estrellas
            factor={4}      // Tamaño y brillo
            saturation={0}  // Desaturado (color blanco)
            fade            // Hace que las estrellas se desvanezcan al fondo
        />
    );
};

const Background = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-[#3a0a58] to-black">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <RotatingStars />
            </Canvas>
        </div>
    );
};

export default Background;