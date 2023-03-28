import RutasApp from "./rutas/RutaApp";
import AuthProvider from './auth/AuthProvider'

function App() {
  return (
    <div className="App">
      {/* es un componente que retorna un contexto a sus hijos */}
  

        {/* aqui se importa el modleo para llamarlo a la applicacion */}
        <RutasApp />
          
      
    </div>
  );
}

export default App;
