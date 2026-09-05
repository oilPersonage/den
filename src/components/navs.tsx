export default function Navs({ page }: { page?: string }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const links = [
    { title: "Главная", href: process.env.NEXT_PUBLIC_BASE_PATH + "/" },
    { title: "Каталог", href: "#", id: "catalog-btn" },
    { title: "Аренда", href: process.env.NEXT_PUBLIC_BASE_PATH + "/rent" },
    { title: "Проекты", href: process.env.NEXT_PUBLIC_BASE_PATH + "/projects" },
    {
      title: "Вопрос — ответ",
      href: process.env.NEXT_PUBLIC_BASE_PATH + "/questions",
    },
    {
      title: "Контакты",
      href: process.env.NEXT_PUBLIC_BASE_PATH + "/contacts",
    },
  ];

  return (
    <header
      id="header"
      className="main-wrapper fixed z-4 top-0 left-0 right-0 border-b"
    >
      <div className="flex justify-between h-header items-center">
        <a
          href={`${process.env.NEXT_PUBLIC_BASE_PATH}/`}
          className="header-logo"
          data-ai="1"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7275 2.04688H12.7344V8.97266H14.4492V12.999H0V8.97266H1.73242V1.78125H1.7334V0H12.7275V2.04688ZM5.75879 8.97266H8.70801V4.02637H5.75879V8.97266Z"
              fill="var(--col-ac)"
            />
            <path
              d="M27.1531 27.2754H16.1794V23.249H27.1531V27.2754ZM27.1531 12.999H16.1794V0H27.1531V12.999ZM20.2058 8.97266H23.1277V4.02637H20.2058V8.97266Z"
              fill="var(--col-ac)"
            />
            <path
              d="M7.22656 20.4219L10.4229 14.7393V14.7324H14.4531L14.4492 14.7393V27.2754H10.4229V21.8965L9.23926 24.001L9.24219 24.0059H5.21094L5.21289 24.001L4.02637 21.8906V27.2754H0V14.7324H4.02637L7.22656 20.4219Z"
              fill="var(--col-ac) "
            />
          </svg>
        </a>
        <div className="hamb">
          <div className="hamb-inner">
            <div className="hamb-open">Меню</div>
            <div className="hamb-close">Закрыть</div>
          </div>
        </div>
        <div className="navs-wrapper">
          <nav>
            {links.map(({ title, href, id }) => (
              <a
                key={href}
                id={id}
                href={href}
                className={`nav ${basePath + page === href ? "text-accent-hover" : ""}`}
                data-ai="1"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="header-contacts">
            <a href="tel:+7(342)259-24-46" className="link btn" data-ai="1.1">
              <p className="md:max-2xl:hidden">+7 (342) 259-24-46</p>
              <svg
                width="24"
                height="24"
                className="max-md:hidden  2xl:hidden"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.4696 4.03035C19.6103 4.171 19.6893 4.36176 19.6893 4.56068V8.3891C19.6893 8.80332 19.3535 9.1391 18.9393 9.1391C18.5251 9.1391 18.1893 8.80332 18.1893 8.3891V6.37134L15.0303 9.53035C14.7374 9.82324 14.2625 9.82324 13.9696 9.53035C13.6768 9.23745 13.6768 8.76258 13.9696 8.46969L17.1287 5.31068L15.1109 5.31068C14.6967 5.31068 14.3609 4.97489 14.3609 4.56068C14.3609 4.14646 14.6967 3.81068 15.1109 3.81068L18.9393 3.81068C19.1382 3.81068 19.329 3.88969 19.4696 4.03035Z"
                  fill="currentColor"
                />
                <path
                  d="M5.00017 9.8605C6.91657 14.0344 10.3266 17.3529 14.5661 19.1519L15.2457 19.4547C16.8005 20.1474 18.6283 19.6211 19.5766 18.2076L20.4647 16.8839C20.7534 16.4536 20.6655 15.8739 20.2622 15.5485L17.2503 13.1187C16.8079 12.7618 16.1574 12.8449 15.819 13.3016L14.8873 14.5589C12.4965 13.3795 10.5554 11.4385 9.37607 9.04765L10.6333 8.11593C11.09 7.77751 11.1731 7.12699 10.8162 6.68461L8.38635 3.67267C8.061 3.26939 7.4815 3.18142 7.05113 3.46999L5.71829 4.36368C4.29595 5.31739 3.77257 7.16024 4.4813 8.71919L4.99939 9.85881L5.00017 9.8605Z"
                  fill="currentColor"
                />
              </svg>

              <span className="btn-tl"></span>
              <span className="btn-tr"></span>
              <span className="btn-bl"></span>
              <span className="btn-br"></span>
            </a>
            <a
              href="https://yandex.ru/maps/50/perm/house/ulitsa_geroyev_khasana_72b/YU8YdAFgS0wGQFttfXV3cH9nYQ==/?ll=56.260292%2C57.961345&mode=search&sctx=ZAAAAAgAEAAaKAoSCUAXDRmPOENAEfMf0m9f7UtAEhIJj3IwmwDDzj8RxqUqbXGNsz8iBgABAgMEBSgKOABA9lNIAWoCcnWdAc3MzD2gAQCoAQC9AcPwGSrCAQEAggIf0LPQtdGA0L7QtdCyINGF0LDRgdCw0L3QsCA3MiDQsYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=56.260292%2C57.961345&sspn=0.008864%2C0.004356&text=%D0%B3%D0%B5%D1%80%D0%BE%D0%B5%D0%B2%20%D1%85%D0%B0%D1%81%D0%B0%D0%BD%D0%B0%2072%20%D0%B1&z=17.23"
              className="link btn"
              data-ai="1.1"
            >
              <p className="md:max-2xl:hidden">Героев Хасана 72 Б</p>
              <svg
                width="24"
                height="24"
                className="max-md:hidden 2xl:hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.77354 8.87739C4.11718 4.70845 7.60097 1.5 11.7841 1.5H12.216C16.3991 1.5 19.8829 4.70845 20.2265 8.87739C20.4115 11.122 19.7182 13.3508 18.2925 15.0943L13.4995 20.9561C12.7245 21.9039 11.2756 21.9039 10.5006 20.9561L5.70752 15.0943C4.28187 13.3508 3.58852 11.122 3.77354 8.87739ZM12 5.25C9.37665 5.25 7.25 7.37665 7.25 10C7.25 12.6234 9.37665 14.75 12 14.75C14.6234 14.75 16.75 12.6234 16.75 10C16.75 7.37665 14.6234 5.25 12 5.25Z"
                  fill="currentColor"
                />
              </svg>
              <span className="btn-tl"></span>
              <span className="btn-tr"></span>
              <span className="btn-bl"></span>
              <span className="btn-br"></span>
              <svg
                className="svg-link md:max-2xl:hidden"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1064 10.0312H13.1064V3.41406L2.92304 13.6924H0L11.6924 2H4.94922V0H15.1064V10.0312Z"
                  fill="inherit"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
