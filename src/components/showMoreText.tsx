"use client";
import { useEffect, useRef, useState } from "react";

export default function ShowMoreText({
  slug,
  description,
  dataAttr
}: {
  slug: string;
  description: string;
  dataAttr?: { [p in string]: string };
}) {
  const [isOpenedDesc, setIsOpenDesc] = useState(false);
  const [showExtend, setShowExtend] = useState(false);
  const refDesc = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!refDesc.current) return;
    const { clientHeight } = refDesc.current;
    if (clientHeight > 76) {
      setShowExtend(true);
      setIsOpenDesc(false);
    } else {
      setShowExtend(false);
      setIsOpenDesc(false);
    }
  }, [refDesc, description]);

  useEffect(() => {
    if (window.len) window.len.resize();
  }, [isOpenedDesc, slug]);

  function onToggleDesc() {
    setIsOpenDesc(!isOpenedDesc);
  }

  return (
    <>
      <div
        {...dataAttr}
        className={`${isOpenedDesc ? "max-h-32" : "max-h-19"} mt-sm overflow-hidden`}
      >
        <p
          ref={refDesc}
          className={`card-desc ${showExtend && !isOpenedDesc ? "extended" : ""} ${isOpenedDesc ? "opened" : ""}`}
          data-from-bottom
        >
          {description}
        </p>
      </div>
      {showExtend && (
        <div
          className="text-black/40 mt-1 cursor-pointer hover:text-black transition-colors w-fit"
          onClick={onToggleDesc}
        >
          {isOpenedDesc ? "Свернуть" : "Показать все описание"}
        </div>
      )}
    </>
  );
}
