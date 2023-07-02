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

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Vision UI Dashboard PRO React base styles
import colors from "@/theme/assets/theme/base/colors";
import breakpoints from "@/theme/assets/theme/base/breakpoints";
import typography from "@/theme/assets/theme/base/typography";
import boxShadows from "@/theme/assets/theme/base/boxShadows";
import borders from "@/theme/assets/theme/base/borders";
import globals from "@/theme/assets/theme/base/globals";

// Vision UI Dashboard PRO React helper functions
import boxShadow from "@/theme/assets/theme/functions/boxShadow";
import hexToRgb from "@/theme/assets/theme/functions/hexToRgb";
import linearGradient from "@/theme/assets/theme/functions/linearGradient";
import pxToRem from "@/theme/assets/theme/functions/pxToRem";
import rgba from "@/theme/assets/theme/functions/rgba";

// Vision UI Dashboard PRO React components base styles for @mui material components
import sidenav from "@/theme/assets/theme/components/sidenav";
import list from "@/theme/assets/theme/components/list";
import listItem from "@/theme/assets/theme/components/list/listItem";
import listItemText from "@/theme/assets/theme/components/list/listItemText";
import card from "@/theme/assets/theme/components/card";
import cardMedia from "@/theme/assets/theme/components/card/cardMedia";
import cardContent from "@/theme/assets/theme/components/card/cardContent";
import button from "@/theme/assets/theme/components/button";
import iconButton from "@/theme/assets/theme/components/iconButton";
import inputBase from "@/theme/assets/theme/components/form/inputBase";
import menu from "@/theme/assets/theme/components/menu";
import menuItem from "@/theme/assets/theme/components/menu/menuItem";
import switchButton from "@/theme/assets/theme/components/form/switchButton";
import divider from "@/theme/assets/theme/components/divider";
import tableContainer from "@/theme/assets/theme/components/table/tableContainer";
import tableHead from "@/theme/assets/theme/components/table/tableHead";
import tableCell from "@/theme/assets/theme/components/table/tableCell";
import linearProgress from "@/theme/assets/theme/components/linearProgress";
import breadcrumbs from "@/theme/assets/theme/components/breadcrumbs";
import slider from "@/theme/assets/theme/components/slider";
import avatar from "@/theme/assets/theme/components/avatar";
import tooltip from "@/theme/assets/theme/components/tooltip";
import appBar from "@/theme/assets/theme/components/appBar";
import tabs from "@/theme/assets/theme/components/tabs";
import tab from "@/theme/assets/theme/components/tabs/tab";
import stepper from "@/theme/assets/theme/components/stepper";
import step from "@/theme/assets/theme/components/stepper/step";
import stepConnector from "@/theme/assets/theme/components/stepper/stepConnector";
import stepLabel from "@/theme/assets/theme/components/stepper/stepLabel";
import stepIcon from "@/theme/assets/theme/components/stepper/stepIcon";
import select from "@/theme/assets/theme/components/form/select";
import formControlLabel from "@/theme/assets/theme/components/form/formControlLabel";
import formLabel from "@/theme/assets/theme/components/form/formLabel";
import checkbox from "@/theme/assets/theme/components/form/checkbox";
import radio from "@/theme/assets/theme/components/form/radio";
import autocomplete from "@/theme/assets/theme/components/form/autocomplete";
import input from "@/theme/assets/theme/components/form/input";
import flatpickr from "@/theme/assets/theme/components/flatpickr";
import swal from "@/theme/assets/theme/components/swal";
import container from "@/theme/assets/theme/components/container";
import popover from "@/theme/assets/theme/components/popover";
import buttonBase from "@/theme/assets/theme/components/buttonBase";
import icon from "@/theme/assets/theme/components/icon";
import svgIcon from "@/theme/assets/theme/components/svgIcon";
import link from "@/theme/assets/theme/components/link";
import dialog from "@/theme/assets/theme/components/dialog";
import dialogTitle from "@/theme/assets/theme/components/dialog/dialogTitle";
import dialogContent from "@/theme/assets/theme/components/dialog/dialogContent";
import dialogContentText from "@/theme/assets/theme/components/dialog/dialogContentText";
import dialogActions from "@/theme/assets/theme/components/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...swal,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
