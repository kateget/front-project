// src/components/Loading/index.tsx
import React from "react";
import "./index.less";
import { DotLoading, ProgressLoading, SkeletonLoading } from "./variants";

interface LoadingProps {
  size?: "small" | "default" | "large";
  text?: string;
  fullScreen?: boolean;
  color?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = "default",
  text = "加载中...",
  fullScreen = false,
  color = "#1890ff",
}) => {
  const sizeMap = {
    small: 24,
    default: 40,
    large: 56,
  };

  const spinnerStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: "transparent",
  };

  const loadingContent = (
    <div className="loading-container">
      <div className="loading-spinner" style={spinnerStyle}></div>
      {text && (
        <div className="loading-text" style={{ color }}>
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return <div className="loading-fullscreen">{loadingContent}</div>;
  }

  return loadingContent;
};
// 导出多种 Loading 类型
export { DotLoading, ProgressLoading, SkeletonLoading };

// 默认导出主 Loading 组件
export default Loading;
