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


const OverlappingCards = () => {
  return (
    <div className="relative h-64 w-full max-w-sm mx-auto bg-gray-200 flex items-center justify-center">
      {/* Tarjeta Superior */}
      <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[80vw] md:w-56 lg:w-64">
        <p className="text-lg sm:text-sm mb-6 mt-6">
          <span 
            className="font-bold block"
            style={{fontFamily:"Libre Baskerville", fontSize:'16px', lineHeight:'1.875' }}
            
          >Promover, divulgar y</span> 
          <span 
            className="font-bold block"
            style={{fontFamily:"Libre Baskerville", fontSize:'16px', lineHeight:'1.875' }}
            >gestionar la cultura.</span> 
          <span 
            className="font-bold block"
            style={{fontFamily:"Libre Baskerville", fontSize:'16px', lineHeight:'1.875' }}
            >Eso es lo que sabemos </span> 
          <span 
            className="font-bold block"
            style={{fontFamily:"Libre Baskerville", fontSize:'16px', lineHeight:'1.875' }}
            >hacer y lo hacemos</span> 
          <span 
            className="font-bold block"
            style={{fontFamily:"Libre Baskerville", fontSize:'16px', lineHeight:'1.875' }}
            >muy bien.</span> 
          </p>
      </div>

      {/* Tarjeta Inferior */}
      <div className="absolute -bottom-1/2 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-48 md:w-56 lg:w-64">
        <h2 className="text-lg font-bold">Tarjeta Inferior</h2>
        <div className="text-left">
            <ul className="list-disc list-inside flex flex-col  items-start">
              {
                comohacemos.map((item) => (
                  <li key={item.id} className="text-sm sm:text-xs mb-2" 
                  style={{ fontFamily:"Libre Baskerville",  fontSize:'12px', paddingLeft: '1em', textIndent: '-1em', overflowWrap: 'break-word' }}
                  >{item.title}</li>
                ))
              }
            </ul>
          </div>      </div>
    </div>
  );
};

export default OverlappingCards;