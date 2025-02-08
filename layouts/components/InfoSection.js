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
<section className="section relative pt-0 " style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
<div className="absolute top-0 left-0 w-full h-2/3 bg-primary"></div>
<div className="relative z-10 w-full ">

  {/* Primer div (arriba) */}
  <div className="container mx-auto mb-5 flex flex-col" >
    <div className="bg-[#2A2D7D] bg-opacity-1 text-white p-6 rounded-[18px] flex flex-col gap-2"
    style={{width:'fit-content'}}
    >
      <p className="text-base"
          style={{ fontFamily: "Libre Baskerville" }}
      >
        Promover, divulgar y gestionar la cultura.
      </p>
      <p className="text-base"
          style={{ fontFamily: "Libre Baskerville" }}
      >
        Eso es lo que sabemos hacer y lo hacemos muy bien.
      </p>
      <div className="flex justify-center w-full mb-2">
        <button
  className="bg-white hover:bg-gray-100 text-[#2A2D7D] font-bold rounded-full transition  text-base  px-20 py-2"
  style={{ fontFamily: "Lato"  }}
        >
          Hablemos
        </button>
      </div>
    </div>
  </div>

  {/* Segundo div (abajo) */}
  <div className="container mx-auto" >
        <div className="bg-[#6fac4e] bg-opacity-1 text-white p-6 rounded-[18px] "
        style={{width:'fit-content'}}
        >
      <h6 className="text-2xl font-bold text-white mt-2 mb-4"
        style={{ fontFamily: "Lato",  fontWeight: 'bold' }}
      >
        ¿Cómo lo hacemos?
      </h6>
      <div className="text-left">
        <ul className="list-disc list-inside flex flex-col items-start">
          {comohacemos.map((item) => (
            <li
              key={item.id}
              className="text-sm mb-2"
              style={{ fontFamily: "Libre Baskerville", paddingLeft: '1em', textIndent: '-1.5em', overflowWrap: 'break-word' }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</div>
</section>
      );
};

export default InfoSection;