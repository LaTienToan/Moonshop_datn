import React from 'react'

// IMG INSTA
import insta_1 from '../img/instagram/insta-1.jpg'
import insta_2 from '../img/instagram/insta-2.jpg'
import insta_3 from '../img/instagram/insta-3.jpg'
import insta_4 from '../img/instagram/insta-4.jpg'
import insta_5 from '../img/instagram/insta-5.jpg'
import insta_6 from '../img/instagram/insta-6.jpg'
import { Link } from 'react-router-dom'

type Props = {}

const Checkout = (props: Props) => {
    return (
        <div>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><i className="fa fa-home" />Trang chủ</Link>
                                <span>Giỏ hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Checkout Section Begin */}
            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className="coupon__link"><span className="icon_tag_alt" /> <a href="#">Bạn có phiếu giảm giá?</a> Nhấp vào
                                ở đây để nhập mã của bạn.
                            </h6>
                        </div>
                    </div>
                    <form action="#" className="checkout__form">
                        <div className="row">
                            <div className="col-lg-8">
                                <h5>Chi tiết thanh toán</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Họ đệm<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Tên<span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__form__input">
                                            <p>Quốc gia <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Địa chỉ <span>*</span></p>
                                            <input type="text" />
                                            <input type="text" />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Thị xã/Thành phố <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Quốc gia liên bang <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Mã bưu / Zip <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Số điện thoại <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="checkout__form__input">
                                            <p>Địa chỉ email <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkout__form__checkbox">
                                            <label htmlFor="acc">
                                                Tạo tài khoản?
                                                <input type="checkbox" id="acc" />
                                                <span className="checkmark" />
                                            </label>
                                            <p>Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn đang giữ lại
                                                khách hàng đăng nhập ở <br />đầu trang</p>
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Mật khẩu tài khoản <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                        <div className="checkout__form__checkbox">
                                            <label htmlFor="note">
                                                Lưu ý về đơn đặt hàng của bạn, ví dụ: thông báo đặc biệt về giao hàng
                                                <input type="checkbox" id="note" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__form__input">
                                            <p>Ghi chú đặt hàng <span>*</span></p>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="checkout__order">
                                    <h5>Đơn đặt hàng của bạn</h5>
                                    <div className="checkout__order__product">
                                        <ul>
                                            <li>
                                                <span className="top__text">Sản phẩm</span>
                                                <span className="top__text__right">Tổng</span>
                                            </li>
                                            <li>01. Túi đeo <span>300.000 VNĐ</span></li>
                                            <li>02. Cặp da<br /> tote có khóa kéo <span>500.000 VNĐ</span></li>
                                            <li>03. Quần jean đen <span>200.000 VNĐ</span></li>
                                            <li>04. Áo bông <span>400.000 VNĐ</span></li>
                                        </ul>
                                    </div>
                                    <div className="checkout__order__total">
                                        <ul>
                                            <li>Tổng phụ <span>1.100.000 VNĐ</span></li>
                                            <li>Total <span>1.100.000 VNĐ</span></li>
                                        </ul>
                                    </div>
                                    <div className="checkout__order__widget">
                                        <label htmlFor="o-acc">
                                            Tạo một tài khoản?
                                            <input type="checkbox" id="o-acc" />
                                            <span className="checkmark" />
                                        </label>
                                        <p>Tạo tài khoản bằng cách nhập thông tin bên dưới. Nếu bạn là khách hàng cũ
                                            đăng nhập ở đầu trang.</p>

                                        <label htmlFor="check-payment">
                                            Thanh toán
                                            <input type="checkbox" id="check-payment" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="paypal">
                                            PayPal
                                            <input type="checkbox" id="paypal" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <button type="submit" className="site-btn">Đặt hàng</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Checkout Section End */}

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

export default Checkout