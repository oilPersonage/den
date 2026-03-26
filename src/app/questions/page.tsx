import Accordion from "src/components/accordion";
import Loader from "src/components/loader";
import Navs from "src/components/navs";
import Request from "src/components/request";
import RequestForm from "src/components/requestForm";

const items = [
  {
    title: "Какие материалы вы используете для строительства?",
    text: (
      <p>
        Мы применяем только сертифицированные материалы от проверенных
        поставщиков: современные утеплители (минвата, базальт), ОСП, ЛДСП,
        профнастил и так далее.
        <br /> Клиент может выбрать аналоги, но мы консультируем по
        совместимости с климатом и нагрузками
      </p>
    )
  },
  {
    title: "Можно ли выбрать материалы самостоятельно?",
    text: (
      <p>
        Да, вы можете предложить свои материалы, если они соответствуют СНиП и
        имеют сертификаты. <br /> Мы поможем с расчетом и интеграцией, чтобы
        избежать задержек и проблем с гарантией
      </p>
    )
  },
  {
    title: "Какие сроки строительства дома под ключ?",
    text: (
      <p>
        Для простого строительного блок-контейнера сроки от 3х дней в
        зависимости от комплектации и строительных материалов Для модульных
        зданий от 7 дней, в зависимости от сложности работ
      </p>
    )
  },
  {
    title: "Какова история вашей компании?",
    text: "Основаны в 2012 году в Перми. За 14 лет построили 3000+ объектов по всей России. Начали с каркасных домов, расширились до сложных конструктивных металлокаркасных зданий, сооружений"
  },
  {
    title: "С кем вы работали ранее?",
    text: "Среди клиентов — частные лица, а также строительные компании, госучреждения "
  },
  {
    title: "Какие гарантии на работы и материалы?",
    text: "Гарантия до 3х лет. Материалы — от производителей (до 50 лет) "
  },
  {
    title: "Как контролируется качество?",
    text: "На самом производстве есть ответственные должностные лица (мастера), которые контролируют каждый процесс постройки помещения"
  },
  {
    title: "Можно ли ускорить строительство?",
    text: "Да, на 20–30% за доплату (увеличение бригады, премиум-материалы). Максимум — 2,5 месяца для типового проекта"
  },
  {
    title: "Работаете ли вы в кредит или рассрочку?",
    text: "Да, сотрудничаем с банками (Сбер, ВТБ) — до 70% стоимости в кредит. Рассрочка 0% на 6–12 месяцев без банков"
  },
  {
    title: "Можно ли посмотреть ваши объекты?",
    text: "Конечно! Покажем завершенные работы прямо на территории производства. Организуем фото/видео показ по требованию"
  }
];

export default function Questions() {
  return (
    <>
      <div data-page-questions></div>
      <Navs page="/questions" />

      <section className="wrapper min-h-screen mt-[40vh]">
        <div className="pb-lg flex">
          <div className="question-heading-wrapper">
            <h2 className="question-heading">
              Вопрос — ответ
              <span className="question-heading-line"></span>
            </h2>
            <p className="question-counter">
              <span className="question-count">1</span>
              <span>/</span>
              <span className="question-total">15</span>
            </p>
          </div>
          <Accordion items={items} />
          <div className="fake-div"></div>
        </div>
      </section>
      <section className="wrapper pt-lg pb-xl md:py-2xl flex gap-md md:gap-xl max-md:flex-col">
        <div className="flex flex-col gap-xs max-md:mt-sm md:gap-sm">
          <h2 className="font-bold font-display" data-from-bottom>
            Остались вопросы?
          </h2>
          <p>Оставьте заявку, и мы обязательно вам перезвоним!</p>
        </div>
        <RequestForm />
      </section>
      <Loader />
      <Request />
    </>
  );
}
