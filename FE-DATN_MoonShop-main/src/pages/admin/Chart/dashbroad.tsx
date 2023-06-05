import React, { useState } from "react";
import {
  DropboxOutlined,
  FileOutlined,
  DashboardOutlined,
  TeamOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Chart } from "react-google-charts";

const { Header, Content, Footer, Sider } = Layout;

// Thống kê tổng sản phẩm
export const data = [
  ["Products", "Hours per Day"],
  ["Shoes", 50],
  ["Clothes", 100],
  ["Dress", 30],
  ["Sandal", 15],
];

export const options = {
  title: "Tổng sản phẩm theo danh mục",
};
// Tổng doanh thu theo tháng
export const RevenueByMonth = [
  ["Element", "Total", { role: "style" }],
  ["January", 10000000, "blue"],
  ["February", 9000000, "blue"],
  ["March", 12000000, "blue"],
  ["April", 20000000, "blue"],
  ["May", 18000000, "blue"],
  ["June", 15000000, "blue"],
  ["July", 18000000, "blue"],
  ["August", 18500000, "blue"],
  ["September", 19000000, "blue"],
  ["October", 22000000, "blue"],
  ["November", 16000000, "blue"],
  ["December", 18400000, "blue"],
];
export const optionsRevenueByMonth = {
  title: "Tổng doanh thu theo tháng",
};

// Thống kê số đơn hàng thành công, hủy đơn
export const dataOrders = [
  ["Orders", "Hours per Day"],
  ["Thành công", 200],
  ["Hủy đơn", 30],
];
export const optionsdataOrders = {
  title: "Thống kê số đơn hàng thành công, hủy đơn",
};

// Số lượng đơn hàng theo tháng
export const dataOrderByMonth = [
  ["Month", "Sales"],
  ["January", 20],
  ["February", 50],
  ["March", 80],
  ["April", 100],
  ["May", 110],
  ["June", 90],
  ["July", 85],
  ["August", 100],
  ["September", 105],
  ["October", 92],
  ["November", 88],
  ["December", 100],
];

export const optionsOrderByMonth = {
  title: "Số lượng đơn hàng theo tháng",
  curveType: "function",
  legend: { position: "bottom" },
};


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <div className="data_total_product">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="revenue_by_month">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={RevenueByMonth}
          options={optionsRevenueByMonth}
        />
      </div>
      <div className="Orders">
        <Chart
          chartType="PieChart"
          data={dataOrders}
          options={optionsdataOrders}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="order_by_month">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={dataOrderByMonth}
          options={optionsOrderByMonth}
        />
      </div>
    </div>
  );
};

export default Dashboard;
