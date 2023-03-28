import {Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap'
// navlink se usa mas cuando se quiren agregar estilos a los enlaces si estan en la ruta que apuntan
import { NavLink } from 'react-router-dom'
export default function Navegacion(){
    return(
        // asigna etiquetas a los elementos de Nav
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            {/* se resalta el titulo a mostrar */}
            <Navbar.Brand as={NavLink} to='/'>Gestor de Tareas</Navbar.Brand>
            {/* se debe asignar un id para el toogle y sera el mismo para el collapse, se usa en version mobil */}
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            {/* El collapse tiene que tener el mismo id que el toogle  */}
            <Navbar.Collapse id='responsive-navbar-nav'>
                {/* este nav muestra unicamente los link para acceder */}
                <Nav className='me-auto'>
                    {/* se sustituye el mr-auto */}
                    {/* se le indica un atributo alias, ten la funcionalidad del Nav.Link pero renderizate como un Navlink
                      el atributo que recibe el modulo para redireccinar sera TO
                      como Nav.Link se comporta como componente {} se puede acceder a sus atributs */}
                    <Nav.Link as={NavLink} to='/projects'>Proyectos</Nav.Link>
                    {/* cuando se use un componente se deberan usar los elementos del mismo */}
                    <NavDropdown title='Admin'>
                        <Dropdown.Item as={NavLink} to='/admin/users'>Usuarios</Dropdown.Item>
                    </NavDropdown>
                </Nav >
                {/* este nav agrupa las rutas relacionadas con la autenticacin */}
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to='/login'>Ingresar</Nav.Link>
                    <Nav.Link as={NavLink} to='/register'>Registrar</Nav.Link>
                    <Nav.Link as={NavLink} to='/account'>Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse >
        </Navbar>
    )
}