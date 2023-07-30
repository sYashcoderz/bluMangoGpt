import { Button, Card, Col, Row } from "antd";
import backImg1 from "../Imgs/Design_01.jpg";
import backImg2 from "../Imgs/Design_02.jpg";
import backImg3 from "../Imgs/Design_03.jpg";
import backImg4 from "../Imgs/Design_04.jpg";
import backImg5 from "../Imgs/Design_05.jpg";
import backImg6 from "../Imgs/Design_06.jpg";
import { SubmitButton, CustomCard } from "../ElementCard/styledComponent";

const cardData = [
    {
        id:1,
        bgImg: backImg1,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:2,
        bgImg: backImg2,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:3,
        bgImg: backImg3,
        title:'Product title',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:4,
        bgImg: backImg4,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:5,
        bgImg: backImg5,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:6,
        bgImg: backImg6,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:7,
        bgImg: backImg1,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
    {
        id:8,
        bgImg: backImg2,
        title:'Product Description',
        description:'Lorem Picsum alberto torresi',
    },
]

const TemplatesComponent = () => {

    const handleClick = (ind, cardData ) => {
        console.log("I am CLICKed", ind,  cardData)
    }

    return(
        <>
        <Row>
            {cardData.map((item, index) => {
                return(
                    <>
                        <Col  onClick={() => { handleClick(index, item) }} style={{margin:'20px 15px' , textAlign:'center', borderRadius:'20px 20px 0 0 '}} key={index}>
                            <CustomCard
                                hoverable
                                style={{ width: '100%', margin:0, padding:0}}
                                cover={
                                <div style={{ position:'relative', height:'10rem', width:'20rem', color:'white', background:`url(${item?.bgImg})`, backgroundPosition:'center', backgroundSize:'cover' ,borderRadius:'20px 20px 0 0 '}}>
                                <span style={{ position: 'absolute', bottom: 15, left: 10, fontSize:'1.5rem', fontWeight:'700', color:"#2C2C2C" }} className="Testing">
                                    {item?.title}
                                </span>
                                </div>
                                }
                            >
                                <div style={{margin:0, padding:0}}>
                                    <SubmitButton onClick={handleClick(index, item)} style={{border:'none'}} >Select Template</SubmitButton>
                                </div>
                            </CustomCard>
                        </Col>
                    </>
                )
            }) }
        </Row>
        </>
    )
}

export default TemplatesComponent;