"use client"

import CustomInput from "../../components/CustomInput"
import { useFormik } from "formik"
import { object, string } from "yup"
import { AppDispatch, RootState } from "../../Redux/Store"
import { useDispatch, useSelector } from "react-redux"
import { SyncLoader } from "react-spinners"
import { createBrand } from "../../Redux/Reducers/brand/brandSlice"
import { useTheme } from "../../context/themecontent"

import Dropzone from "react-dropzone"
import { CloudUpload, X } from "lucide-react"
import { useEffect, useState } from "react"
import { uploadImages, resetImages } from "../../Redux/Reducers/upload/uploadSlice"

let BrandSchema = object({
  title: string().required("Title is Required"),
})

const AddBrand = () => {
  const dispatch: AppDispatch = useDispatch()
  const { isLoading } = useSelector((state: RootState) => state.brand)

  const { images } = useSelector((state: RootState) => state.upload)

  const { isDarkMode } = useTheme()

  const [brandImage, setBrandImage] = useState<any>(null)

  // ✅ Formik
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: BrandSchema,

    onSubmit: (values) => {
         console.log("Formik Values:", values)
  dispatch(
    createBrand({
      title: values.title,
      image: images?.[0]?.url || "",
    })
  )

  formik.resetForm()
  dispatch(resetImages())
},
  })

  // ✅ Upload Brand Image when selected
  useEffect(() => {
    if (brandImage) {
      const formData = new FormData()
      formData.append("images", brandImage)

      dispatch(uploadImages(formData))
    }
  }, [brandImage])

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
      <h3 className="font-medium text-2xl text-gray-900 dark:text-white mb-6">
        Add Brand
      </h3>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        {/* ✅ Brand Title */}
        <CustomInput
  name="title"
  value={formik.values.title}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  type="text"
  placeholder="Enter Brand Title"
/>


        {formik.touched.title && formik.errors.title ? (
          <div className="text-red-500 text-sm">
            {formik.errors.title}
          </div>
        ) : null}

        {/* ✅ Brand Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            Brand Image
          </label>

          {/* Preview */}
          {images?.length > 0 && (
            <div className="relative w-40 h-40 mb-4">
              <img
                src={images[0]?.url}
                alt="brand"
                className="w-full h-full object-cover rounded-lg"
              />

              <button
                type="button"
                onClick={() => dispatch(resetImages())}
                className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 p-1 rounded-full"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Dropzone */}
          <Dropzone
            onDrop={(acceptedFiles) => {
              setBrandImage(acceptedFiles[0])
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps()}
                className="flex items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800"
              >
                <input {...getInputProps()} />

                <div className="text-center">
                  <CloudUpload className="w-10 h-10 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-500">
                    Click or Drag & Drop Brand Image
                  </p>
                </div>
              </div>
            )}
          </Dropzone>
        </div>

        {/* ✅ Submit */}
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-gradient-to-r from-slate-700 to-red-500 text-white"
        >
          Add Brand
        </button>
      </form>

      {/* Loader */}
      <div
        className={`${
          isLoading ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center`}
      >
        <SyncLoader color={isDarkMode ? "#361AE3" : "#361AE3"} />
      </div>
    </div>
  )
}

export default AddBrand
