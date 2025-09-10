"use client"
import { Layout } from "antd";
import React from "react";
import { NavBar } from "../Navbar/Navbar";
import { AppContent } from "../AntdItem/Content/Content";
import { UIStore } from "@/utils/store/UIStore";

export default function ContentNavWrapper({children}:{children:React.ReactNode}) {
  const getsidebarLayoutCollapsed = UIStore.useState(s => s.getsidebarLayoutCollapsed)
  return (
    <Layout
      style={{
        transition: "margin-left 0.3s ease",
      }}
      className={`${getsidebarLayoutCollapsed ? ' xl:ml-[80px]' : 'xl:ml-[280px]'}`}
    >
      <NavBar />
      <AppContent>{children}</AppContent>
    </Layout>
  );
}
