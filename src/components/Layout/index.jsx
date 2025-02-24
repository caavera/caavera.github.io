import Navbar from "../Navbar";

const Layout = ({ children }) => {
    return (
        <div className="bg-red min-h-screen">
            <Navbar />
            <main className="mt-16">{children}</main>
            {/* Aquí irá el Footer cuando lo tengamos */}
        </div>
    );
};

export default Layout;
