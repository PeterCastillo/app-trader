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

// Vision UI Dashboard PRO React base styles
import colors from "@/theme/assets/theme/base/colors";
import borders from "@/theme/assets/theme/base/borders";
import boxShadows from "@/theme/assets/theme/base/boxShadows";

// Vision UI Dashboard PRO React helper functions
import pxToRem from "@/theme/assets/theme/functions/pxToRem";

const { grey, info, transparent } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

export default {
  styleOverrides: {
    root: {
      minWidth: "fit-content !important",
      position: "relative",
      background: transparent.main,
      borderRadius: borderRadius.md,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: info.main,
      transition: "all 500ms ease",
    },
  },
};
