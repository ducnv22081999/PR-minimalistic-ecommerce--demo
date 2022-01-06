import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCategory } from "../../../redux/categorySlice";

type RequiredMark = boolean | "optional";

const AddCategoryForm = () => {
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

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(
      addCategory({
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

export default AddCategoryForm;
