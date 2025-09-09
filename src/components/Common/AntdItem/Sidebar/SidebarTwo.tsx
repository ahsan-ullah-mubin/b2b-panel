"use client"
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, Skeleton } from "antd";
import React, { useState } from "react";

import { theme } from "antd";
import Link from "next/link";
import "./Sidebar.scss";
const { Sider } = Layout;
const { SubMenu } = Menu;

const { useToken } = theme;

interface MenuItem {
  intFirstLabelId: number;
  strTo: string;
  strIcon: string;
  strLabel: string;
  strBanglaLabel: string;
  secondMenu: SubMenuItem[];
}

interface SubMenuItem {
  intSecondLabelId: number;
  strTo: string;
  strIcon: string;
  strLabel: string;
  strBanglaLabel: string;
  thirdMenu?: NestedSubMenuItem[];
  isVisible: boolean;
}

interface NestedSubMenuItem {
  strTo: string;
  strIcon: string;
  strLabel: string;
  isVisible: boolean;
}

const data: MenuItem[] = [
  {
    intFirstLabelId: 1,
    strTo: "/dashboard",
    strIcon: "DashboardOutlined",
    strLabel: "Dashboard",
    strBanglaLabel: "ড্যাশবোর্ড",
    secondMenu: [
      {
        intSecondLabelId: 101,
        strTo: "/dashboard/overview",
        strIcon: "BarChartOutlined",
        strLabel: "Overview",
        strBanglaLabel: "ওভারভিউ",
        isVisible: true,
      },
      {
        intSecondLabelId: 102,
        strTo: "/dashboard/settings",
        strIcon: "SettingOutlined",
        strLabel: "Settings",
        strBanglaLabel: "সেটিংস",
        isVisible: true,
      },
    ],
  },
  {
    intFirstLabelId: 2,
    strTo: "/users",
    strIcon: "UserOutlined",
    strLabel: "Users",
    strBanglaLabel: "ইউজারস",
    secondMenu: [
      {
        intSecondLabelId: 201,
        strTo: "/users/list",
        strIcon: "TeamOutlined",
        strLabel: "User List",
        strBanglaLabel: "ইউজার তালিকা",
        isVisible: true,
      },
      {
        intSecondLabelId: 202,
        strTo: "/users/roles",
        strIcon: "IdcardOutlined",
        strLabel: "Roles",
        strBanglaLabel: "ভূমিকা",
        isVisible: false,
      },
    ],
  },
  {
    intFirstLabelId: 3,
    strTo: "/reports",
    strIcon: "FileTextOutlined",
    strLabel: "Reports",
    strBanglaLabel: "রিপোর্ট",
    secondMenu: [
      {
        intSecondLabelId: 301,
        strTo: "/reports/sales",
        strIcon: "ShoppingCartOutlined",
        strLabel: "Sales Report",
        strBanglaLabel: "বিক্রয় রিপোর্ট",
        isVisible: true,
      },
      {
        intSecondLabelId: 302,
        strTo: "/reports/finance",
        strIcon: "DollarOutlined",
        strLabel: "Finance Report",
        strBanglaLabel: "আর্থিক রিপোর্ট",
        isVisible: true,
      },
    ],
  },
];

const SidebarTwo: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string[]>([location.pathname]);


  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key);
  };

  const { token } = useToken();
  const getLayoutCollapsed= false
  const isLoading = false

  return (
    <Sider
      theme="light"
      trigger={null}
      collapsible
      collapsed={getLayoutCollapsed}
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderRight: `1px solid ${token?.colorBorderSecondary}`,
      }}
      className="z-[1000]"
      width={270}
    >
      <div className={"logo  fixed"}>
        <Link href="/" onClick={() => setSelectedKey(["/"])}>
          <div
            className={"py-4"}
            style={{
              transition: "width 0.3s ease",
              width: getLayoutCollapsed ? "48px" : "210px",
            }}
          >
            {getLayoutCollapsed ? (
            //   <img
            //     src={trackforceIcon}
            //     alt="Logo"
            //     className="w-12 h-6 object-contain ml-4"
            //   />
            <div>img1</div>
            ) : (
            //   <img
            //     src={LogoImage}
            //     alt="Logo"
            //     className="w-60 h-6 object-contain ml-5 "
            //   />
            <div>img 2</div>
            )}
          </div>
        </Link>
        <Button
          // type="primary"
          icon={getLayoutCollapsed ? <RightOutlined /> : <LeftOutlined />}
          //   onClick={() => {
          //     dispatch(setLayoutCollapsed(!getLayoutCollapsed));
          //   }}
          style={{
            fontSize: "16px",
          }}
          className={` absolute top-[14px] z-[1000] ${
            getLayoutCollapsed ? "-right-[46px]" : "-right-[75px]"
          } button-animate`}
        />
      </div>
      {isLoading ? (
        <div className="px-4 mt-6">
          <Skeleton paragraph={{ rows: 4 }} active />
        </div>
      ) : (
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={selectedKey}
          onClick={handleMenuClick}
          className="mt-16 "
          style={{
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
            overflowX: "hidden",
            borderRight: "none",
          }}
        >
          {data?.map((menu: MenuItem) => (
            <React.Fragment key={menu?.intFirstLabelId}>
              {menu?.secondMenu.length > 0 ? (
                <SubMenu
                  key={menu?.strTo}
                //   icon={iconMapping[menu?.strIcon]}
                icon={<div>icon</div>}
                  title={menu?.strLabel}
                >
                  {menu?.secondMenu.map((sub) => (
                    <React.Fragment key={sub?.intSecondLabelId}>
                      {sub?.thirdMenu ? (
                        <SubMenu
                          key={sub?.strTo}
                        //   icon={iconMapping[sub?.strIcon]}
                        icon={<div>icon</div>}
                          title={
                           sub?.strLabel
                          }
                        >
                          {sub?.thirdMenu.map((nestedSub) => (
                            <Menu.Item
                              disabled={sub?.isVisible ? false : true}
                              key={nestedSub?.strTo}
                            //   icon={iconMapping[nestedSub?.strIcon]}
                            icon={<div>icon</div>}
                            >
                              {nestedSub?.strLabel}
                            </Menu.Item>
                          ))}
                        </SubMenu>
                      ) : (
                        <Menu.Item
                          disabled={sub?.isVisible ? false : true}
                          key={sub?.strTo}
                        //   icon={iconMapping[sub?.strIcon]}
                        icon={<div>icon</div>}
                        >
                          {sub?.strLabel}
                        </Menu.Item>
                      )}
                    </React.Fragment>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={menu?.strTo} icon={<div>icon</div>}>
                  {/* {menu?.strLabel} */}
                  {menu?.strLabel}
                </Menu.Item>
              )}
            </React.Fragment>
          ))}
        </Menu>
      )}
    </Sider>
  );
};

export default SidebarTwo;
