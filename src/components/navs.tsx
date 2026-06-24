export default function Navs({ page }: { page?: string }) {
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
                className={`nav ${page === href ? "text-accent-hover" : ""}`}
                data-ai="1"
              >
                {title}
              </a>
            ))}
          </nav>
          <div className="header-contacts">
            <a href="tel:+7(342)259-24-46" className="link btn" data-ai="1.1">
              +7 (342) 259-24-46
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
              Героев Хасана 72 Б<span className="btn-tl"></span>
              <span className="btn-tr"></span>
              <span className="btn-bl"></span>
              <span className="btn-br"></span>
              <svg
                className="svg-link"
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
