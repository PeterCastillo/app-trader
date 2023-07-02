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

// prop-types is a library for typechecking of props
import VuiBox from "@/theme/components/VuiBox";
import PropTypes from "prop-types";

function SimmmpleLogo({ size }) {
  return (
    <VuiBox bgColor="white" borderradius={5} p={0}>
      <img src="/favicon.png" width={size} height={size} />
    </VuiBox>
  );
}
// Setting default values for the props of SimmmpleLogo
SimmmpleLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the SimmmpleLogo
SimmmpleLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimmmpleLogo;
