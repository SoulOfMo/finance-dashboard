import Aside from "@/components/ui/Aside";
import Header from "@/components/ui/Header";
import React from "react";
import { HiArrowDownTray, HiCalendar } from "react-icons/hi2";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const presentDate = formatter.format(date);

  return (
    <div className="grid h-screen grid-cols-[4.5rem_1fr] grid-rows-[auto_1fr] md:grid-cols-[12.5rem_1fr]">
      <Header />
      <Aside />
      <div className="mx-7 my-6 flex h-fit flex-col">
        <div className="flex h-fit flex-col justify-between md:flex-row">
          <h2 className="text-xl">Welcome, Sultan</h2>
          <div className="flex gap-4 px-3 py-2 text-xs md:text-[13px]">
            <div className="flex items-center gap-1.5 rounded-lg border border-(--color-border) bg-(--color-surface) px-3 py-1.75 text-(--color-text-secondary)">
              <HiCalendar />
              <p>{presentDate}</p>
            </div>

            <button className="flex items-center gap-1.5 rounded-lg bg-(--color-primary) px-4 py-2 font-semibold transition-colors duration-200">
              <HiArrowDownTray />
              <span>Export</span>
            </button>
          </div>
        </div>
        {/* Transaction */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-(14px) border border-(--color-border) bg-(--color-surface) p-4.5 shadow-(--shadow-card)">
            <div className="flex justify-between text-xs text-(--color-text-secondary)">
              <span>My Balance</span>
              <span className="flex items-center gap-1">
                <HiCalendar />
                July,14
                {/* <input type="date"  name="date" id="date" /> */}
              </span>
            </div>
          </div>
          <div></div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout;
