// src/components/Loading/GlobalLoading.tsx
import React, { createContext, useContext, useState } from "react";
import Loading from "./index";

interface GlobalLoadingContextType {
  show: (options?: { text?: string }) => void;
  hide: () => void;
}

const GlobalLoadingContext = createContext<
  GlobalLoadingContextType | undefined
>(undefined);

export const GlobalLoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("加载中...");

  const show = (options?: { text?: string }) => {
    if (options?.text) setText(options.text);
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return (
    <GlobalLoadingContext.Provider value={{ show, hide }}>
      {children}
      {visible && <Loading fullScreen text={text} />}
    </GlobalLoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(GlobalLoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within GlobalLoadingProvider");
  }
  return context;
};

export {};

// 在 App.tsx 中使用
// export const App = () => (
//   <GlobalLoadingProvider>
//     <YourAppContent />
//   </GlobalLoadingProvider>
// );

// 在任意组件中使用
// const AnyComponent = () => {
//   const { show, hide } = useLoading();

//   const fetchData = async () => {
//     show({ text: "数据加载中..." });
//     try {
//       // API调用
//       await api.getData();
//     } finally {
//       hide();
//     }
//   };

//   return <button onClick={fetchData}>加载数据</button>;
// };
