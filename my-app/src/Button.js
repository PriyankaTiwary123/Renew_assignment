import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
export default function AppButtons({ ...props}) {
    return (
        <ButtonToolbar>
            <Button id={props.id}  onClick={props.onButtonClick} className={props.className} >{props.label}</Button>
        </ButtonToolbar>
    );
}