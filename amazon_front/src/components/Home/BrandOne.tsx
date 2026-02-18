import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import { useDispatch, useSelector } from "react-redux"
import { getAllBrands } from "../../Redux/Reducers/brand/brandSlice"

const BrandOne = () => {
  const dispatch = useDispatch()

  // ✅ Get brands from redux
  const { brands } = useSelector((state) => state.brand)

  // ✅ Fetch brands when component loads
  useEffect(() => {
    dispatch(getAllBrands())
  }, [dispatch])

  // Slider arrows
  function SampleNextArrow(props) {
    const { className, onClick } = props
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
      </button>
    )
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100`}
      >
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path></svg>
      </button>
    )
  }

  // Slider settings
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
        speed: 1000,
        autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1599, settings: { slidesToShow: 5 } },
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 5 } },
      { breakpoint: 575, settings: { slidesToShow: 4 } },
      { breakpoint: 424, settings: { slidesToShow: 3 } },
      { breakpoint: 359, settings: { slidesToShow: 2 } },
    ],
  }

  return (
    <div className="brand py-80">
      <div className="container container-lg">
        <div className="brand-inner bg-color-one p-24 rounded-16">
          <div className="section-heading">
            <div className="flex-between flex-wrap gap-8">
              <h3 className="mb-0">Shop by Brands</h3>

             
<div className="flex-align">
     {/* <Link
                to="/shop"
                className="text-sm fw-medium text-gray-700 hover-text-main-600 position-relative"
              >
                View All Deals
              </Link> */}
                        <button
                            type="button"
                            id="feature-item-wrapper-prev"
                            className="slick-prev slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-left" />
                        </button>
                        <button
                            type="button"
                            id="feature-item-wrapper-next"
                            className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1 "
                        >
                            <i className="ph ph-caret-right" />
                        </button>
                    </div>

            </div>
          </div>

          {/* ✅ Brand Slider */}
          <div className="brand-slider arrow-style-two">
            <Slider {...settings}>
              {brands?.map((brand) => (
                <div key={brand._id} className="brand-item text-center">
                  
                  {/* ✅ Brand Image */}
                  <img
                    src={brand.image}
                    alt={brand.title}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                  />

                  {/* ✅ Brand Title */}
                  <p className="mt-2 text-sm">{brand.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandOne
