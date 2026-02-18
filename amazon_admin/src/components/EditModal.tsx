import { RxCross2 } from "react-icons/rx"
import CustomInput from "./CustomInput"
import Dropzone from "react-dropzone"
import { CloudUpload, X } from "lucide-react"

interface EditModalProps {
  openModal: (isOpen: boolean) => void
  modal: boolean
  title: string

  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void

  value: string

  /** ✅ NEW Props for Image */
  images?: any[]
  setBrandImage?: (file: any) => void
  resetImages?: () => void
}

const EditModal = ({
  openModal,
  modal,
  title,
  onSubmit,
  onChange,
  onBlur,
  value,

  images = [],
  setBrandImage,
  resetImages,
}: EditModalProps) => {
  return (
    <div>
      {/* Modal Content */}
      <div
        className={`absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-full z-50 transition-all ease-in 
        ${
          modal ? "scale-100 duration-200" : "scale-0 duration-200"
        } 
        p-4 bg-white dark:bg-gray-800 
        overflow-x-hidden overflow-y-auto 
        rounded-md shadow-lg dark:shadow-xl 
        min-[576px]:mx-auto min-[576px]:mt-7 
        min-[576px]:max-w-[500px] 
        min-[992px]:max-w-[800px]`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b dark:border-gray-600">
          <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-100">
            Edit {title}
          </h5>

          <button
            type="button"
            onClick={() => openModal(false)}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 
            rounded-lg w-8 h-8 flex justify-center items-center 
            dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="pt-4">
          <form className="p-4 space-y-4" onSubmit={onSubmit}>
            {/* ✅ Title Input */}
            <CustomInput
              id={title}
              name={title}
              placeholder={`Edit ${title}`}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />

            {/* =============================== */}
            {/* ✅ IMAGE UPDATE SECTION */}
            {/* =============================== */}

            {/* ✅ Preview Image */}
            {images?.length > 0 && (
              <div className="relative w-32 h-32">
                <img
                  src={images[0]?.url}
                  alt="brand"
                  className="w-full h-full rounded-md object-cover border"
                />

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={resetImages}
                  className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-1 hover:bg-red-500 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* ✅ Drag & Drop Upload */}
            {setBrandImage && (
              <Dropzone
                onDrop={(acceptedFiles) => {
                  setBrandImage(acceptedFiles[0])
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div
                    {...getRootProps()}
                    className="flex justify-center items-center 
                    h-36 border-2 border-dashed rounded-md 
                    cursor-pointer hover:border-blue-500 
                    transition-all"
                  >
                    <input {...getInputProps()} />
                    <div className="text-center space-y-1">
                      <CloudUpload className="mx-auto text-gray-400" />
                      <p className="text-sm text-gray-500">
                        Drag & Drop Brand Image Here
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            )}

            {/* ✅ Submit Button */}
            <button
              type="submit"
              className="px-5 py-2 rounded-md 
              bg-gradient-to-r from-slate-700 to-red-500 
              text-white transition-all hover:scale-105"
            >
              Update {title}
            </button>
          </form>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => openModal(false)}
        className={`${
          modal ? "block" : "hidden"
        } absolute top-0 left-0 z-40 
        bg-black/50 w-full h-screen`}
      />
    </div>
  )
}

export default EditModal
