import express from "express"
import {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrand,
  updateBrand,
} from "../controller/BrandController.js"

import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js"

const router = express.Router()

// ✅ Public Route
router.get("/", getAllBrands)

// ✅ Admin Protected Routes
router.post("/", authMiddleware, isAdmin, createBrand)

router.get("/:id", authMiddleware, isAdmin, getBrand)

router.put("/:id", authMiddleware, isAdmin, updateBrand)

router.delete("/:id", authMiddleware, isAdmin, deleteBrand)

export default router
