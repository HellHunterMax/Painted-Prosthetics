import * as React from "react";
import { MenuItems } from "./menu-items";
import { Link } from "react-router-dom";
import { UserService } from "../../helpers/user-service";
import "./navbar.css";

export default class Navbar extends React.PureComponent {
    state = { clicked: false, isAuthenticated: this.props.isAuthenticated }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    closeMobileMenu = () => {
        this.setState({ clicked: false })
    }
    //TODO Login should change to Logout when logged in.
    render() {
        let isAuthenticated = this.state.isAuthenticated;
        const adminMenuItem = <li>< Link to="/admin" className="nav-links" onClick={this.closeMobileMenu} > Admin </Link></li>
        return (
            <nav className="navbar-items">
                <h1 className="navbar-logo">
                    <img className="Logo" src="/PPLogo.png" alt="" />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url}
                                    className={item.cName}
                                    onClick={this.closeMobileMenu}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        < Link to="/login" className="nav-links" onClick={this.closeMobileMenu} > {isAuthenticated ? "Log out" : "Login"} </Link>
                    </li>
                    {isAuthenticated && adminMenuItem}
                    
                </ul>
            </nav>
        )

    }
}