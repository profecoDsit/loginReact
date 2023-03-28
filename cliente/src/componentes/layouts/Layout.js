import Navegacion from "../Navegacion";


// para acceder a todos los componentes se usa children
export default function Layout({ children }){
    return(
        // Se retorna un fragmento de un componente (navegacion)
          <>
            <Navegacion />
            {/* se requiere que se renderizen los componentes hijos que envuelven el componente LayOut en App.js */}
            {children}
            prukaa
            
          </>
    );
}