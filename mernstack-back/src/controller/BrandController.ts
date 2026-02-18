import Brand from "../models/BrandModel.js"
import FancyError from "../utils/FancyError.js"
import asyncHandler from "express-async-handler"

export const createBrand = asyncHandler(async (req, res) => {
  const { title, image } = req.body

  // ✅ Validation
  if (!title) {
    throw new FancyError("Title field is mandatory to create Brand", 400)
  }

  if (!image) {
    throw new FancyError("Image field is mandatory to create Brand", 400)
  }

  try {
    const newBrand = await Brand.create({
      title,
      image,
    })

    res.status(201).json(newBrand)
  } catch (error) {
    throw new FancyError("Cannot create Brand", 500)
  }
  console.log("BODY:", req.body)

})


export const updateBrand = asyncHandler(async (req, res) => {
  const { id } = req.params
  const { title, image } = req.body

  if (!title) {
    throw new FancyError("Title field is mandatory to update Brand", 400)
  }

  try {
    const updatedBrand = await Brand.findByIdAndUpdate(
      id,
      {
        title,
        image,
      },
      { new: true }
    )

    if (!updatedBrand) {
      throw new FancyError("Brand not found", 404)
    }

    res.json(updatedBrand)
  } catch (error) {
    throw new FancyError("Cannot update Brand", 500)
  }
})

export const deleteBrand = asyncHandler(async (req, res) => {
  const { id } = req.params

  const deleted = await Brand.findByIdAndDelete(id)

  if (!deleted) {
    throw new FancyError("Brand not found", 404)
  }

  res.json({ message: "Brand deleted successfully" })

})

export const getBrand = asyncHandler(async (req, res) => {
  const { id } = req.params

  const brand = await Brand.findById(id)

  if (!brand) {
    throw new FancyError("Brand not found", 404)
  }

  res.json(brand)
})

export const getAllBrands = asyncHandler(async (req, res) => {
  try {
    const brands = await Brand.find()
    res.json(brands)
  } catch (error) {
    throw new FancyError("Cannot get all Brands", 500)
  }
})

