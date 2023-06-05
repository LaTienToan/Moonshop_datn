import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase'
import { collection, onSnapshot, doc, deleteDoc, updateDoc, increment } from 'firebase/firestore';


// IMG SHOP_CART
import cp_1 from '../img/shop-cart/cp-1.jpg'
import cp_2 from '../img/shop-cart/cp-2.jpg'
import cp_3 from '../img/shop-cart/cp-3.jpg'
import cp_4 from '../img/shop-cart/cp-4.jpg'

// IMG INSTA
import insta_1 from '../img/instagram/insta-1.jpg'
import insta_2 from '../img/instagram/insta-2.jpg'
import insta_3 from '../img/instagram/insta-3.jpg'
import insta_4 from '../img/instagram/insta-4.jpg'
import insta_5 from '../img/instagram/insta-5.jpg'
import insta_6 from '../img/instagram/insta-6.jpg'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {}

interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const Shop_cart = (props: Props) => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "cart"), (querySnapshot) => {
            const p: any = [];
            querySnapshot.forEach((doc) => {
                p.push(doc.data());
            });
            setCart(p)
        });
        return unsubscribe;
    }, []);

    const handleRemoveCart = async (item: any) => {
        const updatedProducts: any = products.map((i: any) => {
            if (i.id === item.id) {
                i.cart = false
            }
            return i
        })
        setProducts(updatedProducts)
        await deleteDoc(doc(db, "cart", item.id));
        toast.success("Xóa sản phẩm khỏi giỏ hàng thành công !");
    }

    const handleIncrease = (item: any) => {
        const itemRef = doc(db, 'cart', item.id);
        updateDoc(itemRef, { quantity: increment(1) });
    };

    const handleDecrease = (item: any) => {
        const itemRef = doc(db, 'cart', item.id);
        const newQuantity = item.quantity - 1;
        if (newQuantity >= 1) {
            updateDoc(itemRef, { quantity: newQuantity });
        } else {
            toast.warning("Số lượng sản phẩm không được nhỏ hơn 1 !");
        }
    };

    const cartTotal = (): number => {
        let totalPrice: number = 0;
        cart.forEach((item: CartItem) => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    };

    return (
        <>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><i className="fa fa-home" /> Trang chủ</Link>
                                <span>Giỏ hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Breadcrumb End */}
            {/* Shop Cart Section Begin */}
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng cộng</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((product: any, index) => (
                                                <tr key={product.id}>
                                                    <td className="cart__product__item" >
                                                        <img src={product.images} width={90} height={90} alt="" />
                                                        <div className="cart__product__item__title">
                                                            <h6>{product.name}</h6>
                                                            <div className="rating">
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                                <i className="fa fa-star" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="cart__price">$ {product.price}</td>
                                                    <td className="cart__quantity">
                                                        <div className="pro-qty">
                                                            <MinusOutlined onClick={() => handleDecrease(product)} />
                                                            <span className='countNumberCart'>{product.quantity}</span>
                                                            <PlusOutlined onClick={() => handleIncrease(product)} />
                                                        </div>
                                                    </td>
                                                    <td className="cart__total">$ {product.price * product.quantity}</td>
                                                    <td className="cart__close">
                                                        <span className="icon_close" onClick={() => handleRemoveCart(product)} />
                                                    </td>

                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn">
                                <Link to="#">Tiếp tục mua sắm</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn update__btn">
                                <Link to="#"><span className="icon_loading" />Cập nhật giỏ hàng</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Mã giảm giá</h6>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">Áp dụng</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <div className="cart__total__procced">
                                <h6>Tổng số giỏ hàng</h6>
                                <ul>
                                    <li>Tổng phụ <span>$ 750.0</span></li>
                                    <li>Tổng <span>$ {cartTotal()}</span></li>
                                </ul>
                                <Link to="#" className="primary-btn">Tiến hành kiểm tra</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Cart Section End */}
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
        </>

    )
}

export default Shop_cart