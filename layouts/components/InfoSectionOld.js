// components/InfoSection.js
import React from 'react';

const comohacemos = [
    {
      id: 1,
      title: "Escuchamos.",
    },
    {
      id: 2,
      title: "Ponemos atención a la calle, las tendencias,los clientes.",
    },
    {
      id: 3,
      title: "Investigamos.",
    },
    {
      id: 4,
      title: "Diseñamos ideas, historias, imágenes.",
    },
    {
      id: 5,
      title: "Articulamos redes y construimos democracia cultural.",
    },
    {
      id: 6,
      title: "Organizamos el equipo más eficiente y talentoso",
    },
    {
      id: 7,
      title: "Capturamos recursos.",
    },
    {
      id: 8,
      title: "Implementamos considerando tiempos y recursos.",
    },
    {
      id: 9,
      title: "Evaluamos.",
    },
  ];

const InfoSection = () => {
    return (
        <section className="section relative bg-primary h-[45vh] sm:h-[25vh] md:h-[42vh] lg:h-[30vh] xl:h-[45vh]">
          {/* Primer div (arriba) */}
          <div className="absolute top-0 inset-x-0 bg-[#2A2D7D] bg-opacity-1 flex items-center justify-center w-3/4 xl:w-1/4 mx-auto -translate-y-1/2 sm:-translate-y-1/3 md:-translate-y-1/4 lg:-translate-y-1/5 rounded-[18px] pb-2 sm:pb-4 md:pb-6 lg:pb-8">
            <div className="text-white">
              <p className="text-lg sm:text-sm mb-6 mt-6">
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  Promover, divulgar y
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  gestionar la cultura.
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  Eso es lo que sabemos
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  hacer y lo hacemos
                </span> 
                <span 
                  className="font-bold block"
                  style={{ fontFamily: "Libre Baskerville", fontSize: '16px', lineHeight: '1.875' }}
                >
                  muy bien.
                </span> 
              </p>
              <div className="flex justify-center w-full mb-2">
                <button 
                  className="px-3 bg-white hover:bg-gray-100 text-[#2A2D7D] font-bold rounded-full transition"
                  style={{ fontFamily: "Lato", fontSize: '12px', lineHeight: '2.5' }}
                >
                  Hablemos
                </button>
              </div>
            </div>
          </div>
    
          {/* Segundo div (abajo) */}
          <div className="absolute bottom-0 inset-x-0 bg-[#6fac4e] bg-opacity-1 flex items-center justify-center w-3/4 xl:w-1/4 mx-auto translate-y-1/2 sm:translate-y-1/3 md:translate-y-1/4 lg:translate-y-1/5 rounded-[18px] pb-2 sm:pb-4 md:pb-6 lg:pb-8">        
            <div className="text-center text-white px-4">
              <h6 className="text-2xl font-bold text-white mt-2 mb-4"
                style={{ fontFamily: "Lato", fontSize: '16px', lineHeight: '1.667', fontWeight: 'bold' }}
              >
                ¿Cómo lo hacemos?
              </h6>
              <div className="text-left">
                <ul className="list-disc list-inside flex flex-col items-start">
                  {comohacemos.map((item) => (
                    <li 
                      key={item.id} 
                      className="text-sm sm:text-xs mb-2" 
                      style={{ fontFamily: "Libre Baskerville", fontSize: '12px', paddingLeft: '1em', textIndent: '-1em', overflowWrap: 'break-word' }}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      );
};

export default InfoSection;