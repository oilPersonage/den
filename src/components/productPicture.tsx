"use client";
import { useEffect, useRef, useState } from "react";
import { TProductPicture } from "src/libs/products";

export default function ProductPicture({
  pictures
}: {
  pictures: TProductPicture[];
}) {
  const [currentPicture, setPicture] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    setClientHeight(ref.current.clientHeight);
  }, [ref]);

  const smallCardStyle = { height: clientHeight / 4 - 4 + "px" };

  return (
    <div className="flex-1 flex gap-sm max-h-[500px]" ref={ref}>
      <div
        className="flex-1 bg-bg2 items-center flex justify-center"
        data-ai="4"
      >
        <img src={pictures[currentPicture]?.src} alt="" />
      </div>
      <div className="grid grid-cols-[1fr] grid-rows-4 *:bg-bg2 gap-xs *:min-w-20 *:aspect-square">
        {pictures.map((el, idx) => (
          <button
            key={idx}
            style={smallCardStyle}
            className={`btn link p-2 border ${idx === currentPicture ? "border-black" : "border-transparent"}`}
            data-ai="4"
            onClick={() => setPicture(idx)}
          >
            <img src={el.smallSrc} alt="" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
}
