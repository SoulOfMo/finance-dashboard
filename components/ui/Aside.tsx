"use client";
import { HiMiniSquares2X2, HiWallet } from "react-icons/hi2";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import Link from "next/link";
function Aside() {
  return (
    <aside className="row-span-full border border-(--color-border) bg-(--color-sidebar-bg) py-5 transition-colors duration-300">
      <div className="flex items-center gap-2.5 px-5 pb-6 font-sans text-[17px] font-bold text-(--color-text-primary)">
        <div className="flex h-8.5 w-8.5 items-center justify-center rounded-[10px] dark:bg-(--color-primary)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L3 8.5V15.5L12 21L21 15.5V8.5L12 3Z"
              fill="white"
              opacity=".9"
            />
            <path
              d="M12 8V16M8 10.5L12 8L16 10.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <span className="hidden md:inline">DeliFin</span>
      </div>

      <div className="mt-1 px-5 pb-2 text-[11px] font-semibold tracking-[0.06em] text-(--color-text-tertiary) uppercase">
        Menu
      </div>
      <nav className="px-5">
        <ul className="flex flex-col gap-1">
          <Link
            className="flex items-center gap-2.25 py-2.25 text-[13.5px] font-medium text-(--color-nav-idle-txt) transition-colors duration-200"
            href="/dashboard"
          >
            <HiMiniSquares2X2 />
            <span className="hidden md:inline"> Overview </span>
          </Link>

          <Link
            className="flex items-center gap-2.25 py-2.25 text-[13.5px] font-medium text-(--color-nav-idle-txt) transition-colors duration-200"
            href="/dashboard/transactions"
          >
            <HiMiniUser />
            <span className="hidden md:inline"> My Wallet </span>
          </Link>

          <Link
            className="flex items-center gap-2.25 py-2.25 text-[13.5px] font-medium text-(--color-nav-idle-txt) transition-colors duration-200"
            href="/dashboard/transactions"
          >
            <HiWallet />
            <span className="hidden md:inline"> Transactions </span>
          </Link>

          <Link
            className="flex items-center gap-2.25 py-2.25 text-[13.5px] font-medium text-(--color-nav-idle-txt) transition-colors duration-200"
            href="/dashboard/loans"
          >
            <FaMoneyBillWaveAlt />
            <span className="hidden md:inline"> Loans </span>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}

export default Aside;
