import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Form
import { Button, Checkbox, DatePicker, Divider, Form, Input, InputNumber, InputRef, Select } from 'antd';

// Noti
import { notification, Space, message } from 'antd';
import { useCreateVoucherMutation, useGetVouchersQuery } from '../../../api_slice/api_voucher';
import { IVoucher } from '../../../interfaces/i_voucher';
import { PlusOutlined } from '@ant-design/icons';
import { useGetProductsQuery } from '../../../api_slice/api_product';
type NotificationType = 'success';


// Form End

type Props = {}

const Voucher_add = (props: Props) => {

    const navigate = useNavigate()
    // Noti

    const [api, contextHolder] = notification.useNotification();
    const { data: dataProducts = [], isLoading: loading } = useGetProductsQuery()

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };
    const [name, setName] = useState('');
    const inputRef = useRef<InputRef>(null);
    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    // Noti End

    const [create_data, { isLoading }] = useCreateVoucherMutation()

    const { data } = useGetVouchersQuery()
    console.log("check data: ", data);

    const onFinish = (values: IVoucher) => {
        const new_voucher = {
            name: values.name,
            id_product: values.id_product,
            code: values.code,
            quantity: values.quantity,
            startDate: values.startDate,
            expirationDate: values.expirationDate,
            discount: values.discount,
            type: values.type
        }
        
        create_data(new_voucher)

        // message.success("Thêm thành công!");
        // navigate("/admin/voucher")


    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    if (isLoading) return <div>Loading...</div>;
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Tên voucher"
                    name="name"
                    rules={[{ required: true, message: 'Tên Voucher là bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mã voucher"
                    name="code"
                    rules={[{ required: true, message: 'Mã voucher là bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    className='col-md-4 col-12'
                    label="Loại voucher"
                    name="type"
                    rules={[{ required: true, message: 'Loại voucher là bắt buộc!' }]}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                    style={{ maxWidth: 600 }}
                >

                    <Select
                        style={{ width: "100%" }}
                        placeholder="Chọn kiểu voucher áp dụng"
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                            </>
                        )}
                        options={[
                            { value: 0, label: 'Theo phần trăm' },
                            { value: 1, label: 'Theo giá' },
                        ]}
                    />

                </Form.Item>

                <Form.Item
                    label="Giảm giá "
                    name="discount"
                    rules={[{ required: true, message: 'Giảm giá là bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Số lượng Voucher"
                    name="quantity"
                    rules={[{ required: true, message: 'Số lượng là bắt buộc!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Thời gian bắt đầu"
                    name="startDate"
                    rules={[
                        {
                            required: true,
                            message: 'Thời hạn voucher là bắt buộc!'
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    label="Thời gian kết thúc"
                    name="expirationDate"
                    rules={[
                        {
                            required: true,
                            message: 'Thời hạn voucher là bắt buộc!'
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>

                <Form.Item
                    className='col-md-4 col-12'
                    label="Tên sản phẩm "
                    name="id_product"
                    rules={[{ required: true, message: 'Hãy chọn sản phẩm có voucher!' }]}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 10 }}
                    style={{ maxWidth: 600 }}
                >
                    <Select
                        mode="tags"
                        style={{ width: "100%" }}
                        placeholder="Chọn sản phẩm áp dụng"
                        dropdownRender={(menu) => (
                            <>
                                {menu}
                            </>
                        )}
                        options={dataProducts.map((item) => ({ label: item.product_name, value: item._id }))}
                    />

                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default Voucher_add 
