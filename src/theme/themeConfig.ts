// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
  },
  components:{
    Menu:{
      itemSelectedBg:"#FFF",
      // item:'#8E191C'
      itemColor:'#FFF',
      itemSelectedColor: '#8E191C',
      itemHoverBg:'#FFFFFF4D',
      itemHoverColor:'#FFF'

    },
     Layout: {
      siderBg: '#353535',
      // colorBgHeader: '#0B172B',
    },
  }
};
