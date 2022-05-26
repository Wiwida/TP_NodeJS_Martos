import { NavLink } from "react-router-dom"
import classes from "./Navbar.module.css"
import Logo from "../../Assets/logo.png"

const Navbar = () => {
    return (
        <nav className="purple darken-4">
            <div className="nav-wrapper container">
                <NavLink to="/">
                    <img className={classes.Logo} src={Logo} alt="logo" />
                </NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink exact activeClassName={classes.Active} to="/">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            activeClassName={classes.Active}
                            to="/ticket_find"
                        >
                            Find Ticket
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            activeClassName={classes.Active}
                            to="/pnr_status"
                        >
                            PNR Status
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            activeClassName={classes.Active}
                            to="/auth"
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
