import React from 'react';
import './Temperamentos.css';

const Sanguineos = () => {
  // Suponha que você tenha um texto em uma variável
  const meuTexto =
    "Este temperamento é *expansivo, otimista e impulsivo*.\n" +
    "\n" +
    "Extrovertidos e sensíveis, os sanguíneos são indivíduos que não passam desapercebidos, " +
    "pois são espontâneos e gostam de interagir. Além disso, costumam fazer gestos largos e falar bem em público.\n" +
    "\n" +
    "Pontos fortes: são comunicativos, resilientes, adaptáveis e entusiastas.\n" +
    "\n" +
    "Pontos que precisam ser trabalhados: impulsividade, falta de atenção, superficialidade e exagero.";

  // Função para aplicar negrito
  const aplicarNegrito = (texto) => {
    return texto.split('\n').map((paragrafo, index) => (
      <p key={index} className="paragrafo">{aplicarNegritoInterno(paragrafo)}</p>
    ));
  };

  const aplicarNegritoInterno = (texto) => {
    return texto.split('*').map((parte, index) => (
        index % 2 === 0 ? (
          <span key={index}>{parte}</span>
        ) : (
          <strong key={index}>{parte}</strong>
        )
      ));
  };

  // Use JSX para renderizar o texto com parágrafos e negrito
  return (
    <div className="meu-componente">
      {aplicarNegrito(meuTexto)}
    </div>
  );
};

export default Sanguineos;
