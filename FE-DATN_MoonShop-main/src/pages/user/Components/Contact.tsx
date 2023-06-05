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

const Contact = (props: Props) => {
    return (
        <div>
            <div>
                {/* Breadcrumb Begin */}
                <div className="breadcrumb-option">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb__links">
                                    <Link to={'/'}><i className="fa fa-home" /> Trang chủ</Link>
                                    <span>Liên hệ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Breadcrumb End */}
                {/* Contact Section Begin */}
                <section className="contact spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="contact__content">
                                    <div className="contact__address">
                                        <h5>Thông tin liên lạc</h5>
                                        <ul>
                                            <li>
                                                <h6><i className="fa fa-map-marker" /> Địa chỉ</h6>
                                                <p>Nguyễn Cơ Thạch, Nam Từ Liêm, Hà Nội</p>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-phone" /> Phone</h6>
                                                <p><span>125-711-811</span><span>125-668-886</span></p>
                                            </li>
                                            <li>
                                                <h6><i className="fa fa-headphones" /> Support</h6>
                                                <p>Support.photography@gmail.com</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact__form">
                                        <h5>GỬI TIN NHẮN</h5>
                                        <form action="#">
                                            <input type="text" placeholder="Name" />
                                            <input type="text" placeholder="Email" />
                                            <input type="text" placeholder="Website" />
                                            <textarea placeholder="Message" defaultValue={""} />
                                            <button type="submit" className="site-btn">Gửi tin nhắn</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="contact__map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29799.804421933488!2d105.79939550180853!3d20.993617073043033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac927ce95957%3A0xe230355f8983adb9!2sThanh%20Xu%C3%A2n%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1681109282750!5m2!1sen!2s" height={780} style={{ border: 0 }} allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact Section End */}
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
            </div >
        </div >
    )
}

export default Contact