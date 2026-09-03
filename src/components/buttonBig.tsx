"use client";

import { animate, createScope, random, Scope, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function ButtonBig({
  title,
  link = "#",
  id,
  dataModal,
  className = "",
  rows = 4,
  dataAi,
  count = 12,
}: {
  title: string;
  link?: string;
  id?: string;
  className?: string;
  dataModal?: string;
  dataAi?: string;
  count?: number;
  rows?: number;
}) {
  const array = Array.from({ length: count }, (_, i) => i);
  const arrayRows = Array.from({ length: rows }, (_, i) => i);
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      self?.add("animateBtn", () => {
        animate(self.root, {
          "--bg-alpha": [{ to: 1 }, { to: 0 }],
          duration: 2000,
        });
        animate(self.root.querySelectorAll(".btnBigItem"), {
          scale: [{ to: [0, 1] }, { to: 0 }],
          delay: stagger(100, {
            grid: [count, rows],
            from: random(0, count * rows),
          }),
        });
      });
    });

    return () => scope.current?.revert();
  });

  return (
    <a
      id={id}
      ref={root}
      data-ai={dataAi}
      data-modal={dataModal}
      onMouseEnter={() => {
        scope.current?.refresh();
        scope.current?.methods.animateBtn();
      }}
      className={"btn biggest black btn-open-modal " + className}
      href={link}
    >
      <div className="btnBigWrapper">
        {arrayRows.map((el) => (
          <div key={el} className="btnBigWrapperLine">
            {array.map((_, i) => (
              <div className="btnBigItem" key={i}></div>
            ))}
          </div>
        ))}
      </div>
      <p>{title}</p>
    </a>
  );
}
