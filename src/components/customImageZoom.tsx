"use client";

import { useEffect, useRef, useState } from "react";
import CustomImage from "./customImage";

export const CustomImageZoom = ({
  classNameWrapper,
  className,
  src,
  alt,
}: {
  className: string;
  classNameWrapper: string;
  src: string;
  alt: string;
}) => {
  const ref = useRef<HTMLDivElement>();
  const imgRef = useRef<HTMLDivElement>();
  const [isZoom, setZoom] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mouseEnter = () => setZoom(true);
    const mouseLeave = () => {
      imgRef.current.style.transform = `translate(0%, 0%)`;
      setZoom(false);
    };
    el.addEventListener("mouseenter", mouseEnter);
    el.addEventListener("mouseleave", mouseLeave);

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // в процентах от 0 до 100
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;

      // (percentX - 50) даёт диапазон от -50 до 50 — удобно для параллакса
      const moveX = (percentX - 50) * 0.7;
      const moveY = (percentY - 50) * 0.7;

      // пример применения к вложенной картинке
      imgRef.current.style.transform = `translate(${moveX}%, ${moveY}%)`;
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseenter", mouseEnter);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={classNameWrapper}>
      <div ref={imgRef} className={isZoom ? "scale-300" : undefined}>
        <CustomImage
          className={className + " cursor-crosshair"}
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};
