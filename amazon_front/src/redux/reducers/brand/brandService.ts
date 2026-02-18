import axios from "axios"
import { base_url } from "../../../static/staticData";

const getBrands = async () => {
  const res = await axios.get(`${base_url}/brand/`)
  return res.data
}

const createBrand = async (data: any) => {
  const res = await axios.post(`${base_url}/brand/`, data, {
    withCredentials: true,
  })
  return res.data
}

const deleteBrand = async (id: string) => {
  const res = await axios.delete(`${base_url}/brand/${id}`, {
    withCredentials: true,
  })
  return res.data
}

const updateBrand = async (id: string, data: any) => {
  const res = await axios.put(`${base_url}/brand/${id}`, data, {
    withCredentials: true,
  })
  return res.data
}

const brandService = {
  getBrands,
  createBrand,
  deleteBrand,
  updateBrand,
}

export default brandService
