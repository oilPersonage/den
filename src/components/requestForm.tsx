export default function RequestForm() {
  return (
    <div className="flex-1">
      <h4 data-ai="3" className="mb-sm max-md:mb-md" data-from-bottom>
        Напишите нам
      </h4>
      <form action="#" className="flex flex-col gap-sm">
        <div className="flex flex-col gap-md mb-sm">
          <label htmlFor="name" data-ai="4" data-from-bottom>
            <p>Ваше имя</p>
            <div className="input-wrapper">
              <input
                className="input-base"
                type="text"
                name="name"
                placeholder="Имя"
              />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <label htmlFor="phone" data-ai="4" data-from-bottom>
            <p>Ваш телефон</p>
            <div className="input-wrapper">
              <input
                className="input-base"
                type="text"
                placeholder="Телефон"
                name="phone"
                data-phone
              />

              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
        </div>
        <label
          data-ai="4"
          htmlFor="description"
          className="mb-md"
          data-from-bottom
        >
          <p>Описание</p>
          <div className="input-wrapper">
            <textarea
              className="input-base"
              placeholder="Напишите ваш вопрос"
              name="description"
            ></textarea>

            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <div data-ai="4" className="flex flex-col gap-sm" data-from-bottom>
          <a href="#" className="btn black">
            Отправить
            <span className="btn-tl"></span>
            <span className="btn-tr"></span>
            <span className="btn-bl"></span>
            <span className="btn-br"></span>
          </a>

          <span data-ai="4" className="leading-[1.1] inline">
            Нажимая кнопку, вы даете согласие на обработку персональных данных в
            соответствии с{" "}
            <a href="#" className="link-short inline" data-modal="polities">
              Политикой конфиденциальности
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}
