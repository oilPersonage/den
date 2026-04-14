import Request from "components/request";
import Script from "next/script";
import CustomImage from "src/components/customImage";
import Loader from "src/components/loader";
import PhotoModal from "src/components/modalPhoto";
import Navs from "src/components/navs";

export default function Projects() {
  return (
    <>
      <Navs page="/projects" />
      <div className="pt-header" id="projects">
        <div className="main-wrapper projects fixed inset-0">
          <div className="projects-header">
            <div className="projects-top flex flex-col items-center gap-md">
              <h1 data-ai="3">Мы реализовали 3000+ проектов</h1>
              <p className="max-w-200 text-center" data-ai="3">
                Надежные конструкции из качественных материалов. Своевременная
                доставка и монтаж 'под ключ'. Гарантия качества и полное
                сопровождение.
              </p>
            </div>

            <div className="projects-bottom flex gap-lg items-center mt-lg wrapper">
              <div className="flex flex-col gap-xs text-right" data-ai="3">
                <p className="title">
                  Есть идеи, но не знаете как реализовать?
                </p>
                <p>
                  Подберем для вас лучшую идею и поможем с реализацией проекта и
                  доставим до двера
                </p>
              </div>
              <button
                className="btn black px-lg text-2xl"
                data-modal="request"
                data-ai="3"
              >
                СВЯЗАТЬСЯ
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="flex flex-col gap-xs" data-ai="3">
                <p className="title">Готовые решения в наличии</p>
                <p>
                  Бытовки, дачные домики и модульные дома. Быстрая сборка за 1-3
                  дня. Доставка по России от 7 дней.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="main-wrapper relative mt-[100vh] bg-bg"
          id="projects-scroll"
        >
          {/*<div data-stack className='py-lg px-lg flex gap-xl'>
						<h4 className='min-w-80'>МФЦ</h4>
						<div className='min-h-screen'>1</div>
					</div>
					<div data-stack className='py-lg px-lg flex gap-xl'>
						<h4 className='min-w-80'>Строительная компания</h4>
						<div className='min-h-screen'>1</div>
					</div>
					<div data-stack className='py-lg px-lg flex gap-xl'>
						<h4 className='min-w-80'>Еще какая-то</h4>
						<div className='min-h-screen'>1</div>
					</div>*/}

          <div className="py-xl" data-animate-container>
            <h2 data-typing className="mb-md">
              Фотографии
            </h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] *:bg-black/20 gap-1 *:min-h-40">
              {[
                ...Array.from({ length: 19 }, (_, i) => (
                  <div
                    className="relative cursor-pointer group overflow-hidden aspect-square"
                    key={i}
                    data-from-bottom
                    data-src={`/pictures/projects/${i + 1}.webp`}
                    data-image-btn
                  >
                    <CustomImage
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      src={`/pictures/projects/${i + 1}-small.webp`}
                      alt="text"
                    />
                    <div
                      className="absolute group-hover:opacity-100 opacity-0 inset-0 bg-black/50 flex items-center justify-center font-bold text-bg
										 pointer-events-none transition-opacity"
                    >
                      СМОТРЕТЬ
                    </div>
                  </div>
                ))
              ]}
            </div>
          </div>
        </div>
      </div>
      <PhotoModal />
      <Request />
      <Loader />

      <Script
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/scripts/projects.js`}
        type="module"
      />
    </>
  );
}
