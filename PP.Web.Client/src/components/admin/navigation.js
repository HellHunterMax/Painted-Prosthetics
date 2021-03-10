import * as React from "react";
import { ManagementItems } from "./management-items";
import { Link } from "react-router-dom";

export default class Navigation extends React.PureComponent {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    closeMobileMenu = () => {
        this.setState({ clicked: false })
    }

    render() {
        return (
            <nav className="admin-items">
                <ul className={this.state.clicked ? "admin-menu active" : "admin-menu"}>
                    {ManagementItems.map((item, index) => {
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
                </ul>
            </nav>
        )

    }
}