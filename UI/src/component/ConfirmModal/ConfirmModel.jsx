import { useState } from "react";
import { Col, Form, Input, Row, Select, Modal } from "antd";

const ConfirmModel = (props) => {

    const [form] = Form.useForm();
    const { Option } = Select;
    const { open, title, feilds, checkFeilds, onCancel } = props;
    const [selectedCountry, setSelectedCountry] = useState('');

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        onCancel()
    };

    const handleCountryChange = (value) => {
        setSelectedCountry(value);
    };

    const countries = ['Country 1', 'Country 2', 'Country 3'];

    const onOk = () => {
        console.log("Clicked OK");
        form.submit();
    };



return (
    <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Col>
            <Modal
            title={title}
            open={open}
            onOk={onOk}
            onCancel={onCancel}
            >
                <Form
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    style={{
                    maxWidth: 600,
                    }}
                    scrollToFirstError
                >
                    { feilds && feilds?.map((item, index) => { 
                        const trimmedItem =  item.replace(/\s+/g, '')
                        return( 
                        <Form.Item
                            key={index}
                            name={trimmedItem}
                            label={item}
                            rules={[
                                {
                                required: true,
                                message: `Please input your ${item}`,
                                whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    ) }) }

                    { checkFeilds && checkFeilds?.map((item, index) => {
                        const trimmedItem =  item.replace(/\s+/g, '')
                        return( 
                        <Form.Item
                        name={trimmedItem}
                        label={item}
                        rules={[
                            {
                            required: true,
                            message: `Please select ${item}`,
                            },
                        ]}
                        >
                        <Select value={selectedCountry} onChange={handleCountryChange} style={{ width: 200, marginRight:'500px' }}>
                        <Option value="">Select a country</Option>
                        {countries.map((country) => (
                        <Option key={country} value={country}>
                            {country}
                        </Option>
                        ))}
                        </Select>
                        </Form.Item>
                    ) }) }

                </Form>
            </Modal>
        </Col>
    </Row>
);
};

export default ConfirmModel;