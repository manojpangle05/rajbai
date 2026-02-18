import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/home/_banner.scss"
import Slider from "react-slick";
const BannerOne = () => {

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
            <button
                type="button" onClick={onClick}
                className={` ${className} slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { className, onClick } = props;

        return (

            <button
                type="button"
                onClick={onClick}
                className={`${className} slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
            </button>
        );
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


    };
    return (
        <div className="banner">
            <div className="container-fluid">
                <div className="banner-item rounded-24 overflow-hidden position-relative arrow-center">
                    <a
                        href="#featureSection"
                        className="scroll-down w-84 h-84 text-center flex-center bg-main-600 rounded-circle border border-5 text-white border-white position-absolute start-50 translate-middle-x bottom-0 hover-bg-main-800"
                    >
                        <span className="icon line-height-0">
                           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M213.66,130.34a8,8,0,0,1,0,11.32l-80,80a8,8,0,0,1-11.32,0l-80-80a8,8,0,0,1,11.32-11.32L128,204.69l74.34-74.35A8,8,0,0,1,213.66,130.34Zm-91.32,11.32a8,8,0,0,0,11.32,0l80-80a8,8,0,0,0-11.32-11.32L128,124.69,53.66,50.34A8,8,0,0,0,42.34,61.66Z"></path></svg>
                        </span>
                    </a>
                    <img
                        src="../images/bg/banner-bg.png"
                        alt=""
                        className="banner-img position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 z-n1 object-fit-cover rounded-24"
                    />
                    <div className="flex-align">


                    </div>
                    <div className="banner-slider">
                        <Slider {...settings}>
                            <div className="banner-slider__item">
                                <div className="banner-slider__inner flex-between position-relative">
                                    <div className="banner-item__content">
                                        <h1 className="banner-item__title bounce">
                                        Spring into Savings this April!
                                        </h1>
                                        <Link
                                            to="/shop"
                                            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                        >
                                            Explore Shop{" "}
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />{" "}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item__thumb">
                                        <img src="../images/1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="banner-slider__item">
                                <div className="banner-slider__inner flex-between position-relative">
                                    <div className="banner-item__content">
                                        <h1 className="banner-item__title">
                                        RAJBAI ONLINE STATIONERY
                                        </h1>
                                        <Link
                                            to="/shop"
                                            className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8"
                                        >
                                            Explore Shop{" "}
                                            <span className="icon text-xl d-flex">
                                                <i className="ph ph-shopping-cart-simple" />{" "}
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="banner-item__thumb">
                                        <img src="../images/2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerOne