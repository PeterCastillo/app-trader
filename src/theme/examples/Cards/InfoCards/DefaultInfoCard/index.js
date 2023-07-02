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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

import compensationCard from "@/theme/assets/images/background-card-compensation.png";

// Vision UI Dashboard PRO React components
import VuiBox from "@/theme/components/VuiBox";
import VuiTypography from "@/theme/components/VuiTypography";

function DefaultInfoCard({ color, icon, title, description, value }) {
  return (
    <Card sx={{ height: "100%", pt: "25px" }}>
      <VuiBox display="flex" justifyContent="center" mb="5px">
        <VuiBox
          display="grid"
          justifyContent="center"
          alignItems="center"
          bgColor={color}
          color="white"
          width="90px"
          height="90px"
          shadow="md"
          borderradius="50%"
        >
          <img src={icon} height="100%" width="100%" style={{borderRadius: "50%"}}/>
          {/* {compensationCard} */}
        </VuiBox>
      </VuiBox>
      <VuiBox textAlign="center" display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontFamily="Arial" fontWeight="bold" fontSize="20px" textTransform="capitalize" mb="0px">
          {title}
        </VuiTypography>

        {title && !value ? null : <Divider light  style={{margin: "0px"}} />}

        {value && (
          <VuiTypography variant="lg" color="white" fontFamily="Arial" fontWeight="bold" fontSize="28px" style={{margin: "15px 0"}} >
            {value}
          </VuiTypography>
        )}
        {description && (
          <VuiTypography variant="caption" color="text" fontWeight="regular">
            {description}
          </VuiTypography>
        )}
      </VuiBox>
    </Card>
  );
}

// Setting default values for the props of DefaultInfoCard
DefaultInfoCard.defaultProps = {
  color: "info",
  description: "",
};

// Typechecking props for the DefaultInfoCard
DefaultInfoCard.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default DefaultInfoCard;
