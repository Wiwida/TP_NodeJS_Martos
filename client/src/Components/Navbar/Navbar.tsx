import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="navbar_style">
                <div className="nav-wrapper container">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink exact activeClassName="Active" to="/">
                                Mes Réservations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName="Active"
                                to="/ticket_find"
                            >
                                Trouver un Train
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                activeClassName="Active"
                                to="/pnr_status"
                            >
                                PNR Status
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact activeClassName="Active" to="/auth">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
