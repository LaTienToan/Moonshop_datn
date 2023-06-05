import React from 'react'
import { Link } from 'react-router-dom'

// IMAGES LOGO
import logo2 from "../img/logo2.png"

// IMAGES PAYMENTS
import pay_1 from "../img/payment/payment-1.png"
import pay_2 from "../img/payment/payment-2.png"
import pay_3 from "../img/payment/payment-3.png"
import pay_4 from "../img/payment/payment-4.png"
import pay_5 from "../img/payment/payment-5.png"


type Props = {}

const Footer_component = (props: Props) => {
    return (
        <>
            {/* FOOTER SESSION START */}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <Link to="./index.html"><img src={logo2} style={{ width: '150px' }} alt=""></img></Link>
                                </div>
                                <p>Dưới đây là một số phương thức thanh toán của cửa hàng chúng tôi.</p>
                                <div className="footer__payment">
                                    <Link to="#"><img src={pay_1} alt=""></img></Link>
                                    <Link to="#"><img src={pay_2} alt=""></img></Link>
                                    <Link to="#"><img src={pay_3} alt=""></img></Link>
                                    <Link to="#"><img src={pay_4} alt=""></img></Link>
                                    <Link to="#"><img src={pay_5} alt=""></img></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>
                                    Đường dẫn nhanh</h6>
                                <ul>
                                    <li><Link to="#">Về chúng tôi</Link></li>
                                    <li><Link to="#">Các trang blog</Link></li>
                                    <li><Link to="#">Liên hệ</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4">
                            <div className="footer__widget">
                                <h6>Tài khoản</h6>
                                <ul>
                                    <li><Link to="#">Tài khoản của tôi</Link></li>
                                    <li><Link to="#">Theo dõi đơn hàng</Link></li>
                                    <li><Link to="#">Thanh toán</Link></li>
                                    <li><Link to="#">Danh sách yêu thích</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>BẢN TIN</h6>
                                <form action="#">
                                    <input type="text" placeholder="Địa chỉ email"></input>
                                    <button type="submit" className="site-btn">Đăng kí</button>
                                </form>
                                <div className="footer__social">
                                    <Link to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link to="#"><i className="fa fa-youtube-play"></i></Link>
                                    <Link to="#"><i className="fa fa-instagram"></i></Link>
                                    <Link to="#"><i className="fa fa-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            <div className="footer__copyright__text">
                                <p>Bản quyền &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                                    template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link
                                        to="https://colorlib.com" target="_blank">Colorlib</Link>
                                </p>
                            </div>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </div>
                    </div>
                </div>
            </footer>

            {/* FOOTER SESSION END */}
        </>
    )
}

export default Footer_component