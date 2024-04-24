import { Spin } from "antd";

export const PageLoading = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};
