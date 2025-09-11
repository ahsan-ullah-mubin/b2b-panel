import { Content } from "antd/es/layout/layout";
import React from "react";

export function AppContent({ children }: { children: React.ReactNode }) {
  const customClass = `
 .ant-menu.ant-menu-submenu-popup>.ant-menu {
    background-color: #353535;
}
  .ant-menu .ant-menu-submenu-selected>.ant-menu-submenu-title {
    color: #C76C6F;
}

.ant-radio-wrapper .ant-radio-checked .ant-radio-inner {
    border-color: #8E191C;
   background-color: transparent; 
}
.ant-radio-wrapper .ant-radio-inner::after {
    background-color: #8E191C;
   
}
    .ant-radio-wrapper:hover .ant-radio-inner {
  border-color: #8E191C !important;
}
 .ant-radio-wrapper {
  font-weight:550;
   color: #616060; 
  
}
   label.ant-radio-wrapper.ant-radio-wrapper-checked {
   font-weight:700;
  color:#8E191C
}

  `;

  return (
    <Content style={{ background: "#FAFAFA" }}>
      <style>{customClass}</style>
      <div
        style={{
          // marginTop:64,
          padding: 24,
          minHeight: 360,
        }}
      >
        {children}
      </div>
    </Content>
  );
}
