import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import AdminRole from "./AdminRole";
import CFORole from "./CFORole";
const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const formik = useFormik({
    initialValues: {
      selectedOption: "",
    },
    onSubmit: (values) => {
      console.log(values.selectedOption);
      setSelectedOption(values.selectedOption);
    },
  });

  // Render the component based on the selected option
  const renderComponent = () => {
    if (selectedOption === "option1") {
      return <AdminRole />;
    } else if (selectedOption === "option2") {
      return <CFORole />;
    } else {
      return null; // Render nothing if no option is selected
    }
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="selectedOption">Select an option:</label>
          <Field as="select" name="selectedOption" id="selectedOption">
            <option value="">-- Select --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Field>
        </div>
        <button type="submit">Submit</button>
      </Form>

      {renderComponent()}
    </>
  );
};

export default DropDown;
