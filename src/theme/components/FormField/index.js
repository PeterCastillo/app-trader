/** 

=========================================================
* ELION CORP React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// formik components
import { ErrorMessage, Field } from "formik";

// Vision UI Dashboard PRO React components
import VuiBox from "@/theme/components/VuiBox";
import VuiTypography from "@/theme/components/VuiTypography";
import VuiInput from "@/theme/components/VuiInput";
import { useState } from "react";
import VuiSelect from "@/theme/components/VuiSelect";

function FormField({ label, name, type, ...rest }) {
  const [inputType, setInputType] = useState(type);

  const toggleType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  return (
    <VuiBox mb={1.5}>
      <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <VuiTypography
          component="label"
          variant="caption"
          color="white"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </VuiTypography>
      </VuiBox>
      <Field {...rest} type={inputType} name={name} as={inputType === 'select' ? VuiSelect : VuiInput } />
      {type === 'password' && <VuiBox mt={0.75} textAlign="right">
        <VuiTypography component="div" variant="caption" color="white" onClick={() => toggleType()} style={{ cursor: 'pointer' }}>
          {inputType === 'password' ? 'Mostrar' : 'Ocultar'} contraseña
        </VuiTypography>
      </VuiBox>}
      <VuiBox mt={0.75}>
        <VuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormField;
