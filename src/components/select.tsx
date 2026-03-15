"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ArrowSvg from "./arrowSvg";

export function Select({
  options,
  value,
  className,
  onSelectAction,
  isSupport
}: {
  options: string[];
  value: string;
  className?: string;
  isSupport?: boolean;
  onSelectAction: (v: string) => void;
}) {
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef(null);

  function onSelectCurrent(e: MouseEvent, value: string) {
    e.preventDefault();
    onSelectAction(value);
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

  return (
    <label
      className={`relative min-w-40 ${isSupport && !isOpened ? "opacity-50 hover:opacity-100" : ""} ${className || ""}`}
      ref={selectRef}
    >
      <button
        className="btn btn-link bg-bg2 w-full"
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
        <ul
          className="overflow-hidden flex-col bg-bg2 max-h-100 overflow-y-auto border border-black"
          data-lenis-prevent
        >
          {options?.map((id) => (
            <li key={id}>
              <button
                onClick={(e) => onSelectCurrent(e, id)}
                className="btn link w-full *:text-left"
              >
                <b className={value !== id ? "font-normal" : ""}>{id}</b>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* <input ref={ref} type="text" className="h-0 w-0" value={value} /> */}
    </label>
  );
}
