import novaShopImg from "../assets/projects/nova-shop.png";
import horizonTravelImg from "../assets/projects/horizon-travel.png";
import toDoListImg from "../assets/projects/to-do-list.png";
import frontendYardSaleImg from "../assets/projects/frontend-yardsale.png";
import asyncLandingImg from "../assets/projects/async-landing.png";
import violetSayImg from "../assets/projects/violet-say.png";

const projects = [
    {
        name: "Nova-Shop",
        description: "Nova-Shop es una aplicación de e-commerce moderna y optimizada, desarrollada con React 19 y Vite. Ofrece una experiencia fluida con una interfaz responsiva en Tailwind CSS, permitiendo a los usuarios buscar productos, filtrar por categoría y gestionar su carrito de compras dinámicamente.",
        tech: ["React", "Vite", "TailwindCSS", "Fake Store API"],
        image: novaShopImg,
        github: "https://github.com/caavera/Nova-Shop/",
        demo: "https://caavera.github.io/nova-shop/"
    },
    {
        name: "Horizon-Travel",
        description: "Horizon Travel es una landing page moderna y elegante, diseñada para inspirar a los viajeros. Desarrollada con HTML, Tailwind CSS v4 y JavaScript, ofrece un diseño responsivo, animaciones fluidas y un modo oscuro dinámico, mejorando la experiencia de navegación.",
        tech: ["HTML", "TailwindCSS", "JavaScript"],
        image: horizonTravelImg,
        github: "https://github.com/caavera/horizon-travel",
        demo: "https://caavera.github.io/horizon-travel/"
    },
    {
        name: "To Do List",
        description: "To-Do List es una aplicación de gestión de tareas intuitiva y funcional, desarrollada con React. Permite agregar, buscar y marcar tareas como completadas, con persistencia en LocalStorage, modo oscuro y notificaciones dinámicas para una mejor experiencia de usuario.",
        tech: ["React", "JavaScript", "CSS", "HTML"],
        image: toDoListImg,
        github: "https://github.com/caavera/to-do-list",
        demo: "https://caavera.github.io/to-do-list/"
    },
    {
        name: "Frontend YardSale",
        description: "Frontend Yard Sale es un prototipo de interfaz para una tienda en línea, desarrollado con HTML y CSS modulares. Cuenta con un diseño responsivo e intuitivo, organizado en archivos independientes para facilitar su futura conversión a componentes reutilizables en ReactJS.",
        tech: ["HTML", "CSS", "CSS Modules"],
        image: frontendYardSaleImg,
        github: "https://github.com/caavera/frontendYardSale"
    },
    {
        name: "Async Landing",
        description: "Async Landing es una landing page dinámica que consume la API de YouTube en tiempo real, desarrollada con HTML, JavaScript y CSS. Implementa async/await para manejar operaciones asíncronas y cuenta con un diseño responsivo optimizado.",
        tech: ["JavaScript", "CSS", "HTML"],
        image: asyncLandingImg,
        github: "https://github.com/caavera/async-landing",
        demo: "https://caavera.github.io/async-landing/"
    },
    {
        name: "Violet-Say",
        description: "VioletSay es un paquete NPM inspirado en cowsay, que muestra mensajes en la terminal junto a representaciones ASCII de mis perritas, Violeta y Vera. Desarrollado en JavaScript, este proyecto explora la creación y publicación de paquetes en NPM de manera divertida e interactiva.",
        tech: ["JavaScript","Node.js", "NPM"],
        image: violetSayImg,
        github: "https://github.com/caavera/violet-say",
        npm: "https://www.npmjs.com/package/violet-say"
    }
];

export default projects;