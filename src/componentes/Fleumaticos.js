import React from 'react';
import './Temperamentos.css';

const Fleumaticos = () => {
  // Suponha que você tenha um texto em uma variável
  const meuTexto =
    "Este temperamento é *sonhador, pacífico, dócil.*\n" +
    "\n" +
    "Os fleumáticos prezam a rotina, o silêncio e dificilmente perdem o controle, pois costumam avaliar toda a situação antes de reagir.\n" +
    "\n" +
    "Pacientes, observadores e disciplinados, preferem não manifestar suas opiniões em público e não costumam reagir bem às críticas.\n"+
    "\n" +
    "Pontos fortes: são equilibrados e confiáveis. \n" +
    "\n" +
    "Pontos que precisam ser trabalhados: lentidão, resistência às mudanças e indecisão."

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

export default Fleumaticos;
