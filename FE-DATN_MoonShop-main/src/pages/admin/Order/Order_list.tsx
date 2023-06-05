import React, { useState } from 'react'
import { Space, Table, Select, Drawer, Button, Form, Input, InputNumber, Card, Typography, Descriptions } from 'antd';
import Paragraph from "antd/lib/typography/Paragraph";
import { Col, Row } from 'antd';
import '../../admin/Style/order.css';
// import mastercard from "../../../assets/images/mastercard-logo.png";

const { Column } = Table;

interface DataType {
    id: React.Key;
    name: string;
    phoneNumber: string;
    action: string,
    product: string,
    address: string;
}

const { Item } = Form;
const { TextArea } = Input;
const { Title, Text } = Typography;


const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onChange = (value: 1 | 10 | 3 | null) => {
    console.log('changed', value);
};

const data: DataType[] = [
    {
        id: '1',
        name: 'John',
        phoneNumber: 'Brown',
        action: 'Chờ Xác Nhận',
        product: "Áo Thun",
        address: 'New York No. 1 Lake Park',
    },
    {
        id: '2',
        name: 'John',
        phoneNumber: 'Brown',
        action: 'Chờ Xác Nhận',
        product: "Áo Thun",
        address: 'New York No. 1 Lake Park',
    },
    {
        id: '3',
        name: 'John',
        phoneNumber: 'Brown',
        action: 'Chờ Xác Nhận',
        product: "Áo Thun",
        address: 'New York No. 1 Lake Park',
    }
]
const imageUrl = "https://picsum.photos/150/150";

type Props = {}

const Order_list = (props: Props) => {
    const [visible, setVisible] = useState(false);
    const [visibleUpdate, setVisibleUpdate] = useState(false);
    const [record, setRecord] = useState<DataType | null>(null);
    const [form] = Form.useForm();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const showDrawer = (record: DataType) => {
        setRecord(record);
        setVisible(true);
    };
    const showDrawerUpdate = (record: DataType) => {
        setRecord(record);
        setVisibleUpdate(true);
    };

    const onClose = () => {
        setVisible(false);
        setVisibleUpdate(false);
    };

    const pencil = [
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={0}
        >
            <path
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
                className="fill-gray-7"
            ></path>
            <path
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
                className="fill-gray-7"
            ></path>
        </svg>,
    ];


    return (
        <div>
            {/* TABLE */}
            <Table dataSource={data}>
                <Column title="Mã đơn hàng" dataIndex="id" key="id" />
                <Column title="Mã vận đơn" dataIndex="id" key="id" />
                <Column title="Tên người nhận" dataIndex="name" key="name" />
                <Column title="Số Điện Thoại" dataIndex="phoneNumber" key="phoneNumber" />
                <Column title="Địa Chỉ" dataIndex="address" key="address" />
                <Column title="Sản Phẩm" dataIndex="product" key="product" />
                <Column title="Tình Trạng Đơn" dataIndex="action" key="action" />
                <Column
                    title="Chức Năng"
                    dataIndex="action"
                    key="action"
                    render={(text, record: DataType) => (
                        <Select
                            defaultValue="Thay Đổi Trạng Thái"
                            style={{ width: 170 }}
                            onChange={handleChange}
                            options={[
                                { value: 'Chờ Xác Nhận', label: 'Chờ Xác Nhận' },
                                { value: 'Xác Nhận', label: 'Xác Nhận' },
                                { value: 'Hủy', label: 'Hủy' },
                                { value: 'Thanh Toán', label: 'Thanh Toán' },
                                { value: 'Đang Giao Hàng', label: 'Đang Giao Hàng' },
                                { value: 'Đã Giao', label: 'Đã Giao' },
                            ]}
                        />
                    )}
                />
                <Column
                    title="Hành Động"
                    key="action"
                    render={(text, record: DataType) => (
                        <Space>
                            <a onClick={() => showDrawer(record)}>Chi tiết</a>
                            <a onClick={() => showDrawerUpdate(record)}>Sửa</a>
                        </Space>
                    )}
                />

            </Table>

            {/* CHI TIẾT ĐƠN HÀNG */}
            <Drawer
                title="Chi tiết đơn hàng"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visible}
                width={800}
            >
                <Row>
                    <Col span={24} className="mb-24">
                        <Card className='order-cart'>
                            <Row>
                                <Col
                                    xl={8}
                                    className="col-img"
                                >
                                    <div className="order-product-image">
                                        <img src={imageUrl} alt="" className="border10" />
                                    </div>
                                </Col>

                                <Col
                                    sm={24}
                                    lg={12}
                                    xl={14}
                                    className="mobile-24"
                                >
                                    <div className="h-full col-content p-20">
                                        <div className="ant-muse">
                                            <Title level={3}>Product Name</Title>
                                            <Title level={4} className="order-price">100$</Title>
                                            <Paragraph className="lastweek mb-36">
                                                From colors, cards, typography to complex elements, you
                                                will find the full documentation.
                                            </Paragraph>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                {/* PAYMENT */}
                <Row className='row-payment' >
                    <Col xs={12} >
                        <div
                            className="header-solid h-full ant-card-p-0">
                            <Row
                                className="ant-row-flex ant-row-flex-middle"
                            >
                                <Col xs={24} md={12}>
                                    <Title className="payment-method" level={3}>Product Name</Title>
                                </Col>
                            </Row>

                            <Row >
                                <Col span={2} md={22}>
                                    <Card className="payment-method-card">
                                        {/* <img src={mastercard} alt="mastercard" /> */}
                                        <h4 className="card-number">**** **** **** 7362</h4>
                                    </Card>
                                </Col>
                                <Col span={2} md={22}>
                                    <Title className="billing-info" level={3}>Billing Information</Title>
                                    <Card className="card-billing-info" >
                                        <div className="col-info">
                                            <Descriptions title="Oliver Liam">
                                                <Descriptions.Item label="Company Name" span={3}>
                                                    Viking Burrito
                                                </Descriptions.Item>
                                                <Descriptions.Item label="Email Address" span={3}>
                                                    oliver@burrito.com
                                                </Descriptions.Item>
                                                <Descriptions.Item label="VAT Number" span={3}>
                                                    FRB1235476
                                                </Descriptions.Item>
                                            </Descriptions>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col offset={3}>
                        <Title className='order-sumary' level={3}>Order Summary</Title>
                        <div>
                            <Row gutter={24}>
                                <Col span={24} className="order-info">
                                    <Title style={{ fontWeight: 600, color: '#8c8c8c' }} level={4}>Product Name</Title>
                                    <Title style={{ fontWeight: 600, color: '#8c8c8c' }} level={4}>Quantity: 1</Title>
                                    <Title style={{ fontWeight: 600, color: '#8c8c8c' }} level={4}>Price: $10.00</Title>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Title level={4}>Total: $10.00</Title>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Drawer>

            {/* CẬP NHẬT ĐƠN HÀNG */}
            <Drawer
                title="Cập nhật đơn hàng"
                placement="right"
                closable={true}
                onClose={onClose}
                visible={visibleUpdate}
                width={600}
                style={{ maxWidth: 600 }}
            >
                <Form form={form}

                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }} >
                    <Form.Item
                        name="name"
                        label="Tên Khách Hàng"
                        rules={[{ required: true, message: "Vui lòng nhập tên khách hàng" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="phoneNumber"
                        label="Số Điện Thoại"
                        rules={[{
                            required: true,
                            pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                            message: "Số điện thoại không đúng định dạng!",
                        }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="address"
                        label="Địa Chỉ"
                        rules={[{ required: true, message: "Địa chỉ khách hàng không được để trống" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="nameProduct"
                        label="Tên sản phẩm"
                        rules={[{ required: true, message: "Không được để trống" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="quantity"
                        label="Số lượng"
                        rules={[{
                            required: true, message: "Số lượng nhỏ nhất là một ",
                        }]}

                    >
                        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                    </Form.Item>

                    <Form.Item
                        name="voucher"
                        label="Voucher"
                        rules={[{ required: true, message: "Không được để trống" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="note"
                        label="Ghi chú"
                    >
                        <TextArea
                            rows={4}
                        />
                    </Form.Item>


                    <Form.Item style={{ textAlign: 'center' }}>
                        <Button style={{ backgroundColor: "#ca1515", marginLeft: '-4px' }} type="primary" htmlType="submit">
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>


            </Drawer>
        </div >
    )
}

export default Order_list;
