import { useEffect, useState } from "react";
import { Form, Input, Button, Radio, Select, Upload, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { IProductItem, selectProducts } from "../../redux/productSlice";
import { useHistory, useParams } from "react-router-dom";

type RequiredMark = boolean | "optional";

const EditProductModal = () => {
  const [form] = Form.useForm();
  const { Option } = Select;

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
    return e && e.fileList;
  };

  const [nameProduct, setNameProduct] = useState("");
  const [categoryProduct, setCategoryProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [imageProduct, setImageProduct] = useState("");

  interface IId {
    id: string;
  }

  const dispatch = useDispatch();
  const { id } = useParams<IId>();

  const products = useSelector(selectProducts);

  useEffect(() => {
    const getProductById = async () => {
      if (id && products) {
        const product: IProductItem[] = await products.filter(
          (product) => product.id === id
        );
        setNameProduct(product[0].name);
        setCategoryProduct(product[0].categoryId);
        setRatingProduct(`${product[0].rating}`);
        setPriceProduct(`${product[0].price}`);
        setImageProduct(product[0].thumbnail_cdn);
      }
    };
    getProductById();
  }, []);

  const handleSubmit = () => {};

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
          // value={categoryProduct}
          onChange={(e) => setCategoryProduct(e)}
        >
          <Option value="0">a</Option>
          <Option value="1">b</Option>
          <Option value="2">c</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Rating"
        rules={[{ required: true, message: "Please select rating!" }]}
      >
        <Select
          placeholder="Đánh giá sản phẩm..."
          // value={ratingProduct}
          onChange={(e) => setRatingProduct(e)}
        >
          <Option value="5">Rất tốt</Option>
          <Option value="4">Tốt</Option>
          <Option value="3">Bình thường</Option>
          <Option value="2">Tệ</Option>
          <Option value="1">Rất tệ</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Price" required>
        <Input
          placeholder="Giá tiền..."
          value={priceProduct}
          onChange={(e) => setPriceProduct(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
      >
        <Image width={80} src={imageProduct} />
        <Upload
          name="logo"
          listType="picture"
          onChange={(e: any) => setImageProduct(e.file.name)}
        >
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

export default EditProductModal;
