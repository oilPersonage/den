export function ButtonBig({
  title,
  link = "#",
  id,
  dataModal,
  className = "",
  dataAi,
  count = 42,
}: {
  title: string;
  link?: string;
  id?: string;
  className?: string;
  dataModal?: string;
  dataAi?: string;
  count?: number;
}) {
  const array = Array.from({ length: count / 3 }, (_, i) => i);
  return (
    <a
      id={id}
      data-ai={dataAi}
      data-modal={dataModal}
      className={"uppercase btn biggest black btn-open-modal " + className}
      href={link}
    >
      <div className="btnBigWrapper">
        <div className="btnBigWrapperLine">
          {array.map((_, i) => (
            <div className="btnBigItem" key={i}></div>
          ))}
        </div>
        <div className="btnBigWrapperLine">
          {array.map((_, i) => (
            <div className="btnBigItem" key={i}></div>
          ))}
        </div>
        <div className="btnBigWrapperLine">
          {array.map((_, i) => (
            <div className="btnBigItem" key={i}></div>
          ))}
        </div>
      </div>
      <p>{title}</p>
    </a>
  );
}
