import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
        return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      
      <Link className="navbar-brand" to="/">UseContext</Link>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <NavLink to="/" className={()=> `nav-link ${ isActive ? 'active' : '' }`} > Home </NavLink>
            <NavLink to="/about" className={()=> `nav-link ${ isActive ? 'active' : '' }`} > About </NavLink>
            <NavLink to="/login" className={()=> `nav-link ${ isActive ? 'active' : '' }`} > Login </NavLink>
        
        </ul>
      </div>
    </div>
  </nav>
  )
}
