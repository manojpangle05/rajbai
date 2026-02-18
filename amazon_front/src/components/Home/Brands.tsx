import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import { Link } from "react-router-dom";
// import { blogs } from "../../static/staticData";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { getAllBlogs } from "../../redux/reducers/blogs/blogSlice.ts";
import BlogCard from "../Cards/BlogCard.tsx"
import { brands } from "../../static/staticData";

const BrandsAndBlogs = () => {
  const dispatch: AppDispatch = useDispatch()
  const { blogs } = useSelector((state: RootState) => state.blog)
  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])
  return (
    <div className="">
      
      {blogs.length === 0 ? (
        <>
          Loading...
        </>
      ) : (
        <section className=" py-5 rounded-md sm:block justify-between px-[10px] ">
          {/* <h3 className="font-[550] text-[1.5rem] text-skin-base  hover:underline w-fit">Most Readed Blogs</h3> */}
          <div className="flex-center flex-wrap gap-8">
              <h3 className="mb-4">Most Readed Blogs</h3>
              </div>
          <div className="py-2 grid 400px:grid-cols-1 text-skin-base sm:grid-cols-2 sm:m-auto  place-items-center gap-5 lg:grid-cols-4  lg:flex justify-center items-center">
            {blogs.map((each, index) => {
              if (index < 4) {
                return (
                  <BlogCard key={index} blog={each} />
                )
              }
            })}


          </div>
        </section>

      )}
    </div>
  )
}

export default BrandsAndBlogs