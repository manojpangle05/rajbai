import axios from "axios";
import { base_url } from "../../../utils/base_url";


// ✅ Get All Brands
const getBrands = async () => {
  const res = await axios.get(`${base_url}/brand/`, {
    withCredentials: true,
  });

  return res.data;
};


// ✅ Create Brand (Title + Image)
const createBrand = async (data: any) => {
  const res = await axios.post(`${base_url}/brand/`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};


// ✅ Delete Brand
const deleteBrand = async (id: string) => {
  const res = await axios.delete(`${base_url}/brand/${id}`, {
    withCredentials: true,
  });

  return res.data;
};


// ✅ Edit Brand (Update Title + Image)
const editBrand = async (id: string, data: any) => {
  const res = await axios.put(`${base_url}/brand/${id}`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.data;
};


const brandService = {
  getBrands,
  createBrand,
  deleteBrand,
  editBrand,
};

export default brandService;
