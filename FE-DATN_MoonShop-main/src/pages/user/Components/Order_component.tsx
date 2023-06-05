import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import product_1 from "../img/product/details/product-1.jpg"
import product_2 from "../img/product/details/product-2.jpg"
import { url } from 'inspector';

type Props = {}

const Order_component = (props: Props) => {
  return (
    <div className="account_page order_page">
            <Menu
                className="menu"
                theme="light"
                mode="horizontal"
            >
                <Menu.Item key="">
                    <Link to={"?status=1"}>
                        Chờ xác nhận
                    </Link>
                </Menu.Item>

                <Menu.Item key="products">
                    <Link to={"?status=2"}>
                        Vận chuyển
                    </Link>
                </Menu.Item>

                <Menu.Item key="full">
                    <Link to={"?status=3"}>
                        Hoàn thành
                    </Link>
                </Menu.Item>

                <Menu.Item key="fail">
                    <Link to={"?status=4"}>
                        Đã hủy
                    </Link>
                </Menu.Item>

                <Menu.Item key="order">
                    <Link to={"?status=5"}>
                        Đổi trả 
                        <i>(5)</i>
                    </Link>
                </Menu.Item>
            </Menu>
            <div className="content">
                <div className="list_order">
                    <div className="item_order">
                        <div className="title_order">
                            <b>Đơn hàng: <i>012345</i></b>
                            <p>
                                <i>Đang trên đường giao đến bạn</i>
                            </p>
                        </div>
                        <hr />
                        <div className="detail_order">
                            <div className="img" style={{
                               backgroundImage: `url(${product_1})`,
                               backgroundPosition: "center",
                               backgroundSize: "cover",
                               backgroundRepeat: "no-repeat"
                            }}>
                            </div>
                            <div className="desc">
                                <b className='title_product'>Áo nam tay ngắn áo dài tay cộc có áo như không</b>
                                <p className="class_product">Phân loại sản phẩm: <i>Áo cộc, cao cổ</i></p>
                                <div className="price">
                                    <p className='quantity'>x1</p>
                                    <p className='total'>150.000 đ</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail_order">
                            <div className="img" style={{
                               backgroundImage: `url(${product_2})`,
                               backgroundPosition: "center",
                               backgroundSize: "cover",
                               backgroundRepeat: "no-repeat"
                            }}>
                            </div>
                            <div className="desc">
                                <b className='title_product'>Áo nam tay ngắn áo dài tay cộc có áo như không</b>
                                <p className="class_product">Phân loại sản phẩm: <i>Áo cộc, cao cổ</i></p>
                                <div className="price">
                                    <p className='quantity'>x1</p>
                                    <p className='total'>150.000 đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Order_component