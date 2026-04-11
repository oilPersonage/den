"use client"; // Клиентский компонент для DOM-операций

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  position:
    | "top left"
    | "top right"
    | "bottom left"
    | "bottom left"
    | "center left"
    | "center right";
}

export function Portal({ children, trigger, position }: PortalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null
  );
  const triggerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Создаём/находим wrapper
  useEffect(() => {
    let wrapper = document.getElementById("modal-portal");
    if (!wrapper) {
      wrapper = document.createElement("div");
      wrapper.id = "modal-portal";
      document.body.appendChild(wrapper);
    }
    wrapperRef.current = wrapper as HTMLDivElement;

    return () => {
      if (wrapperRef.current?.childNodes.length === 0) {
        wrapperRef.current.remove();
      }
    };
  }, []);

  // Получаем координаты триггера
  useLayoutEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom,
        left: rect.left
      });
    }
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);

  if (!wrapperRef.current) return null;

  return (
    <>
      {/* Триггер */}
      <div
        ref={triggerRef}
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
      >
        {trigger}
      </div>

      {/* Portal с позиционированием */}
      {isOpen &&
        coords &&
        createPortal(
          <div
            className="fixed"
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              zIndex: 8
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>,
          wrapperRef.current
        )}
    </>
  );
}
