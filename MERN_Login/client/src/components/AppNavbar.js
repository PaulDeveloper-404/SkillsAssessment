import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink//,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // Container
} from 'reactstrap';

// Components
import SwitchRoute from './SwitchRoute';
import Home from './Home';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand tag={Link} to="/">
                        Home
                        {/* <NavLink className="navHeader" tag={Link} to="/">Home</NavLink> */}
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/Page">Page</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* <SwitchRoute /> */}
                {/* <Home /> */}
            </div>
        );
    }
}