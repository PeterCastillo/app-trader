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

// Vision UI Dashboard PRO React Base Styles
import colors from "@/theme/assets/theme/base/colors";
import typography from "@/theme/assets/theme/base/typography";
import borders from "@/theme/assets/theme/base/borders";

// Vision UI Dashboard PRO helper functions
import pxToRem from "@/theme/assets/theme/functions/pxToRem";

const { dark, white, grey, inputColors } = colors;
const { size, fontWeightRegular } = typography;
const { borderWidth, borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      display: "grid !important",
      placeItems: "center !important",
      width: "100% !important",
      height: "auto !important",
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${grey[700]} !important`,
      backgroundColor: `${white.main} !important`,
      backgroundClip: "padding-box !important",
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      appearance: "none !important",
      borderRadius: borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important",
    },

    input: {
      width: "100% !important",
      height: `${pxToRem(22)}`,
      padding: "0 !important",

      "&::-webkit-input-placeholder": {
        color: `${dark.main} !important`,
      },
    },
  },
};
