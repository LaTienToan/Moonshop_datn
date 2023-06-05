import React, { createContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../../api_slice/api_product'
import { Button, Checkbox, Form, Input, InputNumber } from "antd";
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { db } from '../../../firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase/firebase'
import { setUserLoggedIn } from './signIn'

import rp_1 from '../img/product/related/rp-1.jpg'
import rp_2 from '../img/product/related/rp-2.jpg'
import rp_3 from '../img/product/related/rp-3.jpg'
import rp_4 from '../img/product/related/rp-4.jpg'

// IMG INSTA
import insta_1 from '../img/instagram/insta-1.jpg'
import insta_2 from '../img/instagram/insta-2.jpg'
import insta_3 from '../img/instagram/insta-3.jpg'
import insta_4 from '../img/instagram/insta-4.jpg'
import insta_5 from '../img/instagram/insta-5.jpg'
import insta_6 from '../img/instagram/insta-6.jpg'


type Props = {}

const DetailProduct = (props: Props) => {

    // FORM START
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    // FORM END
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState<any>(1);
    const [cartCount, setCartCount] = useState<number>(0);
    const { id } = useParams()
    const { data: product, isLoading, error } = useGetProductQuery(id)
    const navigate = useNavigate();

    if (isLoading) return <div>loading</div>

    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Người dùng đã đăng nhập");
            handleAddToCart()
        } else {
            console.log("Người dùng chưa đăng nhập");
            // Hiển thị thông báo yêu cầu đăng nhập trước khi thêm sản phẩm vào giỏ hàng
        }
    });

    const handleAddToCart = () => {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if (userInfo) {
            const item = {
                id: product._id,
                name: product.product_name,
                images: product.product_images,
                price: product.product_price,
                quantity: quantity,
                cart: true,
                userId: userInfo.id
            }
            // Lưu thông tin sản phẩm vào collection cart trong database cloud firestore
            setDoc(doc(db, "cart", item.id), item, { merge: true })
                .then(() => {
                    // Hiển thị thông báo thêm vào giỏ hàng thành công
                    toast.success("Thêm vào giỏ hàng thành công !");
                    setCartCount(cartCount + quantity);
                })
                .catch((error) => {
                    console.error("Lỗi khi thêm sản phẩm vào giỏ hàng: ", error);
                    toast.error("Thêm vào giỏ hàng thất bại !");
                });
        } else {
            toast.warning("Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng");
            navigate("/signin");
        }
    }


    const checkCart = () => {
        getDoc(doc(db, "cart", product._id)).then((doc) => {
            if (doc.exists() && doc.data().cart) {
                toast.warning("Sản phẩm đã có trong giỏ hàng !");
            } else {
                handleAddToCart();
            }
        });
    };
    return (
        <div className='detail_product'>
            {/* Product Details Section Begin */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <Swiper
                                    loop={true}
                                    spaceBetween={10}
                                    // navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {product.product_images.map((item: any) => {
                                        return (
                                            <SwiperSlide>
                                                <img src={item} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                >
                                    {product.product_images.map((item: any) => {
                                        return (
                                            <SwiperSlide>
                                                <img src={item} />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{product.product_name}</h3>
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <span>( 138 reviews )</span>
                                </div>
                                <div className="product__details__price">$ {product.product_price} <span>$ 83.0</span></div>
                                <div className="product__details__widget">
                                    <Form
                                        name="basic"
                                        labelCol={{ span: 3 }}
                                        wrapperCol={{ span: 21 }}
                                        style={{ maxWidth: 600 }}
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                    >
                                        <Form.Item
                                            label="Màu sắc:"
                                            name="product_color"
                                        >
                                            {product.product_color.map((item_color: any) => {
                                                return (
                                                    <Radio.Group onChange={onChange} value={value}>
                                                        <Radio value={item_color}>{item_color}</Radio>
                                                    </Radio.Group>
                                                )
                                            })}
                                        </Form.Item>
                                        <Form.Item
                                            label="Size:"
                                            name="product_size"
                                        >
                                            {product.product_color.map((item_color: any) => {
                                                return (
                                                    <Radio.Group onChange={onChange} value={value}>
                                                        <Radio value={item_color}>{item_color}</Radio>
                                                    </Radio.Group>
                                                )
                                            })}
                                        </Form.Item>
                                        <Form.Item
                                            label="Số lượng:"
                                            name="product_quantity"
                                            initialValue={1}
                                        >
                                            <InputNumber onChange={(value) => setQuantity(value)} />
                                        </Form.Item>
                                        <Form.Item >
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                className="cart-btn"
                                                onClick={() => checkCart()}
                                            >
                                                Thêm vào giỏ hàng
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link active" data-toggle="tab" to="#tabs-1" role="tab">Description</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" data-toggle="tab" to="#tabs-2" role="tab">Specification</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" data-toggle="tab" to="#tabs-3" role="tab">Reviews ( 2 )</Link>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Mô tả sản phẩm</h6>
                                        <p>{product.desc_product}</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${rp_1})` }}>
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><Link to={rp_1} className="image-popup"><span className="arrow_expand" /></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Buttons tweed blazer</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${rp_2})` }}>
                                    <ul className="product__hover">
                                        <li><Link to={rp_2} className="image-popup"><span className="arrow_expand" /></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${rp_3})` }}>
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><Link to={rp_3} className="image-popup"><span className="arrow_expand" /></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${rp_4})` }}>
                                    <ul className="product__hover">
                                        <li><Link to={rp_4} className="image-popup"><span className="arrow_expand" /></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to="#">Slim striped pocket shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Details Section End */}
            {/* Instagram Begin */}
            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_1})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_2})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_3})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_4})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_5})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${insta_6})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram" />
                                    <Link to="#">@ ashion_shop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Instagram End */}
        </div>
    )
}
export default DetailProduct