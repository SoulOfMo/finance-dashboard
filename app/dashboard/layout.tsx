import Aside from "@/components/ui/Aside";
import Header from "@/components/ui/Header";
import React from "react";
import {
  HiArrowDownLeft,
  HiArrowDownTray,
  HiArrowUpRight,
  HiCalendar,
} from "react-icons/hi2";

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
          <div className="flex-col flex md:flex-row gap-4">
            <div className="w-fit rounded-[14px] border border-(--color-border) bg-(--color-surface) p-4.5 shadow-(--shadow-card)">
              <div className="flex justify-between text-xs text-(--color-text-secondary)">
                <span className="font-semibold">My Balance</span>
                <span className="flex items-center gap-1 rounded-md border border-(--color-border) bg-(--color-surface-subtle) px-2 py-0.75">
                  <HiCalendar />
                  July 14
                  {/* <input type="date"  name="date" id="date" /> */}
                </span>
              </div>
              <div className="mt-3 flex gap-4">
                <p className="text-2xl font-bold tracking-[-0.6px] text-(--color-text-primary)">
                  $28,546.48
                </p>
                <span className="flex items-center rounded-[99px] bg-(--color-green-bg) px-2 py-0.5 text-[11px] font-semibold text-(--color-green-text)">
                  &#x2191; 16.8%
                </span>
              </div>
              {/* buttons */}
              <div className="mt-3 flex gap-2">
                <button className="flex items-center gap-1.5 rounded-lg bg-(--color-primary) px-3 py-2 text-(--color-text-primary) transition-colors duration-200">
                  <HiArrowUpRight />
                  <span className="text-[14px] font-bold">Transfer</span>
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-(--color-border) bg-(--color-surface-subtle) px-3 py-2 text-(--color-text-primary) transition-colors duration-200">
                  <HiArrowDownLeft />
                  <span className="text-[14px] font-bold">Received</span>
                </button>
                <button className="flex items-center justify-center rounded-lg border border-(--color-border) bg-(--color-surface-subtle) px-3 py-2 text-(--color-text-primary) transition-colors duration-200">
                  +
                </button>
              </div>
            </div>
            {/* Money spent */}
            <div className="w-fit rounded-[14px] border border-(--color-border) bg-(--color-surface) p-4.5 shadow-(--shadow-card)">
              <div className="flex justify-between text-xs text-(--color-text-secondary)">
                <span className="font-semibold">Money Spent</span>
                <span className="flex items-center gap-1 rounded-md border border-(--color-border) bg-(--color-surface-subtle) px-2 py-0.75">
                  <HiCalendar />
                  July 14
                  {/* <input type="date"  name="date" id="date" /> */}
                </span>
              </div>
              <div className="mt-3 flex gap-4">
                <p className="text-2xl font-bold tracking-[-0.6px] text-(--color-text-primary)">
                  $28,546.48
                </p>
                <span className="flex items-center rounded-[99px] bg-(--color-green-bg) px-2 py-0.5 text-[11px] font-semibold text-(--color-green-text)">
                  &#x2191; 16.8%
                </span>
              </div>
              {/* buttons */}
            </div>
          </div>
          {/* Balance Card */}
        </div>
        {children}
      </div>
    </div>
  );
}

export default layout;
