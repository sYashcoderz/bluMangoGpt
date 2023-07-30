import { useEffect, useState } from "react";
import {
    Row,
    Col,
    Button,
    Form,
    Input,
    Select,
    Space,
    Checkbox,
    message,
    Upload, 
    Typography
} from "antd";
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { GptContext } from "../../App";
import { useContext } from "react";
import backImg from "../Imgs/Design_08.jpg";
import { CustomCol, CustomHeadTitle, span, CustomVendorAuthCol, CustomVendorAuthContent, SubmitButton } from "./styledComponent";
import { Fragment } from "react";
import Link from "antd/es/typography/Link";

const formItemLayout = {
    labelCol: {
    xs: {
        span: 24,
    },
    sm: {
        span: 4,
    },
    },
    wrapperCol: {
    xs: {
        span: 24,
    },
    sm: {
        span: 20,
    },
    },
};

const formItemLayoutWithOutLabel = {
    wrapperCol: {
    xs: {
        span: 24,
        offset: 0,
    },
    sm: {
        span: 20,
        offset: 4,
    },
    },
};

const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
    return e;
    }
    return e?.fileList;
};

const areas = [
    {
    label: 'Beijing',
    value: 'Beijing',
    },
    {
    label: 'Shanghai',
    value: 'Shanghai',
    },
];

const ElementCard = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const [checkedBox, setCheckedBox] = useState();
    const {cardData, setCardData } = useContext(GptContext)


    const handleShowInput = (e) => {
        console.log("handleShowInput", e.target.checked);
        setCheckedBox(e.target.checked)
    }

    const onFinish = async (values) => {
        console.log("Received values of form: ", values);
        setCardData( () => [...cardData, values])
    }

    const handleChange = () => {
            form.setFieldsValue({
            sights: [],
        });
    };

    const validateColorCode = (rule, value) => {
        const reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (value === undefined || value === '') {
            return Promise.reject(new Error('Hex color code is required!'));
        }
        if (!String(value).trim().match(reg)) {
            return Promise.reject(new Error('Please enter a valid hex color code'));
        }
        return Promise.resolve();
    }

    const validateHasHash = (_, value) => {
        if (value && value.includes('#')) {
        return Promise.resolve();
        }
        return Promise.reject(new Error('The input must contain at least one "#" symbol.'));
    };

    return(
        <Fragment>
        <Row span={24} style={{  minHeight:'100vh', backgroundImage:  `url(${backImg})`, backgroundPosition:'center', backgroundSize:'cover' }} >
            <CustomCol span={24}>
                <Col span={5}>
                    <CustomHeadTitle>Card From</CustomHeadTitle>
                    <Form
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        scrollToFirstError
                    >
                        <div>Card Title</div>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                required: true,
                                message: "Please input title!",
                                whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter title" />
                        </Form.Item>
                        
                        <span>Description</span>
                        <Form.Item
                            name="description"
                            rules={[
                                {
                                required: true,
                                message: "Please input yourdescription!",
                                whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder="Enter Description" />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            >
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between'}} >
                                    <Checkbox onChange={handleShowInput}> Enter Color Code</Checkbox>
                                    <span>
                                        <Link href="/all-templates">
                                            <Typography.Text
                                            style={{
                                                color: 'blue',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                fontWeight:500,
                                                textDecoration: 'underline'
                                            }}
                                            >
                                            Use Templates
                                            </Typography.Text>
                                        </Link>
                                    </span>
                                </div>
                        </Form.Item>

                        { checkedBox && 
                        <div>
                        <span>Hex Color Code</span>
                        <Form.Item
                            name="card-color"
                            style={{ width: '100%' }}
                            rules={[
                                {
                                required: true,
                                message: "Please input color-code",
                                whitespace: true,
                                },
                                {
                                    validator: validateColorCode,
                                },
                            ]}
                        >
                            <Input placeholder="Enter color code" />
                        </Form.Item>
                        </div>}

                        {/* Attributes */}
                        <Form.List
                            name="names"
                            rules={[
                            {
                                validator: async (_, names) => {
                                if (!names || names.length < 2) {
                                    return Promise.reject(new Error('At least 2 inputs'));
                                }
                                },
                            },
                            ]}
                        >
                            {(fields, { add, remove }, { errors }) => (
                            <>
                                {fields.map((field, index) => (
                                <Form.Item
                                    required={false}
                                    key={field.key}
                                >
                                    <Form.Item
                                    {...field}
                                    validateTrigger={['onChange', 'onBlur']}
                                    rules={[
                                        {
                                        required: true,
                                        whitespace: true,
                                        message: "Please input something or delete this field.",
                                        },
                                    ]}
                                    noStyle
                                    >
                                    <Input
                                        placeholder="Enter something"
                                        style={{ width: '95%' }}
                                    />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => remove(field.name)}
                                    />
                                    ) : null}
                                </Form.Item>
                                ))}

                                <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{
                                    width: '100%',
                                    }}
                                    icon={<PlusOutlined />}
                                >
                                    Add Attributes
                                </Button>
                                <Form.ErrorList errors={errors} />
                                </Form.Item>
                            </>
                            )}
                        </Form.List>

                        <Form.List name="dropdown">
                            {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                <Space
                                    key={key}
                                    align="baseline"
                                >
                                    <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Missing drop-down attribute name',
                                        },
                                    ]}
                                    >
                                    <Input placeholder="drop-down attribute name" />
                                    </Form.Item>

                                    <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Missing options for dropdown',
                                        },
                                    ]}
                                    >
                                    <Input placeholder="Enter options using , seprator" />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                </Space>
                                ))}
                                <Form.Item>
                                <Button style={{ width: '100%'}} type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Add Drop-down
                                </Button>
                                </Form.Item>
                            </>
                            )}
                        </Form.List>

                        <Form.List name="testarea">
                            {(fields, { add, remove }) => (
                                <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space
                                    key={key}
                                    align="baseline"
                                    >
                                    <Form.Item
                                        {...restField}
                                        name={[name, 'propmt']}
                                        rules={[
                                        {
                                            required: true,
                                            message: 'Prompt Required',
                                        },
                                        {
                                            validator: validateHasHash,
                                        },
                                        ]}
                                        
                                    >
                                        <Input.TextArea
                                        style={{ width: '320px', height: '100px' }}
                                        placeholder="Enter prompt here"
                                        autoSize={{ minRows: 2, maxRows: 6 }} 
                                        />
                                    </Form.Item>
                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button
                                    style={{ width: '100%' }}
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                    >
                                    Add prompt
                                    </Button>
                                </Form.Item>
                                </>
                            )}
                        </Form.List>

                        <span>Company Code</span>
                        <Form.Item
                            name="companyCode"
                            rules={[
                            {
                                required: true,
                                message: 'Missing Code',
                            },
                            ]}
                        >
                            <Select options={areas} onChange={handleChange} placeholder={'Select Company Code'} />
                        </Form.Item>

                        <Form.Item
                            name="upload"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                            extra="Please upload logo"
                            style={{width: '100%'}}
                            >
                            <Upload style={{width: '100%'}} name="logo" action="/upload.do" listType="picture">
                                <Button style={{width:'100%'}} icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item >
                            <SubmitButton type="primary" htmlType="submit">
                                Register
                            </SubmitButton>
                        </Form.Item>

                    </Form>
                </Col>
            </CustomCol>
        </Row>
        </Fragment>
    )
}

export default ElementCard;

