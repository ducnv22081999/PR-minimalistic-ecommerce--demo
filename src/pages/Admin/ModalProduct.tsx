import { useState } from "react";
import { Form, Input, Button, Radio, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import image from "antd/lib/image";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/productSlice";
import { useHistory } from "react-router-dom";

type RequiredMark = boolean | "optional";

const AddProductForm = () => {
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

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    console.log({
      name: nameProduct,
      categoryId: categoryProduct,
      rating: +ratingProduct,
      price: +priceProduct,
      thumbnail_cdn: imageProduct,
    });
    dispatch(
      addProduct({
        id: "",
        name: nameProduct,
        categoryId: categoryProduct,
        rating: +ratingProduct,
        price: +priceProduct,
        thumbnail_cdn: imageProduct,
      })
    );
    history.push("/admin/products");
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

export default AddProductForm;
