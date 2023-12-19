import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { resultAct } from "../redux/result/actions"
import listaTemperamentos from "./Lista";
import useLista2 from './tabela';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';


function TesteTemp() {
    const { retornaAlgo, retor, retorn, retorno } = listaTemperamentos();
    const { Lista1, Lista2, Lista3, Lista4 } = useLista2();
    const [list1] = useState(retornaAlgo);
    const [list2] = useState(retor);
    const [list3] = useState(retorn);
    const [list4] = useState(retorno);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [valor, setValor] = useState(0);
    const [resultado, setResultado] = useState('');
    const [time, setTime] = useState(0)
    const [val, setVal] = useState(1)
    const [par, setPar] = useState(0)
    const [ind, setInd] = useState('')
    let history = useNavigate();
    const dispatch = useDispatch()
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    useEffect(() => {
        if (time === 0 && val === 0) {
            // mover()
            history("/resultado")
            dispatch(resultAct(resultado))
        } else if (time === 0 && val === 1) {
            // Do something else if needed
        } else {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [time, val, resultado, history, dispatch]);

    function calcular(a, b, c, d) {
        const letras = ['Sanguíneo', 'Colérico', 'Melancólico', 'Fleumático'];
        const valores = [a, b, c, d];

        const maxValor = Math.max(...valores);
        const indicesMaxValor = valores.reduce((acc, val, index) => (val === maxValor ? acc.concat(index) : acc), []);

        if (indicesMaxValor.length === 1) {
            setResultado(` ${letras[indicesMaxValor[0]]}`);
        } else {
            setResultado('Houve Empate');
        }
    }

    function verEx(parametro, i) {
        setPar(parametro)
        switch (parametro) {
            case 1: setInd(Lista1[i])
                setOpen1(!open1)
                setOpen2(false)
                setOpen3(false)
                setOpen4(false)
                break;
            case 2: setInd(Lista2[i])
                setOpen1(false)
                setOpen2(!open2)
                setOpen3(false)
                setOpen4(false)
                break;
            case 3: setInd(Lista3[i])
                setOpen1(false)
                setOpen2(false)
                setOpen3(!open3)
                setOpen4(false)
                break;
            case 4: setInd(Lista4[i])
                setOpen1(false)
                setOpen2(false)
                setOpen3(false)
                setOpen4(!open4)
                break;
            default: setInd('error')
                break;
        }

    }

    function altera(i, lists) {
        lists.forEach((list) => {
            list[i].isClicked = true;
            if (list.length > i + 1) {
                list[i + 1].isClicked = false;
            } else {
                list.splice(i);
            }
        });
    }

    function clicou(parametro, i, lists, setA, setB, setC, setD, setValor, a, b, c, d, valor) {
        switch (parametro) {
            case 1:
                setA(a + 1);
                break;
            case 2:
                setB(b + 1);
                break;
            case 3:
                setC(c + 1);
                break;
            case 4:
                setD(d + 1);
                break;
            default:
                console.error("Erro");
                return;
        }

        altera(i, lists);

        setValor(valor + 1);
        setOpen1(false)
        setOpen2(false)
        setOpen3(false)
        setOpen4(false)
    }

    const recarregar = () => {
        window.location.reload()
    }

    const handleCalcularClick = () => {
        setVal(0)
        setTime(1)
        calcular(a, b, c, d)
        dispatch(resultAct(resultado))
    };

    function ListaDeBotoes({ lista, clicouHandler, parametro }) {
        const opens = [open1, open2, open3, open4]
        return (
            <div>
                {lista.map((item, index) => (
                    <div key={index} className={!item.isClicked ? "aparece" : "desaparece"}>
                        <table align='center' width='550px'>
                            <tbody>
                                <tr >
                                    <td>
                                        <Button
                                            variant="contained"
                                            sx={{ fontSize: 30, width: '500px' }}
                                            size="large"
                                            onClick={() => clicouHandler(parametro, index)}
                                            type="submit"
                                        >
                                            {item.name}
                                        </Button>
                                    </td>
                                    <td className={opens[parametro - 1] === false ? 'aparece' : 'desaparece'}>
                                        <QuestionMarkSharpIcon color='info' onClick={() => { verEx(parametro, index) }} />
                                    </td>
                                    <td className={opens[parametro - 1] === true ? 'aparece' : 'desaparece'}>
                                        <ClearSharpIcon color='error' onClick={() => { verEx(parametro, index) }} />
                                    </td>
                                </tr>
                                <tr className={par === parametro && opens[parametro - 1] === true ? 'aparece' : 'desaparece'}>
                                    <td className='duvida'>
                                        {ind}
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <br />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <header className={valor !== 27 ? "aparece" : "desaparece"}>
                <p className="instrucoes">Selecione uma palavra dentre as 4 listadas abaixo</p>
                <div className='rodape-pagina'>
                    <p>{valor + 1}/27</p>
                    <Button variant="contained" size="large" sx={{ fontSize: 20 }} onClick={recarregar} type="submit">
                        Recomeçar
                    </Button>
                </div>
            </header>
            {valor === 27 ? (
                <div>
                    <div className={val === 1 ? "aparece" : "desaparece"}>

                        <br /><br /><br /><br />
                        <Button variant="contained" size="large" sx={{ fontSize: 30 }} type="submit" onClick={handleCalcularClick}>
                            Ver Resultado
                        </Button>
                    </div>
                    <div className={val === 0 ? "aparece" : "desaparece"} >
                        <br /><br /><br /><br />
                        <Button variant="contained" size="large" disabled sx={{ fontSize: 30 }} type="submit">
                            Ver Resultado
                        </Button>
                    </div>
                </div>
            ) : (
                <>
                    <ListaDeBotoes lista={list1} clicouHandler={(parametro, i) => clicou(parametro, i, [list1, list2, list3, list4], setA, setB, setC, setD, setValor, a, b, c, d, valor)} parametro={1} />
                    <ListaDeBotoes lista={list2} clicouHandler={(parametro, i) => clicou(parametro, i, [list1, list2, list3, list4], setA, setB, setC, setD, setValor, a, b, c, d, valor)} parametro={2} />
                    <ListaDeBotoes lista={list3} clicouHandler={(parametro, i) => clicou(parametro, i, [list1, list2, list3, list4], setA, setB, setC, setD, setValor, a, b, c, d, valor)} parametro={3} />
                    <ListaDeBotoes lista={list4} clicouHandler={(parametro, i) => clicou(parametro, i, [list1, list2, list3, list4], setA, setB, setC, setD, setValor, a, b, c, d, valor)} parametro={4} />



                </>
            )}
        </div>
    )
}
export default TesteTemp