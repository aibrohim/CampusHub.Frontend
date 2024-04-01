import { Spin } from "antd";
import styles from "./Loading.module.scss";

export const PageLoading = () => {
  return (
    <div className={styles.ldsRing}>
      <Spin size="large" />
    </div>
  );
};
