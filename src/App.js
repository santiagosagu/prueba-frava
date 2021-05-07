import Home from "./page/Home";
import UsuarioState from './context/usuarioSeleccionado/UsuarioState'


function App() {
  return (
    <UsuarioState>

      <Home />

    </UsuarioState>
  );
}

export default App;
