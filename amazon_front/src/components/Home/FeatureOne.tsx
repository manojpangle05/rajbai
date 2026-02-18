import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import { AppDispatch, RootState } from "../../redux/store"
import { Category, getCategories } from "../../redux/reducers/filters/filterSlice"
import { getAllProducts } from "../../redux/reducers/product/productSlice"

const FeatureOne = () => {

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
        speed: 1000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1699,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 424,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 359,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],
    };
    const [selctedCat, setSelectedCat] = useState("")
      const [query, setQuery] = useState("")
      const [active, setActive] = useState(false)
      const [dropdown, setDropdown] = useState(false)
      const [openCate, setOpenCat] = useState(false)
    const { categories } = useSelector((state: RootState) => state.filters)
      const dispatch: AppDispatch = useDispatch()
      const navigate = useNavigate()
      const handleCategory = (id: string) => {
        dispatch(getAllProducts({ category: id }))
        navigate(`/search?f=${id}`)
        setOpenCat(false)
      }
      useEffect(() => {
        dispatch(getCategories())
      }, [])
    return (
        <div className="feature" id="featureSection">
            <div className="container container-lg">
                <div className="position-relative arrow-center">
                    <div className="flex-align">
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
                            className="slick-next slick-arrow flex-center rounded-circle bg-white text-xl hover-bg-main-600 hover-text-white transition-1"
                        >
                            <i className="ph ph-caret-right" />
                        </button>
                    </div>
                    <div className="feature-item-wrapper">
                        <Slider {...settings}>
                             {categories && categories.map((cat: Category) => (
                            <div className="feature-item text-center" onClick={() => { handleCategory(cat?._id); setSelectedCat(cat?.title) }} key={cat?._id}>
                                <div className="feature-item__thumb rounded-circle">
                                    {/* <Link to="/shop" className="w-100 h-100 flex-center"> */}
                                         <img
    src={cat?.image ? cat.image : "../images/210.png"}
    alt={cat?.title}
    className="w-100 h-100 object-cover rounded-circle"
  />
                                    {/* </Link> */}
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        {/* <Link to="/shop" className="text-inherit"> */}
                       
                                                    <div  className="hover:text-black hover:bg-gray-200 bg-opacity-90 pl-5 my-2">{cat?.title}</div>
                                                 
                                                   {/* </Link> */}
                                    </h6>
                                    {/* <span className="text-sm text-gray-400">125+ Products</span> */}
                                </div>
                            </div>
                             ))}
                                 </Slider>
                        {/* <Slider {...settings}>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/210.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        OFFICE STATIONERY
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/201.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        SCHOOL STATIONERY
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/208.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        PACKING MATERIAL
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/202.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        COMPUTER STATIONERY
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/211.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        CLEANING MATERIALS
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/205.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        PAPER STATIONERY
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/209.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        FILE
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/202.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        BARCODE STICKER & RIBBON
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                             <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/209.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        FILE
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            <div className="feature-item text-center">
                                <div className="feature-item__thumb rounded-circle">
                                    <Link to="/shop" className="w-100 h-100 flex-center">
                                        <img src="../images/202.png" alt="" />
                                    </Link>
                                </div>
                                <div className="feature-item__content mt-16">
                                    <h6 className="text-lg mb-8">
                                        <Link to="/shop" className="text-inherit">
                                        BARCODE STICKER & RIBBON
                                        </Link>
                                    </h6>
                                    <span className="text-sm text-gray-400">125+ Products</span>
                                </div>
                            </div>
                            
                        </Slider> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeatureOne