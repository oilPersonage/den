export default function Navs({ page }: { page?: string }) {
  const links = [
    { title: "Главная", href: "/" },
    { title: "Каталог", href: "#", id: "catalog-btn" },
    { title: "Аренда", href: "/rent" },
    { title: "Проекты", href: "/projects" },
    { title: "Вопрос — ответ", href: "/questions" },
    { title: "Контакты", href: "/contacts" }
  ];
  return (
    <header
      id="header"
      className="main-wrapper fixed z-4 top-0 left-0 right-0 border-b"
    >
      <div className="flex justify-between h-header items-center">
        <a href="/" className="header-logo" data-ai="1">
          <svg
            viewBox="0 0 38 32"
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5049 11.748L6.21582 15.7197L6.23535 15.7334V15.7793L12.4854 27.281V19.5039L18.7344 23.041L18.7334 23.0674L18.7539 23.0537L18.7344 23.041L18.7637 23.0479L24.9697 19.6621V27.49L31.2344 16.0615L24.9844 11.9111L31.2041 7.74512L37.4834 11.9111V19.6289L18.7637 31.3887L0 19.1123V11.5664L6.20606 7.38574L12.5049 11.748Z"
              fill="inherit"
            />
            <path
              d="M24.9844 4.16602L24.9834 11.8838L18.7344 8.34766V8.32031L18.7139 8.33398L18.7344 8.34766L18.7051 8.34082L12.499 11.7266V4.18066L12.4854 4.16602L18.7051 0L24.9844 4.16602Z"
              fill="inherit"
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
                className={`btn link ${page === href ? "font-bold" : ""}`}
                data-ai="1"
              >
                {title}
                <span className="btn-tl"></span>
                <span className="btn-tr"></span>
                <span className="btn-bl"></span>
                <span className="btn-br"></span>
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
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
