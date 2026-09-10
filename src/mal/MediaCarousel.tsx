import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Picture } from './Picture';

export function MediaCarousel({
  images,
  className = '',
}: {
  images: readonly string[];
  className?: string;
}) {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const loop = [...images, ...images];

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox]);

  return (
    <>
      <div
        className={`block block-media-carousel block--bg-light ${className}`.trim()}
        data-paused={lightbox ? 'true' : undefined}
      >
        <div className="block-media-carousel__viewport">
          <div className="block-media-carousel__track">
            {loop.map((src, ii) => (
              <button
                key={`${src}-${ii}`}
                type="button"
                className="block-media-carousel__slide"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  setLightbox(src);
                }}
                aria-label="View full image"
              >
                <Picture src={src} alt="" className="picture--cover picture--rounded" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox &&
        createPortal(
          <div
            className="block-media-carousel__lightbox"
            role="dialog"
            aria-modal="true"
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="" className="block-media-carousel__lightbox-img" />
          </div>,
          document.body
        )}
    </>
  );
}
