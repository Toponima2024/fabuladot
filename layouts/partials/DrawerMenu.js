import React,{ useState } from 'react';
import menu from "@config/menu.json";
import { useRouter } from "next/router";
import { HiMenu } from "react-icons/hi";

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { main } = menu;
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (url) => {
    if (url.startsWith('#')) {
      // Navegación a un anchor (#anchor)
      const anchor = document.querySelector(url); // Selecciona el elemento con el id correspondiente
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta el anchor
      }
    } else {
      // Navegación a una ruta normal
      router.push(url);
    }
    setIsOpen(false); // Cierra el menú después de la selección
  };

  return (
    <div className="relative">
      {/* Botón para abrir el menú */}
      <button
            onClick={toggleDrawer}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white"
          >
            <HiMenu size="35px" />

          </button>

      {/* Fondo oscuro semitransparente */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Menú desplegable (de derecha a izquierda) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Icono para cerrar el menú */}
        <img src="images/favicon.png" alt="Imagen 1" className="absolute  top-2 p-1 w-8 h-8" />
        <button
          onClick={toggleDrawer}
          className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>



        {/* Opciones del menú */}
        <div className="mt-12">
          <ul >
              {main.map((menu, i) => (
                <React.Fragment key={`menu-${i}`}>
                  
                    <li >
                      <button
                            onClick={() => handleOptionClick(menu.url)}
                            className={`nav-link block ${
                                router.asPath === menu.url && "active"
                              } text-left text-gray-700 hover:bg-primary`}
                        >
                            {menu.name}
                        </button>
                    </li>
                  
                </React.Fragment>
              ))}

            {/* <li>


              <button
                onClick={() => handleOptionClick('Option 1')}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Option 1
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Option 2')}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Option 2
              </button>
            </li>
            <li>
              <button
                onClick={() => handleOptionClick('Option 3')}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                Option 3
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;