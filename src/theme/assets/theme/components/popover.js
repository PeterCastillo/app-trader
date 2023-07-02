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

// Vision UI Dashboard PRO React helper functions
import pxToRem from "@/theme/assets/theme/functions/pxToRem";

// Vision UI Dashboard PRO React base styles
import colors from "@/theme/assets/theme/base/colors";
import boxShadows from "@/theme/assets/theme/base/boxShadows";
import borders from "@/theme/assets/theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.lg,
    },
  },
};
