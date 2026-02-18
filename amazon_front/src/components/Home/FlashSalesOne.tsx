import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getCountdown } from '../../helper/Countdown';


const SampleNextArrow = memo(function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={` ${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
        </button>
    );
});

const SamplePrevArrow = memo(function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
        </button>
    );
});

const FlashSalesOne = () => {


    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,

                },
            },

        ],
    };

    const [timeLeft, setTimeLeft] = useState(getCountdown());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <section className="flash-sales pt-80">
            <div className="container container-lg">
                <div className="section-heading">
                    <div className="flex-between flex-wrap gap-8">
                        <h5 className="mb-0">Flash Sales Today</h5>
                        <div className="flex-align gap-16 mr-point">
                            <Link
                                to="/shop"
                                className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                            >
                                View All Deals
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="flash-sales__slider arrow-style-two">
                    <Slider {...settings}>
                        <div>
                            <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                <img
                                    src="../images/bg/flash-sale-bg1.png"
                                    alt=""
                                    className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                />
                                <div className="flash-sales-item__thumb d-sm-block d-none">
                                    <img src="../images/210.png" alt="" />
                                </div>
                                <div className="flash-sales-item__content ms-sm-auto">
                                    <h6 className="text-32 mb-20">New Pen</h6>
                                    <div className="countdown" id="countdown1">
                                        <ul className="countdown-list flex-align flex-wrap">
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="days" />
                                                {timeLeft.days}  Days
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="hours" />
                                                {timeLeft.hours}  Hours
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="minutes" />
                                                {timeLeft.minutes}  Min
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="seconds" />
                                                {timeLeft.seconds}  Sec
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                    >
                                        Shop Now
                                        <span className="icon text-xl d-flex">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                <img
                                    src="../images/bg/flash-sale-bg2.png"
                                    alt=""
                                    className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                />
                                <div className="flash-sales-item__thumb d-sm-block d-none">
                                    <img src="../images/210.png" alt="" />
                                </div>
                                <div className="flash-sales-item__content ms-sm-auto">
                                    <h6 className="text-32 mb-20">Pencil</h6>
                                    <div className="countdown" id="countdown2">
                                        <ul className="countdown-list flex-align flex-wrap">
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="days" />
                                                {timeLeft.days}  Days
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="hours" />
                                                {timeLeft.hours}  Hours
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="minutes" />
                                                {timeLeft.minutes}  Min
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="seconds" />
                                                {timeLeft.seconds}  Sec
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                    >
                                        Shop Now
                                        <span className="icon text-xl d-flex">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flash-sales-item rounded-16 overflow-hidden z-1 position-relative flex-align flex-0 justify-content-between gap-8">
                                <img
                                    src="../images/bg/flash-sale-bg2.png"
                                    alt=""
                                    className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 object-fit-cover z-n1 flash-sales-item__bg"
                                />
                                <div className="flash-sales-item__thumb d-sm-block d-none">
                                    <img src="../images/205.png" alt="" />
                                </div>
                                <div className="flash-sales-item__content ms-sm-auto">
                                    <h6 className="text-32 mb-20">File</h6>
                                    <div className="countdown" id="countdown3">
                                        <ul className="countdown-list flex-align flex-wrap">
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="days" />
                                                {timeLeft.days}  Days
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="hours" />
                                                {timeLeft.hours}  Hours
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="minutes" />
                                                {timeLeft.minutes}  Min
                                            </li>
                                            <li className="countdown-list__item text-heading flex-align gap-4 text-sm fw-medium">
                                                <span className="seconds" />
                                                {timeLeft.seconds}  Sec
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="/shop"
                                        className="btn btn-main d-inline-flex align-items-center rounded-pill gap-8 mt-24"
                                    >
                                        Shop Now
                                        <span className="icon text-xl d-flex">
                                            <i className="ph ph-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>

    )
}

export default FlashSalesOne