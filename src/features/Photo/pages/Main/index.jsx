import React from 'react';
import PropTypes from 'prop-types';
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Banner from "../../../../components/Banner"
import Image from "../../../../constants/images"

MainPage.propTypes = {
    
};

function MainPage(props) {
    return (
      
        <div className="photo-main">
            <Banner title="Your awsome photo" backgroundUrl={Image.PINK_BG}/>
            <Container className="text-center">
                <Link to="/photos/add">Add new photo</Link>
            </Container>
        </div>
    );
}

export default MainPage;