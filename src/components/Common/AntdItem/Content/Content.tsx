import { Content } from "antd/es/layout/layout";
import React from "react";



export function AppContent({ children }: { children: React.ReactNode }) {
  
  return (
    <Content style={{ background:'#FAFAFA'}}>
      <div
        style={{
          padding: 24,
          minHeight: 360,
        }}
      >
        {children}
      </div>
    </Content>
  );
}
