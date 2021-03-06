import { PHOTO_CATEGORY_OPTTIONS } from 'constants/global';
import Images from "constants/images";
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";



const PhotoForm = props => {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input id="titleId" name="title" placeholder="Eg: Wow wow"></Input>
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select id="categoryId" name="category" placeholder="What's your photo category" options={PHOTO_CATEGORY_OPTTIONS}></Select>
            </FormGroup>

            <FormGroup>
                <Label for="categoryId">Photo</Label>
                <div><Button type="button"outline color="primary">Random a photo</Button></div>
                <div><img width="200" height="200" src={Images.COLORFUL_BG} alt="img"/></div>
            </FormGroup>

            <FormGroup>
                <Button color="primary">Add to albums</Button>
            </FormGroup>
        </Form>
    );
};

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

export default PhotoForm;