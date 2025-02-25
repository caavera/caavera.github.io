import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Background from "../Background";

const Layout = () => {
    return (
        <div className="relative">
            {/* Fondo animado de estrellas */}
            <Background />
            
            {/* Navbar fijo en la parte superior */}
            <Navbar />
            
            {/* Contenido de la página que cambia con las rutas */}
            <main className="relative z-10 px-6 md:px-20">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
