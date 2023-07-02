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
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "@/theme/components/VuiBox";
import VuiTypography from "@/theme/components/VuiTypography";

// Vision UI Dashboard PRO React base styles
import typography from "@/theme/assets/theme/base/typography";

function Footer({ links }) {
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <VuiBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <VuiTypography variant="button" fontWeight="medium" color="white">
            {link.name}
          </VuiTypography>
        </Link>
      </VuiBox>
    ));

  return (
    <VuiBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()} Copyright Elion Corp
      </VuiBox>
      <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
        <VuiBox mr={{ xs: "20px", lg: "46px" }}>
          <VuiTypography component="a" href="#" variant="body2" color="white">
            Políticas de Privacidad
          </VuiTypography>
        </VuiBox>
        <VuiBox mr={{ xs: "20px", lg: "46px" }}>
          <VuiTypography component="a" href="#" variant="body2" color="white">
            Terminos y Condiciones
          </VuiTypography>
        </VuiBox>
        <VuiBox>
          <VuiTypography component="a" href="#" variant="body2" color="white">
            Contacto
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  links: [
    { href: "https://www.simmmple.com/", name: "Simmmple" },
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
