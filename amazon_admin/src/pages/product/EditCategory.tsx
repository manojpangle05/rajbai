"use client"

import { useFormik } from "formik"
import { object, string } from "yup"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { AppDispatch, RootState } from "../../Redux/Store"
import { editPCategory, getCategories } from "../../Redux/Reducers/pcategory/pcategorySlice"

import Dropzone from "react-dropzone"
import { CloudUpload, X } from "lucide-react"

import { uploadImages, resetImages } from "../../Redux/Reducers/upload/uploadSlice"

const CatSchema = object({
  title: string().required("Title is Required"),
})

const EditCategory = () => {
  const { id } = useParams()
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()

  const { categories } = useSelector((state: RootState) => state.pcategory)
  const { images } = useSelector((state: RootState) => state.upload)

  const [selectedImage, setSelectedImage] = useState<any>(null)

  // Load categories
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  // Find category
  const category = categories.find((cat) => cat._id === id)

  // Upload Image
  useEffect(() => {
    if (selectedImage) {
      const formData = new FormData()
      formData.append("images", selectedImage)
      dispatch(uploadImages(formData))
    }
  }, [selectedImage])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: category?.title || "",
      image: category?.image || "",
    },
    validationSchema: CatSchema,

    onSubmit: (values) => {
      dispatch(
        editPCategory({
          id: id!,
          data: {
            title: values.title,
            image: images?.[0]?.url || values.image,
          },
        })
      )

      dispatch(resetImages())
      navigate("/admin/categorylist")
    },
  })

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-6">Edit Category</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Title */}
        <input
          type="text"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        {/* Preview Image */}
        <div>
          <p className="mb-2 font-medium">Category Image</p>

          <img
            src={
              images?.[0]?.url ||
              formik.values.image ||
              "/images/default-category.png"
            }
            alt="preview"
            className="w-32 h-32 rounded-full object-cover mb-3"
          />

          {/* Upload */}
          <Dropzone
            onDrop={(acceptedFiles) => {
              setSelectedImage(acceptedFiles[0])
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="h-40 border-2 border-dashed flex justify-center items-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <CloudUpload size={40} />
                <p className="ml-2">Upload New Image</p>
              </div>
            )}
          </Dropzone>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded"
        >
          Update Category
        </button>
      </form>
    </div>
  )
}

export default EditCategory
