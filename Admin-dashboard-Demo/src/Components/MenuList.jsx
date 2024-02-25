import React from "react";

export default function MenuList() {
  return (
    <Menu theme={"dark"} mode="inline" className="menu-bar">
      <Menu.Item key={"dashboard"} icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>
      <Menu.Item key={"brands"} icon={<GoldOutlined />}>
        Brands
      </Menu.Item>
      <Menu.Item key={"categories"} icon={<MergeOutlined />}>
        Categories
      </Menu.Item>
      <Menu.Item key={"products"} icon={<QrcodeOutlined />}>
        Products
      </Menu.Item>
      <Menu.Item key={"orders"} icon={<CalendarOutlined />}>
        Orders
      </Menu.Item>
      <Menu.Item key={"customers"} icon={<UserOutlined />}>
        Customers
      </Menu.Item>
      <Menu.SubMenu
        key={"history"}
        icon={<DatabaseOutlined />}
        title={"History"}
      >
        <Menu.Item key={"history1"}>History 1</Menu.Item>
        <Menu.Item key={"history2"}>History 2</Menu.Item>
        <Menu.Item key={"history3"}>History 3</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key={"posts"} icon={<SnippetsOutlined />}>
        Posts
      </Menu.Item>
      <Menu.Item key={"settings"} icon={<SettingFilled />}>
        Settings
      </Menu.Item>
    </Menu>
  );
}
