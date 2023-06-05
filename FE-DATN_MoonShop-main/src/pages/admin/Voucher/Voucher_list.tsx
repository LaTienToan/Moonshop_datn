import { Button, message, Popconfirm, Table } from 'antd';
import { Link } from 'react-router-dom';
import Column from 'antd/es/table/Column';
import {useGetVouchersQuery } from '../../../api_slice/api_voucher';
import moment from 'moment';

type Props = {}

const Voucher_list = (props: Props) => {
    
    const { data: listVoucher = [], isLoading } = useGetVouchersQuery();

    console.log(listVoucher);
    

    // const [remove] = useRemoveProductMutation();

    // const removeProduct = (key: number) => {
    //     remove(key as any).unwrap().then(() => {
    //         message.success("Xóa thành công!")
    //     })
    // }

    // const name_Category = async (id:any) => {
    //     const {data, isLoading} = await useGetCategoriesQuery()
    //     data?.map((item) => {
    //         if( item._id == id ){
    //             return item.name_category
    //         } else {
    //             return "Loading..."
    //         }
            
    //     })
    // }

    // name_Category("642075eb5ef24c95598534bf")

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Link style={{ color: 'white' }} to={'/admin/voucher/news'}>
                <Button type="primary" style={{ margin: '-40px 1200px 10px 0' }}>Thêm mới</Button>
            </Link>

            <Table
                dataSource={listVoucher.map((item) =>  ({
                    key: item._id,
                    id_product: item.id_product,
                    voucher_name: item.name,
                    discount: item.discount,
                    userUsed: item.userUsed,
                    code: item.code,
                    type: item.type,
                    quantity: item.quantity,
                    expirationDate: moment(item.expirationDate).format('DD/MM/YYYY HH:mm'),
                    description: item.description,
                }))}
            >
                <Column className='col-1' title="Mã Voucher" dataIndex="code" key="code" />
                <Column className='col-1' title="Tên Voucher" dataIndex="voucher_name" key="voucher_name" />
                <Column className='col-1' title="Tổng Voucher" dataIndex="quantity" key="quantity" />
                <Column className='col-1' title="Đã hết" dataIndex="userUsed" key="userUsed" />
                <Column className='col-1' title="Loại Voucher" dataIndex="type" key="type" />
                <Column className='col-3' title="Mô tả" dataIndex="description" key="description" />
                <Column className='col-2' title="Ngày hết hạn" dataIndex="expirationDate" key="expirationDate" />
                <Column
                    title="Action"
                    key="action"
                    className='col-2' 
                    render={(product) => {
                        return (
                            <Popconfirm
                                placement="top"
                                title="Bạn có muốn xóa không?"
                                // onConfirm={() => removeProduct(product.key)}
                                okText="Có"
                                cancelText="Không"
                            >
                                <Button type="primary" style={{ margin: '0 5px' }} danger>
                                    Xóa
                                </Button>

                                <Link style={{ color: 'white' }} to={`/admin/products/update/${product.key}`}>
                                    <Button type="primary" style={{ backgroundColor: 'green' }}>Cập nhật</Button>
                                </Link>
                            </Popconfirm>
                        );
                    }}
                ></Column>

            </Table >
        </>
    )
}

export default Voucher_list