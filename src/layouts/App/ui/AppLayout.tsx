import type { MenuProps } from "antd";
import { Button, Layout, Menu } from "antd";
import React, { FC, useState } from "react";
import {
  IconBuilding,
  IconSchool,
  IconUser,
  IconUsersGroup,
  IconUsers,
  IconUserSquare,
} from "@tabler/icons-react";
import { Link, Outlet } from "react-router-dom";
import { tokenService } from "@/entities/Token";
import { LogoutOutlined } from "@ant-design/icons";
import { useGetUserQuery } from "@/entities/User";

const { Sider, Content, Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: string,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: <Link to={path}>{label}</Link>,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Buildings", "buildings", "/buildings", <IconBuilding />),
  getItem("Courses", "courses", "/courses", <IconSchool />),
  getItem("Students", "students", "/students", <IconUser />),
  getItem("Groups", "groups", "/groups", <IconUsersGroup />),
  getItem("Clubs", "clubs", "/clubs", <IconUsers />),
  getItem(
    "Guest lectures",
    "guestLectures",
    "/guest-lectures",
    <IconUserSquare />
  ),
];

export const AppLayout: FC = () => {
  const { data } = useGetUserQuery();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header className="bg-white flex justify-end items-center">
          {data && (
            <p className="my-0">
              {data.firstName} {data.lastName}
            </p>
          )}
          <Button
            className="ml-3"
            type="default"
            onClick={() => {
              tokenService.removeAccessToken();
              window.location.reload();
            }}
            icon={<LogoutOutlined />}
          ></Button>
        </Header>
        <Content className="p-5">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
