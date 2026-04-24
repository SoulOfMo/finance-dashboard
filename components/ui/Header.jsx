import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Header() {
  return (
    <header className="flex h-16 items-center gap-4 border-b border-(--color-border) bg-(--color-surface) px-7 transition-colors duration-300">
      <span className="flex-1 text-[16px] font-semibold text-(--color-text-primary)">
        Overview
      </span>

      {/* Search */}
      <button className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-[50%] border border-(--color-border) bg-(--color-surface-subtle) text-(--color-text-secondary) md:flex">
        <HiMagnifyingGlass size={16} />
      </button>

      {/* Notifications */}
      <button className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-(--color-border) bg-(--color-surface-subtle) text-(--color-text-secondary) md:flex">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      </button>

      {/* User chip */}
      <div className="flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-surface-subtle) px-3 py-1 pl-1 text-[13px] font-medium">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#667eea,#764ba2)] text-[11px] font-bold text-white">
          MS
        </div>
        <div>
          <div className="leading-4 text-(--color-text-primary)">
            Morin Sultan
          </div>
          <div className="text-[11px] leading-4 text-(--color-text-tertiary)">
            Admin
          </div>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="ml-1"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </header>
  );
}

export default Header;
