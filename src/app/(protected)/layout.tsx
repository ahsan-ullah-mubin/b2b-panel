import { Sidebar } from "@/components/Common/AntdItem/Sidebar/Sidebar";
import ContentNavWrapper from "@/components/Common/ContentNavWrapper/ContentNavWrapper";
import { Layout } from "antd";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar />

      <ContentNavWrapper>{children}</ContentNavWrapper>
    </Layout>
  );
}
