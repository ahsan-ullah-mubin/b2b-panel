// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: "#52c41a",
  },
  components: {
    Menu: {
      itemSelectedBg: "#FFF",
      // item:'#8E191C'

      itemColor: "#FFF",
      itemSelectedColor: "#8E191C",

      itemHoverBg: "#FFFFFF4D",
      itemHoverColor: "#FFF",
    },
    Layout: {
      siderBg: "#353535",
      // colorBgHeader: '#0B172B',
    },
    Typography: {
      titleMarginBottom: 0,
    },
    Button: {
      defaultBg: "#8E191C",
      defaultBorderColor: "#8E191C",
      defaultColor:"#FFF",
      defaultHoverBorderColor:"#8E191C",
      defaultHoverColor:"#8E191C"
    },
    Input:{
      hoverBorderColor:"#8E191C",
      activeBorderColor:"#8E191C",
    }
  },
};
