export default function ArrowSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 ${className}`}
      viewBox="0 0 25 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2812 0L12 11.3018L0 0H2.89111L12 8.69727L21.3479 0H24.2812Z"
        fill="currentColor"
      />
    </svg>
  );
}
