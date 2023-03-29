import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PaginaCuenta from '../paginas/PaginaCuenta'
import PaginaInicial from '../paginas/PaginaInicial'
import PaginaLogin from '../paginas/PaginaLogin'
import PaginaNoEncontrada from '../paginas/PaginaNoEncontrada'
import PaginaProyecto from '../paginas/PaginaProyecto'
import PaginaProyectos from '../paginas/PaginaProyectos'
import PaginaRegistro from '../paginas/PaginaRegistro'
import PaginaUsuarios from '../paginas/admin/PaginaUsuarios'
import Layout from '../componentes/layouts/Layout'
import PrivateRoute from './PrivateRoute_C'



export default function RutasApp(){
    return(
        <Router>
            {/* Los Layout se usan para organizar la distribucion de la salida */}
            <Layout>
            {/* Se agrega un layout para mantener las rutas en un disenio de salida */}
            {/* <Navegacion /> */}
                {/* ^- Se coloca el componente fuera de las rutas pa ra que todas las paginas del enrutador puedan visualizarlo */}
                    <Switch>
                    {/* Se genera una ruta exacta y manda llamar al modulo que cargara la pagina que se menciona en la ruta */}
                        <Route exact path='/' component={PaginaInicial} />
                        <Route exact path='/login' component={PaginaLogin} />
                        <Route exact path='/register' component={PaginaRegistro} />

                        {/* aqui se hace la autenticacion a nivel de ruta, cada vez que Ingrese a una ruta para comprobar una vista
                        primero hara una autenticacion y muestra la ruta, en caso negativo no estar autenticado redirigira al loggin */}
                        <Route exact path='/account' component={PaginaCuenta} />
                        <Route exact path='/projects' component={PaginaProyectos} />
                        <Route exact path='/project/:projectId' component={PaginaProyecto} />
                        <Route exact path='/admin/users' component={PaginaUsuarios} />
                        <Route exact path='*' component={PaginaNoEncontrada} />
                </Switch>
            </Layout>
        </Router>
    )
}