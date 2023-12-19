import { useSelector, useDispatch } from 'react-redux';
import { resultAct } from "../redux/result/actions"
import { useState } from 'react';
import { Button } from "@mui/material";
import Sanguineos from "../componentes/Sanguineos"
import Colericos from "../componentes/Colericos"
import Melancolicos from "../componentes/Melancolicos"
import Fleumaticos from "../componentes/Fleumaticos"

function Resultado() {

    const dispatch = useDispatch()
    const { result } = useSelector((rootReducer) => rootReducer.resulReducer)
    const [val, setVal] = useState('')
   
    let sanguineos= Sanguineos
    let colericos =Colericos
    let melancolicos =Melancolicos
    let fleumaticos=Fleumaticos

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
            setVal(`Houve um empate`)
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
                            <p className='resultado' onChange={() => { carregar() }}>O seu temperamento é do tipo {result}</p>
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