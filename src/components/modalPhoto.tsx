import ArrowSvg from "./arrowSvg";
import CrossSvg from "./crossSvg";
import CustomImage from "./customImage";

export default function PhotoModal() {
  return (
    <div className="modal max-w-full!" data-modal-name="photos">
      <div className="modal-wrapper flex p-0! overflow-visible!">
        <div className="modal-inner p-0! aspect-video max-w-full!">
          <div className="absolute -right-13 top-0" data-modal-close="photos">
            <CrossSvg />
          </div>
          <div className="absolute -right-13 top-16 flex flex-col gap-1">
            <button
              data-photo-prev
              className="btn link h-12 px-4 bg-bg2 rotate-90"
            >
              <ArrowSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <button
              data-photo-next
              className="btn link h-12 px-4 bg-bg2 -rotate-90"
            >
              <ArrowSvg />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <CustomImage className="object-contain" src="" alt="" />
        </div>
      </div>
    </div>
  );
}
