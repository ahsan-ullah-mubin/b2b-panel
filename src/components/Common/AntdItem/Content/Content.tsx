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

  `;

  return (
    <Content style={{ background: "#FAFAFA" }}>
      <style>{customClass}</style>
      <div
        style={{
          marginTop:64,
          padding: 24,
          minHeight: 360,
        }}
      >
        {children}
      </div>
    </Content>
  );
}
