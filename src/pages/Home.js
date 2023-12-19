import { useNavigate } from 'react-router-dom'
import { Button } from "@mui/material";

function Home() {
    let history = useNavigate();
    function clicou(){
        history("/testeTemp")

    }
    return (
        <div>
            <div >
                <p className="instrucoes">Bem vindo ao Teste de Temperamento</p>
                <p className="instrucoes"> Clique em começar para iniciar o teste</p>
            </div>
            <Button variant="contained"
                sx={{ fontSize: 70, width: '400px', height: '200px', fontWeight: 'bold' }}
                size="large"
                onClick={()=>{clicou()}}>COMEÇAR</Button>
        </div>
    )
}
export default Home