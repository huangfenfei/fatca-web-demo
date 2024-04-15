// theme/themeConfig.ts
import type { ThemeConfig } from "antd";
import { Noto_Sans_Thai } from 'next/font/google'

const font = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "700"]
})

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    fontFamily: font.style.fontFamily,
    colorPrimary: "#4F3793"
  },
  components: {
    // Button: {
    //   colorPrimary: '#00b96b',
    // },
    // Input: {
    //   lineHeight: 1
    // },
    // Select: {
    //   lineHeight: 1
    // }
    
  }, 
};

export default theme;
