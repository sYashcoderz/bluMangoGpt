import {Row, Col, Button, Form, Input, Spin } from "antd";
import React, { useState } from "react";

export const Cards = (setModalIsVisible, modalIsVisible) => {


    const handleClick = () => {
        console.log("I am CLICKed")
        setModalIsVisible(true)
    }
    return(
        <>
            <Row>
                <Col onClick={() => { handleClick() }} style={{border:'1px solid red', height:'30vh', width:'300px', borderRadius:'15px '}}>
                    <Row>
                        <Col style={{border:'1px solid green'}}><h2>Shoe Description</h2></Col>
                    </Row>
                    <Row style={{border:'1px solid green', background: "blue"}}>
                        <Col>tagline</Col>
                        <Col>description here</Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

