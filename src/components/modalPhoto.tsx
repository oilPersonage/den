import ArrowSvg from "./arrowSvg";
import CrossSvg from "./crossSvg";
import CustomImage from "./customImage";

export default function PhotoModal() {
  return (
    <div className="modal max-w-full!" data-image-modal>
      <div
        className="absolute right-4 top-header bg-bg2"
        data-image-close-btn="photos"
      >
        <CrossSvg className="h-12 w-12 justify-center" />
      </div>
      <div className="absolute right-4 top-32 flex flex-col gap-1">
        <button data-photo-prev className="btn link h-12 px-4 bg-bg2 rotate-90">
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
      <div className="modal-wrapper flex p-0! overflow-y-hidden!">
        <div className="bg-black/40 p-0 aspect-video max-w-full overflow-hidden flex items-center justify-center flex-1">
          <CustomImage
            className="object-contain relative z-2"
            data-image-current
            src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
