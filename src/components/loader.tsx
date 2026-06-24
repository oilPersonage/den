export default function Loader() {
  return (
    <div className="fixed loader flex items-center justify-center inset-0 z-10">
      <div className="text-currentColor">
        <div className="loading-shadow absolute bottom-1 bg-currentColor w-full h-8 rounded-[50%]"></div>
        <div className="loading-wrapper">
          <div className="loading-inner">
            <svg
              width="44"
              height="44"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7275 2.04688H12.7344V8.97266H14.4492V12.999H0V8.97266H1.73242V1.78125H1.7334V0H12.7275V2.04688ZM5.75879 8.97266H8.70801V4.02637H5.75879V8.97266Z"
                fill="currentColor"
              />
              <path
                d="M27.1531 27.2754H16.1794V23.249H27.1531V27.2754ZM27.1531 12.999H16.1794V0H27.1531V12.999ZM20.2058 8.97266H23.1277V4.02637H20.2058V8.97266Z"
                fill="currentColor"
              />
              <path
                d="M7.22656 20.4219L10.4229 14.7393V14.7324H14.4531L14.4492 14.7393V27.2754H10.4229V21.8965L9.23926 24.001L9.24219 24.0059H5.21094L5.21289 24.001L4.02637 21.8906V27.2754H0V14.7324H4.02637L7.22656 20.4219Z"
                fill="currentColor "
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
