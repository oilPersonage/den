export default function Loader() {
  return (
    <div className="fixed loader flex items-center justify-center inset-0 bottom-4 z-10">
      <div className="text-currentColor">
        <div className="loading-shadow absolute bottom-1 bg-currentColor w-full h-8 rounded-[50%]"></div>
        <div className="loading-wrapper">
          <div className="loading-inner">
            <svg
              className="anime22"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.91406 26.0415L17.7754 46.7562L0 33.6635V19.4426L8.91406 26.0415Z"
                fill="currentColor"
              />
              <path
                d="M17.7754 46.7732V32.5388L26.7168 39.0349V53.2966L17.7754 46.7732Z"
                fill="currentColor"
              />
              <path
                d="M35.6338 46.7732V32.5388L26.6924 39.0349V53.2966L35.6338 46.7732Z"
                fill="currentColor"
              />
              <path
                d="M44.4951 26.0415L35.6338 46.7562L53.4092 33.6635V19.4426L44.4951 26.0415Z"
                fill="currentColor"
              />
              <path
                d="M53.4092 33.6694L35.624 20.7475L44.2627 12.7781L53.4092 19.61V33.6694Z"
                fill="currentColor"
              />
              <path
                d="M35.6279 6.52344V20.7578L26.6865 14.2617V0L35.6279 6.52344Z"
                fill="currentColor"
              />
              <path
                d="M17.7812 6.52344V20.7578L26.7227 14.2617V0L17.7812 6.52344Z"
                fill="currentColor"
              />
              <path
                d="M0 33.6694L17.7852 20.7475L9.14651 12.7781L0 19.61V33.6694Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
