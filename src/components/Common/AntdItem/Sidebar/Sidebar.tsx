"use client";
import { UIStore } from "@/utils/store/UIStore";
import {
  DashboardOutlined,
  FileTextOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import "./Sidebar.css";
const { Sider } = Layout;
export function Sidebar() {
  const [selectedKey, setSelectedKey] = useState("1");
  type MenuItem = Required<MenuProps>["items"][number];
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  // const items: MenuItem[] = [
  //   getItem("Dashboard", "1", <AppstoreOutlined />),
  //   getItem("My Bookings", "sub1", <BookFilled />, [
  //     getItem("Flights", "3", <Plane className="size-4" />),
  //     getItem("Holydays", "4", <Calendar className="size-4" />),
  //     getItem("Visa", "5", <Book className="size-4" />),
  //   ]),
  //   getItem("Payment Ledger", "6", <PhoneCall className="size-4" />),
  //   getItem("Manage Deposit Request", "7", <PhoneCall className="size-4" />),
  //   // Bottom items
  //   getItem("Support", "8", <CustomerServiceOutlined />),
  //   getItem("Settings", "9", <SettingOutlined />),
  // ];

  const items: MenuItem[] = [
    { key: "1", label: "Dashboard", icon: <DashboardOutlined /> },
    {
      key: "2",
      label: "Users",
      icon: <UserOutlined />,
      children: [
        { key: "2-1", label: "All Users" },
        { key: "2-2", label: "Add User" },
      ],
    },
    { key: "3", label: "Products", icon: <ShopOutlined /> },
    { key: "4", label: "Orders", icon: <FileTextOutlined /> },
    { key: "5", label: "Reports", icon: <FileTextOutlined /> },

    { type: "divider" },

    {
      key: "6",
      label: "Settings",
      icon: <SettingOutlined />,
      className: "menu-bottom",
    },
    { key: "7", label: "Logout", icon: <LogoutOutlined /> },
  ];

  const getsidebarLayoutCollapsed = UIStore.useState(
    (s) => s.getsidebarLayoutCollapsed
  );
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={getsidebarLayoutCollapsed}
      style={{
        height: "100vh",
        position: "fixed",
        // background: "red",
        padding: getsidebarLayoutCollapsed ? 12 : 24,
      }}
      width={280}
      // className="!flex  !gap-4 !items-center"
    >
      <div
        className={`flex items-center  ${
          getsidebarLayoutCollapsed ? " flex-col gap-3 mt-3" : "flex-row "
        } justify-between mb-3 `}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="24"
            viewBox="0 0 80 24"
            fill="none"
          >
            <path
              d="M9.10784 16.5925L6.79123 7.93664L4.39162 16.5925H9.10784ZM11.1653 23.7259L9.81121 19.1833H3.68565L2.33027 23.7259H0L5.69305 3.38965H7.80533L13.499 23.7259H11.1651H11.1653Z"
              fill="white"
            />
            <path
              d="M13.4982 3.38965H15.8276V12.5261L21.6014 3.38965H24.5022L18.7063 12.4776L25.8063 23.7257H22.9577L17.2995 14.7283L15.8276 17.0241V23.7257H13.4982V3.38965Z"
              fill="white"
            />
            <path
              d="M27.79 5.48584H30.121L28.1552 23.7237H25.8071L27.79 5.48584Z"
              fill="white"
            />
            <path
              d="M30.7301 0L30.1212 5.48642H32.5743L33.1861 0H30.7301Z"
              fill="white"
            />
            <path
              d="M36.1323 20.4042C36.6415 19.9116 36.8244 19.225 36.8442 18.3431V3.38965H39.1536V18.3431C39.1352 19.9684 38.6221 21.2402 37.7174 22.1628C36.8132 23.0863 35.5364 23.723 33.781 23.723C32.6534 23.723 31.6497 23.3208 30.8796 22.8706C30.109 22.419 29.4908 21.7724 29.0254 20.9291L31.0512 19.7472C32.4857 21.8314 35.2296 21.2065 36.1325 20.4042"
              fill="white"
            />
            <path
              d="M63.4201 22.6864C62.7297 22.6117 62.1973 22.3755 61.8374 21.9839C61.4595 21.5732 61.0433 20.7861 60.601 19.644L54.4917 3.12061H53.3374L45.4315 23.8475H47.2066L49.4056 18.0391H56.7674L57.3916 19.845C57.9229 21.4708 58.6538 22.5844 59.5641 23.1547C60.4584 23.7157 61.3778 24.0001 62.2968 24.0001C62.72 24.0001 63.112 23.9451 63.4624 23.8374L63.6439 23.7815V22.7105L63.4203 22.6864H63.4201ZM56.0167 16.2656H50.0294L53.0843 8.38362L56.0167 16.2656Z"
              fill="white"
            />
            <path
              d="M66.5724 9.64539C66.2331 9.4521 65.7245 9.35498 65.047 9.35498H62.5732V9.9664H63.123C63.8924 9.9664 64.4053 10.2163 64.6621 10.7154C64.9185 11.215 65.0467 11.9841 65.0467 13.0233V23.7226H67.5205V13.0233C67.5205 11.9838 67.447 11.2097 67.3005 10.7C67.1536 10.191 66.9111 9.8394 66.5722 9.64539H66.5724Z"
              fill="white"
            />
            <path
              d="M66.0913 7.52253C66.4761 7.52253 66.7827 7.40034 67.0122 7.15572C67.241 6.91111 67.3557 6.57491 67.3557 6.14689C67.3557 5.61716 67.2044 5.15854 66.9021 4.77125C66.5996 4.38444 66.2378 4.19043 65.8165 4.19043C65.4317 4.19043 65.1246 4.31262 64.8958 4.55724C64.6666 4.80185 64.5524 5.13805 64.5524 5.56607C64.5524 6.09628 64.7036 6.55491 65.0059 6.94171C65.3084 7.32901 65.6698 7.52253 66.0915 7.52253H66.0913Z"
              fill="white"
            />
            <path
              d="M79.0379 9.51209C78.6713 9.20626 78.1213 9.05347 77.3887 9.05347C76.6561 9.05347 75.9822 9.21687 75.4236 9.54246C74.8643 9.86878 74.4203 10.2662 74.0905 10.7347H73.9531C73.8062 10.2457 73.5546 9.89408 73.1973 9.68007C72.84 9.46606 72.313 9.35906 71.6168 9.35906H69.4178V9.97048H69.6928C70.4623 9.97048 70.9752 10.2204 71.232 10.7195C71.4883 11.2191 71.6168 11.9882 71.6168 13.0274V23.7267H74.0905V12.4159C74.3653 11.9474 74.7317 11.5753 75.19 11.3001C75.6478 11.0249 76.1521 10.8875 76.7016 10.8875C77.1963 10.8875 77.6362 10.9639 78.021 11.1169C78.4056 11.2697 78.6988 11.4989 78.9006 11.8048L80 10.8877C79.67 10.2358 79.3493 9.7772 79.0379 9.51209Z"
              fill="white"
            />
          </svg>
        </span>

        <Button
          variant="text"
          style={{ background: "transparent", border: "none" }}
          onClick={() => {
            UIStore.update((s) => {
              s.getsidebarLayoutCollapsed = !s.getsidebarLayoutCollapsed;
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.47145 0.528514C5.73179 0.788864 5.73179 1.21097 5.47145 1.47132L1.94285 4.99992L5.47145 8.52851C5.73179 8.78886 5.73179 9.21097 5.47145 9.47132C5.2111 9.73167 4.78899 9.73167 4.52864 9.47132L0.528636 5.47132C0.268287 5.21097 0.268287 4.78886 0.528636 4.52851L4.52864 0.528514C4.78899 0.268165 5.2111 0.268165 5.47145 0.528514Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.47145 0.528514C5.73179 0.788864 5.73179 1.21097 5.47145 1.47132L1.94285 4.99992L5.47145 8.52851C5.73179 8.78886 5.73179 9.21097 5.47145 9.47132C5.2111 9.73167 4.78899 9.73167 4.52864 9.47132L0.528636 5.47132C0.268287 5.21097 0.268287 4.78886 0.528636 4.52851L4.52864 0.528514C4.78899 0.268165 5.2111 0.268165 5.47145 0.528514Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          height: "95%",
          display: "flex",
          // width:'fit-content',
          flexDirection: "column",
          background: "transparent",
          // width:'fit'
        }}
        items={items}
      />
      {/* <div className="flex flex-col   h-full gap-4">
          <div
            className={`flex items-center  ${
              getsidebarLayoutCollapsed ? " flex-col gap-3 mt-3" : "flex-row "
            } justify-between `}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="24"
                viewBox="0 0 80 24"
                fill="none"
              >
                <path
                  d="M9.10784 16.5925L6.79123 7.93664L4.39162 16.5925H9.10784ZM11.1653 23.7259L9.81121 19.1833H3.68565L2.33027 23.7259H0L5.69305 3.38965H7.80533L13.499 23.7259H11.1651H11.1653Z"
                  fill="white"
                />
                <path
                  d="M13.4982 3.38965H15.8276V12.5261L21.6014 3.38965H24.5022L18.7063 12.4776L25.8063 23.7257H22.9577L17.2995 14.7283L15.8276 17.0241V23.7257H13.4982V3.38965Z"
                  fill="white"
                />
                <path
                  d="M27.79 5.48584H30.121L28.1552 23.7237H25.8071L27.79 5.48584Z"
                  fill="white"
                />
                <path
                  d="M30.7301 0L30.1212 5.48642H32.5743L33.1861 0H30.7301Z"
                  fill="white"
                />
                <path
                  d="M36.1323 20.4042C36.6415 19.9116 36.8244 19.225 36.8442 18.3431V3.38965H39.1536V18.3431C39.1352 19.9684 38.6221 21.2402 37.7174 22.1628C36.8132 23.0863 35.5364 23.723 33.781 23.723C32.6534 23.723 31.6497 23.3208 30.8796 22.8706C30.109 22.419 29.4908 21.7724 29.0254 20.9291L31.0512 19.7472C32.4857 21.8314 35.2296 21.2065 36.1325 20.4042"
                  fill="white"
                />
                <path
                  d="M63.4201 22.6864C62.7297 22.6117 62.1973 22.3755 61.8374 21.9839C61.4595 21.5732 61.0433 20.7861 60.601 19.644L54.4917 3.12061H53.3374L45.4315 23.8475H47.2066L49.4056 18.0391H56.7674L57.3916 19.845C57.9229 21.4708 58.6538 22.5844 59.5641 23.1547C60.4584 23.7157 61.3778 24.0001 62.2968 24.0001C62.72 24.0001 63.112 23.9451 63.4624 23.8374L63.6439 23.7815V22.7105L63.4203 22.6864H63.4201ZM56.0167 16.2656H50.0294L53.0843 8.38362L56.0167 16.2656Z"
                  fill="white"
                />
                <path
                  d="M66.5724 9.64539C66.2331 9.4521 65.7245 9.35498 65.047 9.35498H62.5732V9.9664H63.123C63.8924 9.9664 64.4053 10.2163 64.6621 10.7154C64.9185 11.215 65.0467 11.9841 65.0467 13.0233V23.7226H67.5205V13.0233C67.5205 11.9838 67.447 11.2097 67.3005 10.7C67.1536 10.191 66.9111 9.8394 66.5722 9.64539H66.5724Z"
                  fill="white"
                />
                <path
                  d="M66.0913 7.52253C66.4761 7.52253 66.7827 7.40034 67.0122 7.15572C67.241 6.91111 67.3557 6.57491 67.3557 6.14689C67.3557 5.61716 67.2044 5.15854 66.9021 4.77125C66.5996 4.38444 66.2378 4.19043 65.8165 4.19043C65.4317 4.19043 65.1246 4.31262 64.8958 4.55724C64.6666 4.80185 64.5524 5.13805 64.5524 5.56607C64.5524 6.09628 64.7036 6.55491 65.0059 6.94171C65.3084 7.32901 65.6698 7.52253 66.0915 7.52253H66.0913Z"
                  fill="white"
                />
                <path
                  d="M79.0379 9.51209C78.6713 9.20626 78.1213 9.05347 77.3887 9.05347C76.6561 9.05347 75.9822 9.21687 75.4236 9.54246C74.8643 9.86878 74.4203 10.2662 74.0905 10.7347H73.9531C73.8062 10.2457 73.5546 9.89408 73.1973 9.68007C72.84 9.46606 72.313 9.35906 71.6168 9.35906H69.4178V9.97048H69.6928C70.4623 9.97048 70.9752 10.2204 71.232 10.7195C71.4883 11.2191 71.6168 11.9882 71.6168 13.0274V23.7267H74.0905V12.4159C74.3653 11.9474 74.7317 11.5753 75.19 11.3001C75.6478 11.0249 76.1521 10.8875 76.7016 10.8875C77.1963 10.8875 77.6362 10.9639 78.021 11.1169C78.4056 11.2697 78.6988 11.4989 78.9006 11.8048L80 10.8877C79.67 10.2358 79.3493 9.7772 79.0379 9.51209Z"
                  fill="white"
                />
              </svg>
            </span>

            <Button
              variant="text"
              style={{ background: "transparent", border: "none" }}
              onClick={() => {
                UIStore.update((s) => {
                  s.getsidebarLayoutCollapsed = !s.getsidebarLayoutCollapsed;
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.47145 0.528514C5.73179 0.788864 5.73179 1.21097 5.47145 1.47132L1.94285 4.99992L5.47145 8.52851C5.73179 8.78886 5.73179 9.21097 5.47145 9.47132C5.2111 9.73167 4.78899 9.73167 4.52864 9.47132L0.528636 5.47132C0.268287 5.21097 0.268287 4.78886 0.528636 4.52851L4.52864 0.528514C4.78899 0.268165 5.2111 0.268165 5.47145 0.528514Z"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.47145 0.528514C5.73179 0.788864 5.73179 1.21097 5.47145 1.47132L1.94285 4.99992L5.47145 8.52851C5.73179 8.78886 5.73179 9.21097 5.47145 9.47132C5.2111 9.73167 4.78899 9.73167 4.52864 9.47132L0.528636 5.47132C0.268287 5.21097 0.268287 4.78886 0.528636 4.52851L4.52864 0.528514C4.78899 0.268165 5.2111 0.268165 5.47145 0.528514Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
          <div className="flex items-center  justify-between flex-col flex-1  ">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              style={{
                height: "100%",
                display: "flex",
                // width:'fit-content',
                flexDirection: "column",
                background: "red",
                width:'fit'
              }}
              items={items}
            />
          </div>
        </div> */}
    </Sider>
  );
}
