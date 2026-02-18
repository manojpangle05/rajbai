import { useEffect, useState } from "react";
import type { ColumnsType } from "antd/es/table";
import Table from "antd/es/table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/Store";
import {
  deleteCategory,
  getCategories,
} from "../../Redux/Reducers/pcategory/pcategorySlice";
import { useNavigate } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import DeleteModal from "../../components/DeleteModal";

const CategoryList = () => {
  const [del, setDel] = useState(false);
  const [id, setId] = useState("");

  const dispatch: AppDispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.pcategory
  );

  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  // ✅ Delete Category Handler
  const handleDelete = () => {
    dispatch(deleteCategory(id)).then(() => {
      setDel(false); // close modal
      dispatch(getCategories()); // refresh list
    });
  };

  // ✅ Auth Protection
  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, [user]);

  // ✅ Load Categories
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  // Table Interface
  interface ProductDataType {
    key: React.Key;
    title: string;
    image: string;
    CreatedAt: string;
    UpdatedAt: string;
    Action: any;
  }

  // Table Data
  const tableData: ProductDataType[] = categories.map(
    (cat: any, index: number) => ({
      key: index + 1,
      title: cat.title,
      image: cat.image,
      CreatedAt: new Date(cat.createdAt).toLocaleDateString(),
      UpdatedAt: new Date(cat.updatedAt).toLocaleDateString(),

      Action: (
        <div className="flex space-x-3">
          {/* ✅ Edit Button */}
        <AiOutlineEdit
  size={20}
  className="cursor-pointer hover:text-blue-500"
  onClick={() => navigate(`/admin/category/edit/${cat._id}`)}
/>

          {/* ✅ Delete Button */}
          <AiOutlineDelete
            size={20}
            className="cursor-pointer hover:text-red-500"
            onClick={() => {
              setDel(true);
              setId(cat._id);
            }}
          />
        </div>
      ),
    })
  );

  // Table Columns
  const columns: ColumnsType<ProductDataType> = [
    {
      title: "SNO.",
      dataIndex: "key",
    },

    {
      title: "Image",
      dataIndex: "image",
      render: (img: string) => (
        <img
          src={img || "/images/default-category.png"}
          alt="category"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },

    {
      title: "Title",
      dataIndex: "title",
    },

    {
      title: "Created At",
      dataIndex: "CreatedAt",
    },

    {
      title: "Updated At",
      dataIndex: "UpdatedAt",
    },

    {
      title: "Action",
      dataIndex: "Action",
    },
  ];

  return (
    <div className="my-4">
      <h3 className="text-xl font-semibold mb-4">
        Product Category List
      </h3>

      <Table columns={columns} dataSource={tableData} />

      {/* ✅ Delete Modal */}
      <DeleteModal
        openModal={setDel}
        modal={del}
        onClick={handleDelete}
      />
    </div>
  );
};

export default CategoryList;
