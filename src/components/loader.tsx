export default function Loader() {
  return (
    <div className="fixed loader flex items-center justify-center inset-0 z-10">
      <div className="text-var(--col-ac)">
        <div className="loading-shadow absolute bottom-1 bg-var(--col-ac) w-full h-8 rounded-[50%]"></div>
        <div className="loading-wrapper">
          <div className="loading-inner">
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              className="intro-logo-D"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7275 2.04688H12.7344V8.97266H14.4492V12.999H0V8.97266H1.73242V1.78125H1.7334V0H12.7275V2.04688ZM5.75879 8.97266H8.70801V4.02637H5.75879V8.97266Z"
                fill="var(--col-ac)"
              />
            </svg>
            <svg
              className="intro-logo-O"
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9736 12.999H0V0H10.9736V12.999ZM4.02637 8.97266H6.94824V4.02637H4.02637V8.97266Z"
                fill="var(--col-ac)"
              />
            </svg>
            <svg
              className="intro-logo-M"
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22656 5.68945L10.4229 0.00683594V0H14.4531L14.4492 0.00683594V12.543H10.4229V7.16406L9.23926 9.26855L9.24219 9.27344H5.21094L5.21289 9.26855L4.02637 7.1582V12.543H0V0H4.02637L7.22656 5.68945Z"
                fill="var(--col-ac)"
              />
            </svg>
            <svg
              className="intro-logo-Def"
              width="11"
              height="5"
              viewBox="0 0 11 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10.9741"
                y="4.02612"
                width="10.9741"
                height="4.02609"
                transform="rotate(-180 10.9741 4.02612)"
                fill="var(--col-ac)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
