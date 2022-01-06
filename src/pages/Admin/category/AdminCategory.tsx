import { Table, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCategory,
  ICategoryItem,
  selectCategories,
} from "../../../redux/categorySlice";

const AdminCategory = (props: any) => {
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Title level={3}>{name}</Title>,
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (_: any, category: ICategoryItem) => {
        return (
          <>
            <Button type="primary">
              <Link to={`category/edit/${category._id}`}>Sửa</Link>
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => dispatch(deleteCategory(category._id))}
            >
              Xóa
            </Button>
          </>
        );
      },
    },
  ];
  return (
    <>
      <Table rowKey={"_id"} columns={columns} dataSource={categories} />
    </>
  );
};

export default AdminCategory;
