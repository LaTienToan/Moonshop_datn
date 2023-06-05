import { Button, Form, Input, InputNumber } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useAddProductMutation } from '../../../api_slice/api_product';
import { message } from 'antd';
import { IProduct } from '../../../interfaces/i_product';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { useNavigate } from 'react-router-dom';
import { useCreateColorsMutation, useGetColorsQuery } from '../../../api_slice/api_color';
import { useCreateCategoryMutation, useGetCategoriesQuery } from '../../../api_slice/api_categories';
import TextArea from 'antd/es/input/TextArea';
import { Divider, Select, Space } from 'antd';
import type { InputRef } from 'antd';
import { uploadCloudinary } from '../../../api_slice/api_upload';



const Product_add = () => {
  const navigate = useNavigate()
  const [dataArrayImage, setDataArrayImage] = useState<any>([])
  const [create_data, { isLoading }] = useAddProductMutation()
  const [create_color, { isLoading: loading_color }] = useCreateColorsMutation()
  const { data: data_Color = [], isLoading: loadding_Color } = useGetColorsQuery()
  const [create_Category, { isLoading: loading_category }] = useCreateCategoryMutation()
  const { data: dataCategory = [], isLoading: loading_getCategory } = useGetCategoriesQuery()




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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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

    const new_color = { "color_name": name_color }
    create_color(new_color)
    setName_color("");
    message.success("Thêm mới màu sắc thành công!");
  };

  const dataPush = dataArrayImage.map((item: any) => item.url)
  // ADD PRODUCTS START
  const onFinish = (values: IProduct) => {
    const value: IProduct = {
      product_name: values.product_name,
      product_price: values.product_price,
      id_category: values.id_category,
      material_product: values.material_product,
      id_voucher: values.id_voucher,
      product_color: values.product_color,
      quantity_number: values.quantity_number,
      desc_product: values.desc_product,
      product_images: dataPush,
    }
    create_data(value)
    message.success("Thêm sản phẩm mới thành công!");
    // Clear the dataArrayImage state
    setDataArrayImage([]);

    // navigate("/admin/products")
  };

  // UPLOAD IMAGES START
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file } = options;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "vev60ldv");
    try {
      const res = await uploadCloudinary(formData);
      onSuccess(res);
    } catch (err) {
      onError({ err });
    }
  };


  const handleChange = ({ file: { status, error, uid, response } }: UploadChangeParam<UploadFile<any>>) => {
    switch (status) {
      case "done":
        const updatedDataArrayImage = [...dataArrayImage, { uid, url: response.data.url }];
        setDataArrayImage(updatedDataArrayImage);
        break;
      default:
        break;
    }
  };


  const handleDelete = (e: any) => {
    const shallowValue = [...dataArrayImage];
    const newDt = shallowValue.filter(item => item.uid !== e.uid)
    setDataArrayImage(newDt);

  };


  const handleChangeColor = (color: any) => {
    console.log(color);
  };



  if (isLoading) return <div>Loading...</div>;
  return (
    <div className='col-md-10 col-12 productAdd_page'>
      <Form
        name="basic"
        labelCol={{ offset: 1, span: 6 }}
        wrapperCol={{ offset: 1, span: 17 }}
        style={{ width: "100" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div
          style={{ display: "flex" }}
          className="item_pro"
        >
          <Form.Item
            className='col-md-6 col-12'
            label="Tên sản phẩm"
            name="product_name"
            rules={[{ required: true, message: 'Tên sản phẩm là bắt buộc!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='col-md-4 col-12'
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
                    <Button type="text" icon={<PlusOutlined />} onClick={addItem} >
                      Thêm mới
                    </Button>
                  </Space>
                </>
              )}
              options={dataCategory.map((item) => ({ label: item.name_category, value: item._id }))}
            />

          </Form.Item>
          <Form.Item
            className='col-md-4 col-12'
            label="Giảm giá"
            name="id_voucher"
          >
            <Input />
          </Form.Item>
        </div>

        <div
          style={{ display: "flex" }}
          className="item_pro"
        >
          <Form.Item
            className='col-md-6 col-12'
            label="Giá sản phẩm"
            name="product_price"
          >
            <Input />
          </Form.Item>

          <Form.Item
            className='col-md-4 col-12'
            label="Chất liệu"
            name="material_product"
          >
            <Input />
          </Form.Item>

        </div>


        <div
          style={{ display: "flex" }}
          className="item_pro"
        >
          <Form.Item
            className='col-md-6 col-12'
            label="Màu sắc"
            name="product_color"
            rules={[{ required: true, message: 'Thuộc tính màu sắc là bắt buộc!' }]}
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
                      placeholder="Tên màu"
                      ref={inputRef}
                      value={name_color}
                      onChange={onNameChange_color}
                    />
                    <Input
                      placeholder="Mã màu"
                      ref={inputRef}
                      value={name_color}
                      onChange={onNameChange_color}
                    />
                    <Button
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                      type="text" icon={<PlusOutlined />} onClick={addItem_color}>
                      Thêm
                    </Button>
                  </Space>
                </>
              )}
              options={data_Color.map((item) => ({ label: item.color_name, value: item.color_name }))}
            />

          </Form.Item>

          <Form.Item
            className='col-md-4 col-12'
            label="Số lượng"
            name="quantity_number"
            rules={[{ required: true, message: 'Số lượng sản phẩm phải lớn hơn 0' }]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
        </div>

        <div
          style={{ display: "flex" }}
          className="item_pro"
        >
          <Form.Item
            className='col-md-6 col-12'
            label="Mô tả"
            name="desc_product"
            rules={[{ required: true, message: 'Mô tả sản phẩm không được để trống' }]}
          >
            <TextArea rows={7} placeholder="Mô tả sản phẩm" />
          </Form.Item>

          <Form.Item
            className='col-md-4 col-12 '
            label="Hình ảnh"
            name="product_image"
          //rules={[{ required: true, message: 'Hình ảnh là bắt buộc' }]}
          >
            <Upload
              listType="picture-card"
              onPreview={handlePreview}
              customRequest={uploadImage}
              onChange={handleChange}
              onRemove={(e) => handleDelete(e)}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </Form.Item>
        </div>

        <Form.Item
          className='col-md-6 col-12'
          wrapperCol={{ offset: 8 }}
        >
          <Button
            style={{ backgroundColor: "#ca1515", color: "white", padding: "0 35px" }}
            htmlType="submit"
          >
            Lưu
          </Button>
        </Form.Item>

      </Form>
    </div>
  )
}

export default Product_add 
