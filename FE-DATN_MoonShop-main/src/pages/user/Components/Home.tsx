import React from 'react'
import { useGetProductsQuery } from '../../../api_slice/api_product'

import categori_1 from "../img/categories/category-1.jpg"
import categori_2 from "../img/categories/category-2.jpg"
import categori_3 from "../img/categories/category-3.jpg"
import categori_4 from "../img/categories/category-4.jpg"
import categori_5 from "../img/categories/category-5.jpg"

// IMAGES PRODUCTS
import pro_1 from "../img/product/product-1.jpg"
import pro_2 from "../img/product/product-2.jpg"
import pro_3 from "../img/product/product-3.jpg"
import pro_4 from "../img/product/product-4.jpg"
import pro_5 from "../img/product/product-5.jpg"
import pro_6 from "../img/product/product-6.jpg"
import pro_7 from "../img/product/product-7.jpg"
import pro_8 from "../img/product/product-8.jpg"
import { Link } from 'react-router-dom'

// IMAGES BANNER
import banner_1 from "../img/banner/banner-1.jpg"

// TRENDING IMAGES
import tren_ht_1 from "../img/trend/ht-1.jpg"
import tren_ht_2 from "../img/trend/ht-2.jpg"
import tren_ht_3 from "../img/trend/ht-3.jpg"

import tren_bs_1 from "../img/trend/bs-1.jpg"
import tren_bs_2 from "../img/trend/bs-2.jpg"
import tren_bs_3 from "../img/trend/bs-3.jpg"

import tren_f_1 from "../img/trend/f-1.jpg"
import tren_f_2 from "../img/trend/f-2.jpg"
import tren_f_3 from "../img/trend/f-3.jpg"

// DISCOUNT IMAGES
import discount from "../img/discount.jpg"

// INSTAGRAMS IMAGES
import inst_1 from "../img/instagram/insta-1.jpg"
import inst_2 from "../img/instagram/insta-2.jpg"
import inst_3 from "../img/instagram/insta-3.jpg"
import inst_4 from "../img/instagram/insta-4.jpg"
import inst_5 from "../img/instagram/insta-5.jpg"
import inst_6 from "../img/instagram/insta-6.jpg"


type Props = {}

const Home_component = (props: Props) => {
    const { data: products = [], isLoading } = useGetProductsQuery()

    console.log(products);



    return (
        <>
            {/* CATEGORIES SESSION START */}
            <section className="categories">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="categories__item categories__large__item set-bg" style={{ backgroundImage: `url(${categori_1})` }}>
                                <div className="categories__text">
                                    <h1>Quần áo nữ</h1>
                                    <p>Chào mừng bạn đã đến với cửa hàng của chúng tôi.</p>
                                    <Link to="#">Mua ngay</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${categori_2})` }}>
                                        <div className="categories__text">
                                            <h4>Quần áo nam</h4>
                                            <p>358 items</p>
                                            <Link to="#">Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${categori_3})` }}>
                                        <div className="categories__text">
                                            <h4>Quần áo trẻ em</h4>
                                            <p>273 items</p>
                                            <Link to="#">Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${categori_4})` }}>
                                        <div className="categories__text">
                                            <h4>Mỹ phẩm</h4>
                                            <p>159 items</p>
                                            <Link to="#">Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                                    <div className="categories__item set-bg" style={{ backgroundImage: `url(${categori_5})` }}>
                                        <div className="categories__text">
                                            <h4>Phụ kiện</h4>
                                            <p>792 items</p>
                                            <Link to="#">Mua ngay</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CATEGORIES SESSION END */}



            {/* PRODUCTS SESSION START */}

            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="section-title">
                                <h4>Sản phẩm mới</h4>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Tất cả</li>
                                <li data-filter=".women">Đồ nữ</li>
                                <li data-filter=".men">Đồ nam</li>
                                <li data-filter=".kid">Đồ trẻ em</li>
                                <li data-filter=".accessories">Phụ kiện</li>
                                <li data-filter=".cosmetic">Mĩ phẩm</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row property__gallery">
                        {products.map(item => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix women">
                                <div className="product__item">
                                    <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.product_images[0]})` }}>
                                        <div className="label new">Mới</div>
                                        <ul className="product__hover">
                                            <li><Link to="img/product/product-1.jpg" className="image-popup"><span
                                                className="arrow_expand"></span></Link></li>
                                            <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                            <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><Link to={`/shop/detail/${item._id}`}>{item.product_name}</Link></h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">300.000 VNĐ</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

            {/* PRODUCTS SESSION END */}


            {/* BANNER SESSION START */}

            <section className="banner set-bg" style={{ backgroundImage: `url(${banner_1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <div className="banner__slider owl-carousel">
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>Bộ sưu tập Chloe</span>
                                        <h1>Áo khoác</h1>
                                        <Link to="#">Mua ngay</Link>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>Bộ sưu tập Chloe</span>
                                        <h1>Áo khoác</h1>
                                        <Link to="#">Mua ngay</Link>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>Bộ sưu tập Chloe</span>
                                        <h1>Áo khoác</h1>
                                        <Link to="#">Mua ngay</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BANNER SESSION END */}


            {/* TRENDING SESSION START */}

            <section className="trend spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Xu hướng nóng</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_ht_1} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Túi xách</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">400.000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_ht_2} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Dây chuyền</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">600.000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_ht_3} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Áo thun</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">300.000 VNĐ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Bán chạy nhất</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_bs_1} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Áo thun</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">$ 59.0</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_bs_2} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Túi có khóa kéo</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">400.000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_bs_3} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Túi da </h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">400.000 VNĐ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="trend__content">
                                <div className="section-title">
                                    <h4>Feature</h4>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_f_1} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Váy</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">250.000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_f_2} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Bông tai</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">300.000 VNĐ</div>
                                    </div>
                                </div>
                                <div className="trend__item">
                                    <div className="trend__item__pic">
                                        <img src={tren_f_3} alt="" />
                                    </div>
                                    <div className="trend__item__text">
                                        <h6>Túi đeo chéo</h6>
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="product__price">400.000 VNĐ</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRENDING SESSION END */}

            {/* DISCOUNT SESSION START */}

            <section className="discount">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="discount__pic">
                                <img src={discount} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="discount__text">
                                <div className="discount__text__title">
                                    <span>Giảm giá</span>
                                    <h2>Mùa hè 2023</h2>
                                    <h5><span>Giảm giá</span> 50%</h5>
                                </div>
                                <div className="discount__countdown" id="countdown-time">
                                    <div className="countdown__item">
                                        <span>22</span>
                                        <p>Ngày</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>18</span>
                                        <p>Giờ</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>46</span>
                                        <p>Phút</p>
                                    </div>
                                    <div className="countdown__item">
                                        <span>05</span>
                                        <p>Giây</p>
                                    </div>
                                </div>
                                <a href="#">Mua ngay</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DISCOUNT SESSION END */}


            {/* SERVICE SESSION START */}

            <section className="services spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-car"></i>
                                <h6>Miễn phí vận chuyển</h6>
                                <p>Đối với tất cả các đơn đặt hàng trên 200.000 VNĐ</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-money"></i>
                                <h6>Đảm bảo hoàn trả lại tiền</h6>
                                <p>Nếu có vấn đề</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-support"></i>
                                <h6>Hỗ trợ trực tuyến 24/7</h6>
                                <p>Hỗ trợ tận tình</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="services__item">
                                <i className="fa fa-headphones"></i>
                                <h6>Thanh toán an toàn</h6>
                                <p>100% thanh toán an toàn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE SESSION END */}

            {/* IMSTAGRAM SESSION START */}

            <div className="instagram">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_1})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_2})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_3})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_4})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_5})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                            <div className="instagram__item set-bg" style={{ backgroundImage: `url(${inst_6})` }}>
                                <div className="instagram__text">
                                    <i className="fa fa-instagram"></i>
                                    <a href="#">@ ashion_shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* IMSTAGRAM SESSION END */}
        </>
    )
}

export default Home_component