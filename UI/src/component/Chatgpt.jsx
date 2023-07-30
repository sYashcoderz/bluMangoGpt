import React, { useState, useEffect } from "react";
import {Row, Col, Button, Form, Input, Spin } from "antd";
import { SendOutlined } from '@ant-design/icons';
import { Requestchatgpt } from "../Services/Chatgpt"
import { Cards } from './customCard/Cards';
import ConfirmModel from "./ConfirmModal/ConfirmModel";

const ChatGPT = () => {
    const [form] = Form.useForm();
    const [ apiData, setApiData ] = useState()
    const [isLoading, setIsLoading ] = useState(false)

const formItemLayout = {
    labelCol: {
    xs: {
        span: 24,
    },
    sm: {
        span: 8,
    },
    },
    wrapperCol: {
    xs: {
        span: 24,
    },
    sm: {
        span: 16,
    },
    },
};

const fetchData = async (values) => {
    console.log("Values in Fetch", values)
    setIsLoading(true)
    const response = await Requestchatgpt(values)
    const result = response?.choices[0]?.message?.content
    console.log("UI Result ==>>", result);
    setApiData(result);
    setIsLoading(false)
}

const onFinish = async (values) => {
    if(values){
        fetchData(values)
    }
};

console.log("apiData ==>>", apiData);

return (
    <Spin spinning={isLoading}> 
    <>
        {!apiData && <Row style={{height: '100vh'}} >
            {/* Temporary hide Input */}
            {false && <Col span={24} style={{ display: 'flex', alignItem:'center', justifyContent:'center' }}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                    width:'40%',
                    marginTop: '30px',
                    marginLeft: '70px',
                    color : 'white'
                    }}
                    scrollToFirstError
                >

                    <Form.Item
                        name="prompt"
                        rules={[
                            {
                            required: true,
                            message: "Please input to search",
                            whitespace: true,
                            },
                        ]}
                    >
                        <span style={{ display: 'flex' }}>
                        <Input />
                        <span style={{paddingLeft:'10px'}} >
                            <Button type="primary" htmlType="submit"  shape="circle" icon={<SendOutlined />} />
                        </span>
                        </span>
                    </Form.Item>
                </Form>
            </Col>}
            <Col>
                <Cards fetchData={fetchData} />
            </Col>
        </Row>}
        <Row>
            <Col style={{ padding : '0 100px', color:'black'}}>
                { apiData && <p style={{color:'black'}} > {apiData} </p> }
            </Col>
        </Row>
    </>
    </Spin>
);
};

export default ChatGPT;
