// src/components/Loading/variants.tsx
import "./variants.less";
import React from "react";

// 1. 圆点 Loading
export const DotLoading: React.FC<{ color?: string }> = ({
  color = "#1890ff",
}) => (
  <div className="dot-loading">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="dot"
        style={{
          backgroundColor: color,
          animationDelay: `${i * 0.15}s`,
        }}
      />
    ))}
  </div>
);

// 2. 进度条 Loading
export const ProgressLoading: React.FC<{ percent?: number }> = ({
  percent = 0,
}) => (
  <div className="progress-loading">
    <div className="progress-bar">
      <div
        className="progress-inner"
        style={{ width: `${Math.min(percent, 100)}%` }}
      />
    </div>
    <div className="progress-text">{percent}%</div>
  </div>
);

// 3. 骨架屏 Loading
export const SkeletonLoading: React.FC<{ rows?: number }> = ({ rows = 3 }) => (
  <div className="skeleton-loading">
    <div className="skeleton-title" />
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="skeleton-row" />
    ))}
  </div>
);
