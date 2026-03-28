"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ArrowSvg from "./arrowSvg";

export function Select({
  id,
  options,
  value,
  className,
  onSelectAction,
  isSupport,
  size = "md"
}: {
  options: { value: string | number; label: string }[];
  value: string | number;
  size: "sm" | "md";
  id?: string;
  className?: string;
  isSupport?: boolean;
  onSelectAction?: (v: string | number) => void;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef(null);

  function onSelectCurrent(e: MouseEvent, value: string) {
    e.preventDefault();
    onSelectAction?.(value);
    setIsOpened(false);
  }

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // ✅ Закрываем ТОЛЬКО при клике ВНЕ НАШЕГО селекта
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // mousedown лучше
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const classMap = {
    sm: "py-1 px-3",
    md: "py-2 px-4"
  };

  return (
    <label
      className={`relative min-w-40 ${isSupport && !isOpened ? "opacity-50 hover:opacity-100" : ""} ${className || ""}`}
      ref={selectRef}
    >
      <button
        className={`btn btn-link bg-bg2 w-full ${classMap[size]}`}
        id={id}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpened(!isOpened);
        }}
      >
        {value}
        <div className="pl-sm -mr-xs ml-auto">
          <ArrowSvg className={isOpened ? "rotate-180" : ""} />
        </div>
      </button>
      <div
        className={`grid absolute top-full right-0 left-0 z-10 ${!isOpened ? "grid-rows-[0fr]" : "grid-rows-[1fr]"} transition-all`}
      >
        <div
          className="overflow-hiddenmax-h-100 overflow-y-auto border border-black"
          data-lenis-prevent
        >
          <ul className="flex-col bg-bg2  p-0.5">
            {options?.map(({ value: selectValue, label }) => (
              <li key={selectValue}>
                <button
                  data-value={selectValue}
                  onClick={(e) => onSelectCurrent(e, selectValue)}
                  className="btn link w-full *:text-left"
                >
                  <b className={value !== selectValue ? "font-normal" : ""}>
                    {label}
                  </b>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <input ref={ref} type="text" className="h-0 w-0" value={value} /> */}
    </label>
  );
}
