import { Table, Button, Image, Rate } from "antd";
import Title from "antd/lib/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getNameCateFromId,
  selectCategories,
} from "../../../redux/categorySlice";
import {
  deleteProduct,
  IProductItem,
  selectProductList,
} from "../../../redux/productSlice";

const AdminProduct = (props: any) => {
  const dispatch = useDispatch();

  const productList = useSelector(selectProductList);
  const categories = useSelector(selectCategories);

  console.log("prod", productList);
  // console.log("cate", categories);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Title level={3}>{name}</Title>,
    },
    {
      title: "Category",
      dataIndex: "category_id",
      key: "category_id",
      render: (category_id: string) => (
        <Title level={5}>
          {categories
            ? getNameCateFromId(categories, category_id)
            : "undefined"}
        </Title>
      ),
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (rating: number) => <Rate value={rating} disabled />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => <Title level={5}>${price}</Title>,
    },
    {
      title: "Image",
      dataIndex: "thumbnail_cdn",
      key: "thumbnail_cdn",
      render: (thumbnail_cdn: string) => (
        <Image width={80} src={thumbnail_cdn} />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (_: any, product: IProductItem) => {
        return (
          <>
            <Button type="primary">
              <Link to={`product/edit/${product._id}`}>Sửa</Link>
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => dispatch(deleteProduct(product._id))}
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
      <Table rowKey={"_id"} columns={columns} dataSource={productList} />
    </>
  );
};

export default AdminProduct;
