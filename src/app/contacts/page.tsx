import CustomImage from "src/components/customImage";
import Navs from "src/components/navs";
import RequestForm from "src/components/requestForm";

export default function Contacts() {
  return (
    <>
      <Navs page="/contacts" />

      <section className="pt-header pb-md min-h-screen flex flex-col">
        <div className="wrapper py-md md:py-lg flex flex-col flex-1">
          <div className="flex gap-md md:gap-lg flex-1 flex-wrap">
            <div className="flex flex-col w-full">
              <h4 data-ai="3" className="mb-md">
                Контакты
              </h4>
              <div className="flex flex-wrap gap-md md:gap-xl">
                <div className="flex-1">
                  <div data-ai="4" className="flex items-center gap-sm">
                    <p className="min-w-30">Офис продаж</p>
                    <a
                      href="https://yandex.ru/maps/50/perm/house/ulitsa_geroyev_khasana_72b/YU8YdAFgS0wGQFttfXV3cH9nYQ==/?ll=56.260292%2C57.961345&mode=search&sctx=ZAAAAAgAEAAaKAoSCUAXDRmPOENAEfMf0m9f7UtAEhIJj3IwmwDDzj8RxqUqbXGNsz8iBgABAgMEBSgKOABA9lNIAWoCcnWdAc3MzD2gAQCoAQC9AcPwGSrCAQEAggIf0JPQtdGA0L7QtdCyINCl0LDRgdCw0L3QsCA3MiDQkYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=56.260292%2C57.961345&sspn=0.014509%2C0.004357&text=%D0%93%D0%B5%D1%80%D0%BE%D0%B5%D0%B2%20%D0%A5%D0%B0%D1%81%D0%B0%D0%BD%D0%B0%2072%20%D0%91&z=17.05"
                      target="_blank"
                      className="btn link"
                    >
                      Героев Хасана, 72Б
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
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
                  <div data-ai="4" className="flex items-center gap-sm">
                    <p className="min-w-30">Производство</p>
                    <a
                      href="https://yandex.ru/maps/50/perm/house/promyshlennaya_ulitsa_115_2/YU8YdwJgQUwCQFttfXVzcXpmYw==/?ll=56.150895%2C57.920657&z=17.05"
                      target="_blank"
                      className="btn link"
                    >
                      Промышленная 115 корпус 2<span></span>
                      <span></span>
                      <span></span>
                      <span></span>
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
                <div className="flex flex-col flex-1">
                  <div data-ai="4" className="flex items-center gap-sm">
                    <p className="min-w-30">Почта</p>
                    <a
                      className="btn link"
                      href="mailto:pbk59@yandex.ru"
                      area-label="Почта компании"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      pbk59@yandex.ru
                    </a>
                  </div>
                  <div data-ai="4" className="flex items-center gap-sm">
                    <p className="min-w-30">Телефон</p>
                    <a
                      className="btn link"
                      href="tel:+7(342)259-24-46"
                      area-label="Почта компании"
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      +7(342)259-24-46
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-xl *:flex-1">
              <RequestForm isIntro />
              <div data-ai="4" className="h-full">
                <CustomImage
                  className="h-full object-cover saturate-0"
                  src="/pictures/map.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
