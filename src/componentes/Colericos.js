import React from 'react';
import './Temperamentos.css';

const Colericos = () => {
  // Suponha que você tenha um texto em uma variável
  const meuTexto =
     "Este temperamento é *explosivo, ambicioso e dominador.* \n"+
    "\n" +
    "Indivíduos coléricos são determinados e possuem grande capacidade de planejamento, além de muita energia e impulsividade. \n" +
    "\n" +
    "Pontos fortes: determinação, habilidade de liderança e praticidade. "+
    "\n" +
    "Pontos que precisam ser trabalhados: egocentrismo, intolerância e impaciência."

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

export default Colericos;
