export default function CrossSvg({ onClick }: { onClick?: () => void }) {
  return (
    <button className="btn link h-12 px-4 bg-bg2" onClick={onClick}>
      <svg
        className="w-4 h-4 rotate-45"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 10.259V13.259L0 13.259L2.62268e-07 10.259L24 10.259Z"
          fill="black"
        />
        <path
          d="M10.5 1.31134e-07L13.5 0L13.5 24H10.5L10.5 1.31134e-07Z"
          fill="black"
        />
      </svg>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
