import { useEffect, useState } from "react";
import { Form, Input, Button, Select, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductList,
  IProductItem,
  selectProductList,
  updateProduct,
} from "../../../redux/productSlice";
import { useHistory, useParams } from "react-router-dom";
import { selectCategories } from "../../../redux/categorySlice";

type RequiredMark = boolean | "optional";

const EditProductForm = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;

  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    setImageProduct(e.fileList);
    return e && e.fileList;
  };

  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState("");
  const [quantilyProduct, setQuantilyProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [descriptionProduct, setDescriptionProduct] = useState("");
  const [imageProduct, setImageProduct] = useState<any>();

  interface IId {
    id: string;
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<IId>();

  const productList = useSelector(selectProductList);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    const getProductById = async () => {
      if (id && productList) {
        const product: IProductItem[] = await productList.filter(
          (product) => product._id === id
        );
        setNameProduct(product[0].name);
        setCategoryProduct(product[0].category_id);
        setRatingProduct(product[0].rating);
        setQuantilyProduct(product[0].quantily);
        setPriceProduct(product[0].price);
        setDescriptionProduct(product[0].description);
        // setImageProduct(product[0].thumbnail_cdn);
      }
    };
    if (productList) {
      getProductById();
    } else {
      dispatch(getProductList);
    }
  }, [productList]);

  const handleSubmit = () => {
    dispatch(
      updateProduct({
        _id: id,
        name: nameProduct,
        category_id: categoryProduct,
        rating: ratingProduct,
        quantily: quantilyProduct,
        price: priceProduct,
        description: descriptionProduct,
        thumbnail_cdn: imageProduct,
      })
    );
    history.push("/admin/product");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <Form.Item label="Name" required>
        <Input
          placeholder="Tên sản phẩm..."
          value={nameProduct}
          onChange={(e) => setNameProduct(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label="Category"
        rules={[{ required: true, message: "Please select category!" }]}
      >
        <Select
          placeholder="Danh mục sản phẩm..."
          value={categoryProduct}
          onChange={(e) => setCategoryProduct(e)}
        >
          {categories.map((category, index) => (
            <Option key={index} value={category._id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Rating"
        rules={[{ required: true, message: "Please select rating!" }]}
      >
        <Select
          placeholder="Đánh giá sản phẩm..."
          value={ratingProduct}
          onChange={(e) => setRatingProduct(e)}
        >
          <Option value="5">Rất tốt</Option>
          <Option value="4">Tốt</Option>
          <Option value="3">Bình thường</Option>
          <Option value="2">Tệ</Option>
          <Option value="1">Rất tệ</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Quantily" required>
        <Input
          placeholder="Số lượng..."
          value={quantilyProduct}
          onChange={(e) => setQuantilyProduct(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Price" required>
        <Input
          placeholder="Giá tiền..."
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
      </Form.Item>

      <Form.Item label="Description" required>
        <TextArea
          rows={4}
          value={descriptionProduct}
          onChange={(e) => setDescriptionProduct(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
      >
        <Image
          width={80}
          src={`http://localhost:6969/api/product/photo/${id}`}
        />
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditProductForm;
