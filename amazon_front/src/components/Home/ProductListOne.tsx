import React from 'react'
// import ProductCard from "../Cards/ProductCard"
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllProducts, getAllWishlist } from "../../redux/reducers/product/productSlice";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/reducers/cart/cartSlice";
const ProductListOne = () => {
     const dispatch: AppDispatch = useDispatch()
        const { products, wishlist } = useSelector((state: RootState) => state.product)
        const { user } = useSelector((state: RootState) => state.user)
        useEffect(() => {
            dispatch(getAllProducts({ page: 1 }))
            if (user)
                dispatch(getAllWishlist())
        }, [])
        const navigate = useNavigate();

const handleWishlist = (id: string) => {
  if (!user) {
    navigate("/login");
  } else {
    dispatch(addToWishlist(id));
  }
};

const handleCart = (product: any) => {
  if (!user) {
    navigate("/login");
  } else {
    dispatch(addToCart(product));
  }
};

    return (
        <div className="product mt-24">
            <div className="container container-lg">
                <div className="row gy-4 g-12">
                 
                    {products?.map((product) => (
                              
                    <div className="col-xxl-3 col-lg-4 col-sm-4 col-6">
                        <div className="product-card px-8 py-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                            {/* <Link
                                to="/cart"
                                className="product-card__cart btn bg-main-50 text-main-600 hover-bg-main-600 hover-text-white py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
                            >
                                Add <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000" viewBox="0 0 256 256"><path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path></svg>
                            </Link> */}
                            <button
  onClick={() => handleCart(product)}
  className="z-[1]  py-2 rounded-lg bg-main-50 text-main-600 hover-bg-main-600 hover-text-white transition py-11 px-24 rounded-pill flex-align gap-8 position-absolute inset-block-start-0 inset-inline-end-0 me-16 mt-16"
>
  Add to <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#000" viewBox="0 0 256 256"><path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path></svg>
</button>
                            <Link
                                to={`/product/${product?._id}`} 
                                className="product-card__thumb flex-center"
                            >
                                <img  src={product.images![0]?.url} alt="" />
                            </Link>
                            <div className="product-card__content mt-12">
                                <div className="product-card__price mb-16">
                                    {/* <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                        {product.price}
                                    </span> */}
                                    <span className="text-heading text-md fw-semibold ">
                                        ₹ {product.price} <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                    </span>
                                </div>
                                <div className="flex-align gap-6">
                                    <span className="text-xs fw-bold text-gray-600">4.8</span>
                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#edaf09" viewBox="0 0 256 256"><path d="M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"></path></svg>
                                    </span>
                                    <span className="text-xs fw-bold text-gray-600">(17k)</span>
                                </div>
                                <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                    <Link to={`/product/${product?._id}`}  className="link text-line-2">
                                        {product.title}
                                    </Link>
                                </h6>
                                <div className="flex-align gap-4">
                                    <span className="text-main-600 text-md d-flex">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#edaf09" viewBox="0 0 256 256"><path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96h0v16a40,40,0,0,0,16,32v72a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V144a40,40,0,0,0,16-32V96ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-35.12,21.26,7.88,7.88,0,0,0-1.82-1.06A24,24,0,0,1,40,112v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm4.93-75.8a8.08,8.08,0,0,0-1.8,1.05A24,24,0,0,1,168,112v-8h48v8A24,24,0,0,1,204.93,132.2Z"></path></svg>
                                    </span>
                                    <span className="text-gray-500 text-xs">
                                        By Lucky Supermarket
                                    </span>
                                </div>
                                <div className="mt-12">
                                    <div
                                        className="progress w-100  bg-color-three rounded-pill h-4"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow={35}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    >
                                        <div
                                            className="progress-bar bg-main-600 rounded-pill"
                                            style={{ width: "35%" }}
                                        />
                                    </div>
                                    <span className="text-gray-900 text-xs fw-medium mt-8">
                                        Sold: 18/35
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                            ))}
                    
                </div>
            </div>
        </div>

    )
}

export default ProductListOne