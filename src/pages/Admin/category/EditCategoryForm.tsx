import { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useHistory, useParams } from "react-router-dom";
import {
  getCategories,
  ICategoryItem,
  selectCategories,
  updateCategory,
} from "../../../redux/categorySlice";

type RequiredMark = boolean | "optional";

const EditCategoryForm = () => {
  const [form] = Form.useForm();

  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>("optional");

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const [nameCategory, setNameCategory] = useState("");

  interface IId {
    id: string;
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<IId>();

  const categories = useSelector(selectCategories);

  useEffect(() => {
    const getProductById = async () => {
      if (id && categories) {
        const categoryList: ICategoryItem[] = await categories.filter(
          (category) => category._id === id
        );
        setNameCategory(categoryList[0].name);
      }
    };

    if (categories) {
      getProductById();
    } else {
      dispatch(getCategories());
    }
  }, [categories]);

  const handleSubmit = () => {
    dispatch(
      updateCategory({
        _id: id,
        name: nameCategory,
      })
    );
    history.push("/admin/category");
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
          placeholder="Tên thể loại..."
          value={nameCategory}
          onChange={(e) => setNameCategory(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditCategoryForm;
