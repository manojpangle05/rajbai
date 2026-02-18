
import { useNavigate } from "react-router-dom"
import mainBanner1 from "../../assets/images/ml6.webp"
import mainBanner from "../../assets/images/ml5.webp"
import catBanner1 from "../../assets/images/ml3.webp"
import catBanner2 from "../../assets/images/ml8.webp"
import catBanner3 from "../../assets/images/ml4.webp"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { getAllProducts } from "../../redux/reducers/product/productSlice"
export const Home = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const getProducts = (filters: { category: string }) => {
        dispatch(getAllProducts(filters))
        navigate('/search')
    }
    return (
        <div className="max-w-[1300px] m-auto">
            <section className="grid-wrapper rounded-md my-[1rem] shadow-lg">
                <div className="big relative">
                    <img src={mainBanner} alt="main banner" />
                    <div className="main-banner-content absolute top-1.5 left-1.5 ">
                        <h4>Best one</h4>
                        <h5>A1 Chocolate</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                        <button onClick={() => getProducts({ category: '654328e9ff2dd51bb661f0ce' })} className="button text-white text-[0.91rem] px-[33px] py-[13px] rounded-[25px]">Buy Now</button>
                    </div>
                </div>
                <div onClick={() => getProducts({ category: '65432ca9ff2dd51bb661f24f' })} className="relative sm:cursor-pointer">
                    <img src={mainBanner1} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>BEST SALE</h4>
                        <h5>A2 Chocolate</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                    </div>
                </div>
                <div onClick={() => getProducts({ category: '65320ce235ca026efd0583c8' })} className="relative sm:cursor-pointer">
                    <img src={catBanner1} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>LAPTOPS MAX</h4>
                        <h5>A1 Chikki</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                    </div>
                </div>
                <div onClick={() => getProducts({ category: '65320ce635ca026efd0583cc' })} className="relative sm:cursor-pointer">
                    <img src={catBanner2} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>BEST SALE</h4>
                        <h5>Dairy Products</h5>
                        <p className="text-black"> shop the latest brand</p>
                    </div>
                </div>
                <div onClick={() => getProducts({ category: '654328a7ff2dd51bb661f0c0' })} className="relative sm:cursor-pointer">
                    <img src={catBanner3} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>NEW ARRIVAL</h4>
                        <h5>Best Chikki</h5>
                        <p className="text-black">From $599.00 or $21.62/mo.</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
