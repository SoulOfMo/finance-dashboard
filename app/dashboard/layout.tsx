import Aside from "@/components/ui/Aside";
import Header from "@/components/ui/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({children}: LayoutProps) {
  return (
    <div className="grid h-screen grid-cols-[12.5rem_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Aside />
      {children}
    </div>
  );
}

export default layout;
