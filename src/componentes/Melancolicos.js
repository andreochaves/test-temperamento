import React from 'react';
import './Temperamentos.css';

const Melancolicos = () => {
  const meuTexto =
  "Este temperamento é *tímido, artístico e solitário*.\n" +
    "\n" +
    "Os melancólicos têm a sensibilidade muito aflorada e são pessoas profundas, detalhistas e introvertidas, com certa dificuldade em expôr seus sentimentos.\n"+
    "\n" +
    "São fiéis, desconfiados e tendem a escolher profissões que possam exercer sozinhos. "+ 
    "\n" +
    "Pontos fortes: lealdade, dedicação e sensibilidade. \n" +
    "\n" +
    "Pontos que precisam ser trabalhados: egoísmo, pessimismo e inflexibilidade."

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

  return (
    <div className="meu-componente">
      {aplicarNegrito(meuTexto)}
    </div>
  );
};

export default Melancolicos;
