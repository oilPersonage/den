import CustomImage from "src/components/customImage";
import PhotoModal from "src/components/modalPhoto";
import Navs from "src/components/navs";

export default function Projects() {
  return (
    <>
      <Navs page="/projects" />
      <div className="main-wrapper pt-header">
        {/* <h2 className="pl-lg  top-26">Проекты</h2> */}
        <div className="relative">
          <div data-stack className="py-lg px-lg flex gap-xl">
            <h4 className="min-w-80">МФЦ</h4>
            <div className="min-h-screen">1</div>
          </div>
          <div data-stack className="py-lg px-lg flex gap-xl">
            <h4 className="min-w-80">Строительная компания</h4>
            <div className="min-h-screen">1</div>
          </div>
          <div data-stack className="py-lg px-lg flex gap-xl">
            <h4 className="min-w-80">Еще какая-то</h4>
            <div className="min-h-screen">1</div>
          </div>
        </div>

        <div className="py-xl">
          <h2 className="mb-md">Фотографии</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] *:bg-black/20 gap-1 *:min-h-40">
            {[
              ...Array.from({ length: 2 }, (_, i) => (
                <div
                  key={i}
                  data-src={`/pictures/production/${i}.png`}
                  data-modal="photos"
                >
                  <CustomImage
                    className="w-full h-full object-cover"
                    src={`/pictures/production/${i}.png`}
                    alt="text"
                  />
                </div>
              ))
            ]}
          </div>
        </div>
      </div>
      <PhotoModal />
    </>
  );
}
