import { ThemeConfig } from "antd";
import { error, gray, primary } from "./colors";

export const theme: ThemeConfig = {
  token: {
    fontFamily: "Work Sans",
    fontSize: 16,
    lineHeight: 1.184,
    colorPrimary: primary[600],
    paddingLG: 20,
    borderRadiusLG: 8,
    controlHeight: 40,
    colorTextLightSolid: "#000",

    fontSizeHeading1: 30,
    fontWeightStrong: 600,
  },
  components: {
    Tooltip: {
      colorText: "#fff",
      colorTextLightSolid: "#fff",
    },
    Card: {
      colorBorderSecondary: gray[200],
    },
    Form: {
      colorError: error[600],
      labelFontSize: 14,
      labelHeight: 16,
      labelColor: gray[700],
      verticalLabelPadding: "0 0 12px 0",
      itemMarginBottom: 20,
    },
    Switch: {
      trackMinWidth: 36,
    },
    Input: {
      borderRadius: 10,
      addonBg: "#fff",
    },
    InputNumber: {
      borderRadius: 10,
    },
    Select: {
      borderRadius: 10,
    },
    Button: {
      borderRadius: 10,
      fontWeight: 600,
    },
    Checkbox: {
      paddingXS: 12,
    },
    Divider: {
      fontSizeLG: 14,
      lineHeight: 1.142,
      colorTextHeading: gray[500],
    },
    Menu: {},
    Modal: {
      titleFontSize: 17,
    },
    DatePicker: {
      borderRadius: 10,
    },
    Slider: {
      railSize: 8,
      railBg: gray[200],
      trackBg: gray[200],
      trackHoverBg: gray[300],
      handleSize: 16,
      handleColor: gray[200],
      handleActiveColor: gray[300],
      borderRadius: 10,
    },
  },
};
