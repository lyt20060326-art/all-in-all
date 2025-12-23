import type { Metadata } from "next";

// 导出仪表盘页面的元数据（可选）
export const metadata: Metadata = {
  title: "仪表盘",
  description: "项目仪表盘页面",
};

// 必须导出默认布局组件
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-container">
      {/* 可添加仪表盘公共布局（如侧边栏） */}
      {children}
    </div>
  );
}