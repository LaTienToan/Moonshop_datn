import { UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom'
import { Menu, message } from "antd";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../../firebase/firebase'
import { useEffect, useState } from 'react';
import { isAuthenticate } from '../../../utils/LocalStorage';
// Image
import logo from "../img/logo.png";
import logo2 from "../img/logo2.png";
import { Avatar, Dropdown } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

type Props = {}



const Header_component = (props: Props) => {
    const users = isAuthenticate();
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({});
    const [open, setOpen] = useState(false);
    const [ismolDal, setIsModal] = useState();
    const [cartItems, setCartItems] = useState<any>([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "cart"), (snapshot) => {
            const items = snapshot.docs.map((doc) => doc.data());
            setCartItems(items);
        });

        return () => unsubscribe();
    }, []);

    const totalQuantity = cartItems.reduce((acc: any, item: any) => acc + item.quantity, 0);

    const showModal = (e: any) => {
        setOpen(true);
        setIsModal(e.target.getAttribute("data"));
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        message.success("Đăng xuất thành công!", 2);
        navigate("/");
        setAuth(false);
    };

    const checckAuth = () => {
        if (users?.role === 1) {
            return (
                <Link
                    className="text-[5px] md:text-[8px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] w-[50px] mr-[30px] text-black"
                    to="/admin"
                >
                    Admin
                </Link>
            );
        } else {
            return null;
        }
    };
    const menu = (
        <Menu
            items={[
                {
                    key: "1",
                    label: (
                        <Link
                            className="text-[5px] md:text-[8px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] w-[50px] mr-[30px]"
                            to="info/account"
                        >
                            Hồ sơ của tôi
                        </Link>
                    ),
                },
                {
                    key: "2",
                    label: (
                        <Link
                            className="text-[5px] md:text-[8px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] w-[50px] mr-[30px]"
                            to="/order-history"
                        >
                            Lịch sử đặt hàng
                        </Link>
                    ),
                },
                {
                    key: "3",
                    label: checckAuth(),
                },
                {
                    key: "4",
                    label: (
                        <Link
                            className="text-[5px] md:text-[8px] lg:text-[15px] xl:text-[15px] 2xl:text-[15px] w-[50px] mr-[30px]"
                            to="/"
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </Link>
                    ),
                },
            ]}
        />
    );

    useEffect(() => {
        const user = isAuthenticate();
        if (user) {
            setAuth(true);
            setUser(user);
        }
    }, []);



    const onHandleCloseModal = () => {
        setOpen(false);
    };


    return (
        <>
            {/* <!-- Offcanvas Menu Begin --> */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><Link to="#"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                    <li><Link to="#"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </Link></li>
                </ul>
                <div className="offcanvas__logo" style={{ width: '98px' }}>
                    <Link to="./index.html">
                        <img src={logo2}></img>
                    </Link>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__auth">
                    <Link to="#">Đăng nhập</Link>
                    <Link to="#">Đăng kí</Link>
                </div>
            </div>
            {/* <!-- Offcanvas Menu End --> */}

            {/* <!-- Header Section Begin --> */}
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo" style={{ width: '150px', marginLeft: '140px' }}>
                                <Link to={'/'}><img src={logo2}></img></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to={'/'}>Trang chủ</Link></li>
                                    <li><Link to="#">Đồ nữ</Link></li>
                                    <li><Link to="#">Đồ Nam</Link></li>
                                    <li><Link to={'/shop'}>Cửa hàng</Link></li>
                                    <li><Link to="#">Trang</Link>
                                        <ul className="dropdown">
                                            <li><Link to={'/shop-cart'}>Giỏ hàng</Link></li>
                                            <li><Link to={'/checkout'}>Thanh toán</Link></li>
                                            <li><Link to={'/blog-detail'}>Chi tiết blog</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Liên hệ</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='col-lg-3'>
                            {auth ? (
                                <div
                                    className="header__right"
                                >
                                    <ul className="header__right__widget">
                                        <li><span className="icon_search search-switch"></span></li>
                                        <li>
                                            <Link to="#"><span className="icon_heart_alt"></span>
                                                <div className="tip">2</div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/shop-cart"><span className="icon_bag_alt"></span>
                                                {totalQuantity > 0 && <div className="tip">{totalQuantity}</div>}
                                            </Link>
                                        </li>
                                        <Dropdown overlay={menu} placement="bottom">
                                            <li className='svg_user' ><Link to="#"><UserOutlined />
                                            </Link>
                                            </li>
                                        </Dropdown>
                                    </ul>
                                </div>

                            ) : (
                                <div className="header__right">
                                    <div className="header__right__widget">
                                        <div className="header__right__auth">
                                            <Link to="/signin" data-custom="signin" onClick={showModal}>Đăng nhập</Link>
                                            <Link to="/signup" data-custom="signup" onClick={showModal}>Đăng kí</Link>
                                        </div>
                                        <ul className="header__right__widget">
                                            <li><span className="icon_search search-switch"></span></li>
                                            <li>
                                                <Link to="#"><span className="icon_heart_alt"></span>
                                                    <div className="tip">2</div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/shop-cart"><span className="icon_bag_alt"></span>
                                                    {totalQuantity > 0 && <div className="tip">{totalQuantity}</div>}
                                                </Link>
                                            </li>
                                            <li className='svg_user' >
                                                <Link to="#"><UserOutlined />
                                                    <div className="tip">2</div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header >
            {/* Header Section End */}
        </>
    );
};

export default Header_component