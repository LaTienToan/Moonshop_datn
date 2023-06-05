import React from 'react'
import { useGetProductsQuery } from '../../../api_slice/api_product'
// IMG SHOP
import shop_1 from '../img/shop/shop-1.jpg'
import shop_2 from '../img/shop/shop-2.jpg'
import shop_3 from '../img/shop/shop-3.jpg'
import shop_4 from '../img/shop/shop-4.jpg'
import shop_5 from '../img/shop/shop-5.jpg'
import shop_6 from '../img/shop/shop-6.jpg'
import shop_7 from '../img/shop/shop-7.jpg'
import shop_8 from '../img/shop/shop-8.jpg'
import shop_9 from '../img/shop/shop-9.jpg'

// IMG INSTA
import insta_1 from '../img/instagram/insta-1.jpg'
import insta_2 from '../img/instagram/insta-2.jpg'
import insta_3 from '../img/instagram/insta-3.jpg'
import insta_4 from '../img/instagram/insta-4.jpg'
import insta_5 from '../img/instagram/insta-5.jpg'
import insta_6 from '../img/instagram/insta-6.jpg'
import { Link } from 'react-router-dom'

type Props = {}

const Shop = (props: Props) => {
    const { data: products = [], isLoading, error } = useGetProductsQuery()
    return (
        <div>
            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to={'/'}><i className="fa fa-home" />Trang chủ</Link>
                                <span>Cửa hàng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Shop Section Begin */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="section-title">
                                        <h4>Danh mục</h4>
                                    </div>
                                    <div className="categories__accordion">
                                        <div className="accordion" id="accordionExample">
                                            <div className="card">
                                                <div className="card-heading active">
                                                    <a data-toggle="collapse" data-target="#collapseOne">Đồ nữ</a>
                                                </div>
                                                <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><Link to="#">Áo khoác</Link></li>
                                                            <li><Link to="#">Váy đầm</Link></li>
                                                            <li><Link to="#">Áo sơ mi</Link></li>
                                                            <li><Link to="#">Áo phông</Link></li>
                                                            <li><Link to="#">Quần jean</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseTwo">Đồ nam</a>
                                                </div>
                                                <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><Link to="#">Áo khoác</Link></li>
                                                            <li><Link to="#">Váy đầm</Link></li>
                                                            <li><Link to="#">Áo sơ mi</Link></li>
                                                            <li><Link to="#">Áo phông</Link></li>
                                                            <li><Link to="#">Quần jean</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">Đồ trẻ em</a>
                                                </div>
                                                <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><Link to="#">Áo khoác</Link></li>
                                                            <li><Link to="#">Váy đầm</Link></li>
                                                            <li><Link to="#">Áo sơ mi</Link></li>
                                                            <li><Link to="#">Áo phông</Link></li>
                                                            <li><Link to="#">Quần jean</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFour">Phụ kiện</a>
                                                </div>
                                                <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><Link to="#">Áo khoác</Link></li>
                                                            <li><Link to="#">Váy đầm</Link></li>
                                                            <li><Link to="#">Áo sơ mi</Link></li>
                                                            <li><Link to="#">Áo phông</Link></li>
                                                            <li><Link to="#">Quần jean</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseFive">Mỹ phẩm</a>
                                                </div>
                                                <div id="collapseFive" className="collapse" data-parent="#accordionExample">
                                                    <div className="card-body">
                                                        <ul>
                                                            <li><Link to="#">Áo khoác</Link></li>
                                                            <li><Link to="#">Váy đầm</Link></li>
                                                            <li><Link to="#">Áo sơ mi</Link></li>
                                                            <li><Link to="#">Áo phông</Link></li>
                                                            <li><Link to="#">Quần jean</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__filter">
                                    <div className="section-title">
                                        <h4>Mua sắm theo giá</h4>
                                    </div>
                                    <div className="filter-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={33} data-max={99} />
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <p>Giá:</p>
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">Tìm kiếm</a>
                                </div>
                                <div className="sidebar__sizes">
                                    <div className="section-title">
                                        <h4>Tìm kiếm theo size</h4>
                                    </div>
                                    <div className="size__list">
                                        <label htmlFor="xxs">
                                            xxs
                                            <input type="checkbox" id="xxs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xs">
                                            xs
                                            <input type="checkbox" id="xs" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xss">
                                            xs-s
                                            <input type="checkbox" id="xss" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="s">
                                            s
                                            <input type="checkbox" id="s" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="m">
                                            m
                                            <input type="checkbox" id="m" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="ml">
                                            m-l
                                            <input type="checkbox" id="ml" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="l">
                                            l
                                            <input type="checkbox" id="l" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="xl">
                                            xl
                                            <input type="checkbox" id="xl" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Tìm theo kích thước</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Đen
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="whites">
                                            Trắng
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="reds">
                                            Đỏ
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greys">
                                            Xám
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="blues">
                                            Xanh
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="beige">
                                            Tông màu be
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="greens">
                                            Xanh lá
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark" />
                                        </label>
                                        <label htmlFor="yellows">
                                            Vàng
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                {products.map(item => (
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.product_images[0]})` }}>
                                                <div className="label new">Mới</div>
                                                <ul className="product__hover">
                                                    <li><Link to="img/shop/shop-1.jpg" className="image-popup"><span className="arrow_expand" /></Link></li>
                                                    <li><Link to="#"><span className="icon_heart_alt" /></Link></li>
                                                    <li><Link to="#"><span className="icon_bag_alt" /></Link></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><Link to={`/shop/detail/${item._id}`}>{item.product_name}</Link></h6>
                                                <div className="rating">
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <div className="product__price">500.000 VNĐ</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                                <div className="col-lg-12 text-center">
                                    <div className="pagination__option">
                                        <Link to="#">1</Link>
                                        <Link to="#">2</Link>
                                        <Link to="#">3</Link>
                                        <Link to="#"><i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Section End */}
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

export default Shop