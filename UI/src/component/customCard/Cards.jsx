import React, { useState } from "react";
import { Row, Col, Button, Form, Input, Spin, Card } from "antd";
import ConfirmModel from "../ConfirmModal/ConfirmModel";
import backImg1 from "../Imgs/Design_01.jpg";
import backImg2 from "../Imgs/Design_02.jpg";
import backImg3 from "../Imgs/Design_03.jpg";
import backImg4 from "../Imgs/Design_04.jpg";
import backImg5 from "../Imgs/Design_05.jpg";
import backImg6 from "../Imgs/Design_06.jpg";
import backImg7 from "../Imgs/Design_07.jpg";
import logoImg from "../Imgs/logo.png";

const { Meta } = Card;

const cardData = [
    {
        id:1,
        bgImg: backImg1,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds:["Feature", "shoes color"],
        checkFeilds: ['test 1'],
        logo: logoImg
    },
    {
        id:2,
        bgImg: backImg2,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["Feature","specifications", "shoes color"],
        checkFeilds: ['1', '2', '3', '4']
    },
    {
        id:3,
        bgImg: backImg3,
        title:'Product title',
        description:'Lorem Picsum alberto torresi',
        feilds:["Feature","specifications", "shoes color", 'type', 'tone'],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3'],
        logo: logoImg

    },
    {
        id:4,
        bgImg: backImg4,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["Feature","specifications", "shoes color"],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3']
    },
    {
        id:5,
        bgImg: backImg5,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["specifications", "shoes color"],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3']
    },
    {
        id:6,
        bgImg: backImg6,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["Feature","specifications", "shoes color"],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3'],
        logo: logoImg
    },
    {
        id:7,
        bgImg: backImg7,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["Feature","specifications", "shoes color", 'tone'],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3']
    },
    {
        id:9,
        bgImg: backImg1,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
        feilds: ["Feature"],
        checkFeilds: ['Country 1', 'Country 2', 'Country 3'],
        logo: logoImg
    },
]

export const Cards = () => {
    const [form] = Form.useForm();
    const [ isVisible, setIsVisible ] = useState(false);
    const [ inputFeilds, setInputFeilds ] = useState();
    const [ checkFeilds, setCheckFeilds ] = useState();

    const handleClick = (ind, cardData ) => {
        console.log("I am CLICKed", ind,  cardData)
        setIsVisible(true) 
        setInputFeilds(cardData?.feilds)
        setCheckFeilds(cardData?.checkFeilds)
    }

return (
    <>
    <ConfirmModel
        title={"title here..."}
        open={isVisible}
        feilds={inputFeilds}
        checkFeilds={checkFeilds}
        onCancel={() => {setIsVisible(false)}}
    />
    <Row>
        {cardData.map((item, index) => {
            return(
                <>
                    <Col  onClick={() => { handleClick(index, item) }} style={{margin:'20px 15px' , textAlign:'center', borderRadius:'20px 20px 0 0 '}} key={index}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={
                            <div style={{ position:'relative', height:'10rem', width:'20rem', color:'white', background:`url(${item?.bgImg})`, backgroundSize:'cover' ,borderRadius:'20px 20px 0 0 '}}>
                                {(item?.logo) ? <img src={item?.logo} alt="Logo" style={{ position: 'absolute', top: 12, left: 10, height: '2rem', width: 'auto' }} /> : ''}
                                <span style={{ position: 'absolute', bottom: 15, left: 10, fontSize:'1.5rem', fontWeight:'700', color:"#2C2C2C" }} className="Testing">
                                    {item?.title}
                                </span>
                            </div>
                            }
                        >
                            <Meta title={item.title} description={item?.description} />
                        </Card>
                    </Col>
                </>
            )
        }) }
    </Row>
    </>
);
};