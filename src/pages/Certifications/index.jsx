import { useEffect, useState, useRef } from "react";
import certifications from "../../data/certifications";
import CertificateCard from "../../components/CertificateCard";

const Certifications = () => {
    const [visibleCertificates, setVisibleCertificates] = useState([]);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute("data-index");
                        setVisibleCertificates((prev) => [...new Set([...prev, Number(index)])]);
                        observerRef.current.unobserve(entry.target); // Dejar de observar después de cargar
                    }
                });
            },
            { threshold: 0.2 } // Se activa cuando el 20% del elemento es visible
        );

        return () => observerRef.current?.disconnect(); // Limpiar observer al desmontar
    }, []);

    return (
        <section className="py-20 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center text-white">
                Mis <span className="text-purple-400">Certificaciones</span>
            </h2>
            <p className="text-center text-gray-400 mt-2">
                Aquí puedes ver algunos de los cursos y certificaciones que he completado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        data-index={index}
                        ref={(el) => {
                            if (el && observerRef.current) {
                                observerRef.current.observe(el);
                            }
                        }}
                    >
                        {visibleCertificates.includes(index) && (
                            <CertificateCard 
                                title={cert.title} 
                                image={cert.image} 
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
