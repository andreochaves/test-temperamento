import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TesteTemp from './pages/TesteTemp';
import Resultado from './pages/Resultado';
import Home from './pages/Home';

function App() {

    return (
        <div className="App" >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/testeTemp' element={<TesteTemp />} />
                    <Route path='/resultado' element={<Resultado />} />
                </Routes>
            </BrowserRouter>


            { /*  */}
        </div>
    );
}

export default App