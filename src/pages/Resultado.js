import { useSelector, useDispatch } from 'react-redux';
import { resultAct } from "../redux/result/actions"
import { useState } from 'react';
import { Button } from "@mui/material";

function Resultado() {

    const dispatch = useDispatch()
    const { result } = useSelector((rootReducer) => rootReducer.resulReducer)
    const [val, setVal] = useState('')
   
   //-------------------------------------------------------------------------------------------------------------------------------------------------
    let sanguineos="Este temperamento é expansivo, otimista e impulsivo. "+
    "Extrovertidos e sensíveis, os sanguíneos são indivíduos que não passam desapercebidos, "+
    "pois são espontâneos e gostam de interagir. Além disso, costumam fazer gestos largos e falar bem em público. "+
    "Pontos fortes: são comunicativos, resilientes, adaptáveis e entusiastas. "+
    "Pontos que precisam ser trabalhados: impulsividade, falta de atenção, superficialidade e exagero."
   //-------------------------------------------------------------------------------------------------------------------------------------------------
    let colericos = "Este temperamento é explosivo, ambicioso e dominador. "+
    " Indivíduos coléricos são determinados e possuem grande capacidade de planejamento, além de muita energia e impulsividade. "+ 
    "Pontos fortes: determinação, habilidade de liderança e praticidade. "+
    "Pontos que precisam ser trabalhados: egocentrismo, intolerância e impaciência."
   //-------------------------------------------------------------------------------------------------------------------------------------------------
    let melancolicos ="Este temperamento é tímido, artístico e solitário. "+
    "Os melancólicos têm a sensibilidade muito aflorada e são pessoas profundas, detalhistas e introvertidas, com certa dificuldade em expôr seus sentimentos. "+
    "São fiéis, desconfiados e tendem a escolher profissões que possam exercer sozinhos. "+ 
    "Pontos fortes: lealdade, dedicação e sensibilidade. "+
    "Pontos que precisam ser trabalhados: egoísmo, pessimismo e inflexibilidade."
   //--------------------------------------------------------------------------------------------------------------------------------------------
    let fleumaticos="Este temperamento é sonhador, pacífico, dócil. "+
    "Os fleumáticos prezam a rotina, o silêncio e dificilmente perdem o controle, pois costumam avaliar toda a situação antes de reagir. "+
    "Pacientes, observadores e disciplinados, preferem não manifestar suas opiniões em público e não costumam reagir bem às críticas. "+
    "Pontos fortes: são equilibrados e confiáveis. "+
    "Pontos que precisam ser trabalhados: lentidão, resistência às mudanças e indecisão."
    const temps = [
        sanguineos,
        colericos,
        melancolicos,
        fleumaticos
    ]
    const temp2 = [
        " Sanguíneo",
        " Colérico",
        " Melancólico",
        " Fleumático"
    ]

    function clic() {
        if (result === temp2[0]) {
            setVal(temps[0])
        } else if (result === temp2[1]) {
            setVal(temps[1])
        } else if (result === temp2[2]) {
            setVal(temps[2])
        } else if (result === temp2[3]) {
            setVal(temps[3])
        } else {
            setVal(`voce é algo ${temps[2]}`)
        }
    }

    function carregar() {
        dispatch(resultAct(result))
    }

    return (
        <div>
            <table align='center' width='550px'>
                <tbody>
                    <tr >
                        <td>
                            <p onChange={() => { carregar() }}>O seu temperamento é do tipo {result}</p>
                        </td>
                    </tr>
                    <tr >
                        <td>
                            <Button variant="contained" size="large" sx={{ fontSize: 30 }} type="submit" onClick={() => { clic() }}>
                            Ver Explicação
                            </Button>
                        </td>
                    </tr>
                    <tr >
                        <td align='justify-center'>
                            <p className='explicacao'>{val}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Resultado