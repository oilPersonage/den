import RequestForm from "./requestForm";

export default function RequestSection() {
  return (
    <section
      className="wrapper py-xl flex max-md:flex-col gap-md md:gap-xl *:flex-1"
      data-animate-container
    >
      <RequestForm />
      <div className="flex flex-col gap-xs md:gap-sm">
        <h2 className="font-bold font-display" data-from-bottom>
          Остались вопросы?
        </h2>
        <p data-from-bottom>
          Оставьте заявку, и мы обязательно вам перезвоним!
        </p>
      </div>
    </section>
  );
}
