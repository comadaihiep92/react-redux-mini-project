import React from 'react';
import PropTypes from 'prop-types';
// import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss"
import { Container, Row, Col } from 'reactstrap';
const Header = props => {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a className="header__link header__title" target="_blank" rel="noopener noreferrer"  href="https://www.freelancer.com/dashboard">Stork</a>
                    </Col>
                    <Col xs="auto">
                        <NavLink className="header__link" exact to="/photos" activeClassName="header__link--active">Redux Project</NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;