import certifications from "../../data/certifications";
import CertificateCard from "../../components/CertificateCard";
import { useTranslation } from "react-i18next";

const Certifications = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-center text-white">
                {t("certifications.title")}{" "}
                <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">
                    {t("certifications.titleGradient")}
                </span>
            </h2>
            <p className="text-center text-gray-400 mt-2">
                {t("certifications.description")}
            </p>
            {certifications.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
                    {certifications.map((cert, index) => (
                        <CertificateCard key={index} title={cert.title} image={cert.image} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-white">
                    {t("certifications.noCertifications")}
                </p>
            )}
        </section>
    );
};

export default Certifications;
