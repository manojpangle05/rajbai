import { useCallback, useEffect, useMemo, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/Store";
import {
  deleteProduct,
  getAllProducts,
  openModal,
} from "../../Redux/Reducers/product/productSlice";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../../components/DeleteModal";
import ProductModal from "../../components/ProductModal";

const AllProducts = () => {
  const [del, setDel] = useState(false);

  const [productId, setProductId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const dispatch: AppDispatch = useDispatch();
  const { products, modal, isSuccess } = useSelector(
    (state: RootState) => state.product
  );

  const navigate = useNavigate();
  const { message, user, isLoading, isError } = useSelector(
    (state: RootState) => state.auth
  );

  // ✅ Delete Product
  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteProduct(id)).then(() => {
        setDel(false);
        dispatch(getAllProducts());
      });
    },
    [dispatch]
  );

  // Auth Check
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [message, user, isLoading, isSuccess, isError]);

  // Fetch Products
  useEffect(() => {
    if (!modal && products?.length < 1) {
      dispatch(getAllProducts());
    }
  }, [modal]);

  interface ProdDataType {
    key: React.Key;
    title: string;
    price: number;
    brand: string;
    quantity: number;
    category: string;
    createdAt: string;
    action: any;
    totalRating: number;
  }

  // Table Data
  const tableData: Array<ProdDataType> = useMemo(() => {
    return products.map((prod, index) => ({
      key: index,
      title: prod.title,
      price: prod.price,
      brand: prod.brand?.title,
      category: prod.category?.title,
      totalRating: prod.totalRating,
      quantity: prod.quantity,
      createdAt: new Date(prod.createdAt).toLocaleDateString(),
      action: (
        <div className="flex space-x-2">
          {/* ✅ Edit */}
          <li
            className="cursor-pointer hover:text-blue-500"
            onClick={() => {
              setSelectedProduct(prod);
              setProductId(prod._id);
              dispatch(openModal(true));
            }}
          >
            <AiOutlineEdit size={20} />
          </li>

          {/* ✅ Delete */}
          <li
            className="cursor-pointer hover:text-red-500"
            onClick={() => {
              setProductId(prod._id);
              setDel(true);
            }}
          >
            <AiOutlineDelete size={20} />
          </li>
        </div>
      ),
    }));
  }, [products, dispatch]);

  const columns: ColumnsType<ProdDataType> = [
    { title: "SNO.", dataIndex: "key" },
    { title: "Title", dataIndex: "title" },
    { title: "Price", dataIndex: "price" },
    { title: "Brand", dataIndex: "brand" },
    { title: "Category", dataIndex: "category" },
    { title: "Rating", dataIndex: "totalRating" },
    { title: "Quantity", dataIndex: "quantity" },
    { title: "Date", dataIndex: "createdAt" },
    { title: "Action", dataIndex: "action" },
  ];

  return (
    <div className="my-4">
      <h3 className="font-Rubik font-[550] text-[1.52rem] my-4">
        All Products
      </h3>

      <Table columns={columns} dataSource={tableData} />

      {/* Delete Modal */}
      <DeleteModal
        openModal={setDel}
        modal={del}
        onClick={() => handleDelete(productId)}
      />

      {/* Edit Modal */}
      <ProductModal prod={selectedProduct} />
    </div>
  );
};

export default AllProducts;
