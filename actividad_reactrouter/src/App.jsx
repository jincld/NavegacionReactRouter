import {BrowserRouter as Router, Routes, Route} from 'react-router';
import Nav from './components/Nav.jsx';
import Elementos from './pages/20componentes/20componentes.jsx';
import Home from './pages/home/home.jsx';
import CardPersonal from './pages/card_personal/cardpersonalpage.jsx';
import Calculadora from './pages/calculadora/calculadora.jsx';
import Todo from './pages/todolist/todo.jsx';
import RegistroEstudiantes from './pages/registro_estudiantes/registro.jsx'

function App() {

  return (
    <>
    <Router>
    <Nav/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/elementos" element={<Elementos />} />
      <Route path="/cardPersonal" element={<CardPersonal />} />
      <Route path="/calculadora" element={<Calculadora />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/registroEstudiantes" element={<RegistroEstudiantes />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
