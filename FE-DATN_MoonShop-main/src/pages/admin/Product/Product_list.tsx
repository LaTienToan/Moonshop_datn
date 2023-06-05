import { Button, message, Popconfirm, Table } from 'antd';
import { Link } from 'react-router-dom';
import Column from 'antd/es/table/Column';
import { useGetProductsQuery, useRemoveProductMutation } from '../../../api_slice/api_product';
import { useGetCategoriesQuery } from '../../../api_slice/api_categories';

type Props = {}

const Product_list = (props: Props) => {
    
    const { data: listProduct = [], isLoading } = useGetProductsQuery();

    const [remove] = useRemoveProductMutation();

    const removeProduct = (key: number) => {
        remove(key as any).unwrap().then(() => {
            message.success("Xóa thành công!")
        })
    }

    const name_Category = async (id:any) => {
        const {data, isLoading} = await useGetCategoriesQuery()
        data?.map((item) => {
            if( item._id == id ){
                return item.name_category
            } else {
                return "Loading..."
            }
            
        })
    }

    name_Category("642075eb5ef24c95598534bf")

    if (isLoading) return <div>Loading...</div>;
    return (
        <>
            <Link style={{ color: 'white' }} to={'/admin/products/news'}>
                <Button type="primary" style={{ margin: '-40px 1200px 10px 0' }}>Thêm mới</Button>
            </Link>

            <Table
                dataSource={listProduct.map((item) =>  ({
                    key: item._id,
                    id_category: item.id_category,
                    id_voucher: item.id_voucher,
                    product_name: item.product_name,
                    material_product: item.material_product,
                    desc_product: item.desc_product,
                    quantity_number: item.quantity_number,
                }))}
            >

                <Column title="Danh mục" dataIndex="id_category" key="id_category" />
                <Column title="Mã giảm giá" dataIndex="id_voucher" key="id_voucher" />
                <Column title="Tên sản phẩm" dataIndex="product_name" key="product_name" />
                <Column title="Chất liệu" dataIndex="material_product" key="material_product" />
                <Column title="Mô tả" dataIndex="desc_product" key="desc_product" />
                <Column title="Số lượng" dataIndex="quantity_number" key="quantity_number" />
                <Column
                    title="Action"
                    key="action"
                    render={(product) => {
                        return (
                            <Popconfirm
                                placement="top"
                                title="Bạn có muốn xóa không?"
                                onConfirm={() => removeProduct(product.key)}
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

export default Product_list