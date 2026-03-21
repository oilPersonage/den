import Navs from "src/components/navs";

export default function Projects() {
  return (
    <>
      <Navs page="/projects" />
      <ul className="flex">
        <div className="relative">
          <h2 className="sticky pl-lg top-26">Проекты</h2>
          <h4 className="sticky pl-lg top-42 h-screen">Лукоил</h4>
          <h4 className="sticky pl-lg top-52 h-screen">Трансерфинг</h4>
          <h4 className="sticky pl-lg top-62 h-screen">МФЦ</h4>
          <h2 className="sticky pl-lg pt-lg top-72 h-screen bg-bg2">
            Фотографии
          </h2>
        </div>

        {/* Правая колонка с контентом */}
        <div className="flex-1 pt-9">
          <div className="h-screen flex items-center px-lg">
            <div>Контент для Лукоила</div>
          </div>
          <div className="h-screen flex items-center px-lg">
            <div>Контент для Трансерфинга</div>
          </div>
          <div className="h-screen flex items-center px-lg">
            <div>Контент для МФЦ</div>
          </div>
          <div className="min-h-screen flex px-lg bg-bg2 py-lg">
            <div className="min-h-screen w-full">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] *:bg-bg gap-1 *:min-h-40">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
