import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import brandService from "./brandService"

interface BrandState {
  brands: any[]
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

const initialState: BrandState = {
  brands: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
}

//
// ✅ Get All Brands
//
export const getAllBrands = createAsyncThunk(
  "brand/get-all",
  async (_, thunkAPI) => {
    try {
      return await brandService.getBrands()
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

//
// ✅ Create Brand
//
export const createBrand = createAsyncThunk(
  "brand/create",
  async (data: any, thunkAPI) => {
    try {
      return await brandService.createBrand(data)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

//
// ✅ Delete Brand
//
export const deleteBrand = createAsyncThunk(
  "brand/delete",
  async (id: string, thunkAPI) => {
    try {
      return await brandService.deleteBrand(id)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

//
// ✅ Update Brand
//
export const editBrand = createAsyncThunk(
  "brand/update",
  async ({ id, data }: any, thunkAPI) => {
    try {
      return await brandService.updateBrand(id, data)
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message)
    }
  }
)

//
// ✅ Slice
//
const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // ✅ Get Brands
      .addCase(getAllBrands.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.brands = action.payload
      })
      .addCase(getAllBrands.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      // ✅ Create Brand
      .addCase(createBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.brands.push(action.payload)
      })
      .addCase(createBrand.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      // ✅ Delete Brand
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brands = state.brands.filter(
          (b) => b._id !== action.meta.arg
        )
      })

      // ✅ Update Brand
      .addCase(editBrand.fulfilled, (state, action) => {
        state.brands = state.brands.map((brand) =>
          brand._id === action.payload._id ? action.payload : brand
        )
      })
  },
})

export default brandSlice.reducer
