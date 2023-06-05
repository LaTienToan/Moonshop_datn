import { Button, Form, Input, InputNumber } from 'antd';
import React, { useRef, useState } from 'react';
import { useAddProductMutation, useEditProductMutation, useGetProductQuery } from '../../../api_slice/api_product';
import { message } from 'antd';
import { IProduct } from '../../../interfaces/i_product';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { useNavigate, useParams } from 'react-router-dom';
import { useCreateColorsMutation, useGetColorsQuery } from '../../../api_slice/api_color';
import { useCreateCategoryMutation, useGetCategoriesQuery } from '../../../api_slice/api_categories';
import TextArea from 'antd/es/input/TextArea';
import { Divider, Select, Space } from 'antd';
import type { InputRef } from 'antd';



const Product_add = () => {
  
  const {id} = useParams()


  const navigate = useNavigate()
  const [update_data, { isLoading }] = useEditProductMutation()
  const [create_color, { isLoading: loading_color }] = useCreateColorsMutation()
  const { data: data_Color = [], isLoading: loadding_Color } = useGetColorsQuery()
  const [create_Category, { isLoading: loading_category }] = useCreateCategoryMutation()
  const { data: dataCategory = [], isLoading: loadinggetCategory } = useGetCategoriesQuery()
  const {data:data_product , isLoading:loading_data} = useGetProductQuery(id)




  // DATA PRODUCTS BY ID START


  // DATA PRODUCTS BY ID END




  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getBase64 = (file: RcFile): Promise<string> =>

    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChange: UploadProps['onChange'] = async ({ fileList: newFileList }) => {
    setFileList(newFileList);
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // ADD PRODUCT START
  const onFinish = async (values: IProduct) => {

    console.log(values);


    update_data(values)
    message.success("Cập nhật thông tin sản phẩm thành công!");
    navigate("/admin/products")

  };
  // ADD PRODUCT END

  // SELECT START

  const [name, setName] = useState('');
  const [name_color, setName_color] = useState('');
  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();

    const new_cate = { "name_category": name }
    create_Category(new_cate);
    setName('');
    message.success("Thêm danh mục mới thành công!");
  };


  const onNameChange_color = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName_color(event.target.value);
  };

  const addItem_color = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    console.log(name_color);
    

    const new_color = { "color_name": name_color }
    create_color(new_color)
    setName_color('');
    message.success("Thêm mới màu sắc thành công!");
  };

  // SELECT END



  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        // initialValues={{
        //   ['id_category']: data_product.id_category,
        //   ['id_voucher']: data_product.id_voucher,
        //   ['product_name']: data_product.product_name,
        //   ['material_product']: data_product.material_product,
        //   ['desc_product']: data_product.desc_product,
        //   ['quantity_number']: data_product.quantity_number,
        //   ['product_color']: data_product.product_color,
        // }}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="product_name"
          rules={[{ required: true, message: 'Tên sản phẩm là bắt buộc!' }]}
          // initialValue = {data.product_name}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tên danh mục"
          name="id_category"
          rules={[{ required: true, message: 'Danh mục sản phẩm là bắt buộc!' }]}
        >

          <Select
            style={{ width: "100%" }}
            placeholder="Chọn danh mục"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ padding: '0 8px 4px' }}>
                  <Input
                    placeholder="Danh mục mới"
                    ref={inputRef}
                    value={name}
                    onChange={onNameChange}

                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                    Thêm mới
                  </Button>
                </Space>
              </>
            )}
            options={dataCategory.map((item) => ({ label: item.name_category, value: item._id }))}
          />

        </Form.Item>

        <Form.Item
          label="Chất liệu"
          name="material_product"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giảm giá"
          name="id_voucher"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Màu sắc"
          name="product_color"
        // rules={[{ required: true, message: 'Thuộc tính màu sắc là bắt buộc!' }]}
        >

          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Chọn màu sắc"
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ padding: '0 8px 4px' }}>
                  <Input
                    placeholder="Màu sắc mới"
                    ref={inputRef}
                    value={name_color}
                    onChange={onNameChange_color}

                  />
                  <Button type="text" icon={<PlusOutlined />} onClick={addItem_color}>
                    Thêm mới
                  </Button>
                </Space>
              </>
            )}
            options={data_Color.map((item) => ({ label: item.color_name, value: item.color_name }))}
          />

        </Form.Item>



        <Form.Item
          label="Số lượng"
          name="quantity_number"
          rules={[{ required: true, message: 'Số lượng sản phẩm phải lớn hơn 0' }]}
        >
          <InputNumber min={0}/>
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="desc_product"
          rules={[{ required: true, message: 'Mô tả sản phẩm không được để trống' }]}
        >
          <TextArea rows={4} placeholder="Mô tả sản phẩm" />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="product_image"
        // rules={[{ required: true, message: 'Hình ảnh là bắt buộc' }]}
        >
          <Upload
            // action="https://res.cloudinary.com/Ductham087/image/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList?.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Lưu
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default Product_add 
