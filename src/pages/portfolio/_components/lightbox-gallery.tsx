import { useState, useMemo } from 'react';
import Lightbox, { type Slide } from 'yet-another-react-lightbox';
import Video from 'yet-another-react-lightbox/plugins/video';
import { isVideo, type ProjectScreenshot } from '../_data';

import 'yet-another-react-lightbox/styles.css';

interface LightboxGallerProps {

  screenshots: ProjectScreenshot[];

}

export const LightboxGallery = (props: LightboxGallerProps) => {

  const [index, setIndex] = useState<number>(-1);

  const slides: Slide[] = useMemo(() => {
    if ((props.screenshots || []).length === 0)
      return [];

    return props.screenshots.map(screenshot => {
      return (isVideo(screenshot)) ? {
        type: 'video',
        sources: [{
          src: screenshot.video
        }],
        autoPlay: true
      } as unknown as Slide : {
        type: 'image',
        src: screenshot.image,
        alt: screenshot.alt
      }
    });
  }, [props.screenshots]);

  if ((props.screenshots || []).length === 0) return null;

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {props.screenshots.map((screenshot, idx) => (
          <div
            key={idx}
            className="cursor-pointer aspect-square overflow-hidden rounded-sm shadow-xs hover:shadow-md transition-shadow duration-200 bg-black/5"
            onClick={() => setIndex(idx)}>
            {isVideo(screenshot) ? (
              <div className="w-full h-full flex items-center justify-center text-2xl text-white bg-linear-to-br from-black/40 to-black/60 hover:to-black/70 transition-colors duration-300">
                ▶
              </div>
            ) : (
              <img
                src={screenshot.image}
                alt={screenshot.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>

      <Lightbox
        open={index > -1}
        index={index}
        plugins={[Video]}
        close={() => setIndex(-1)}
        slides={slides} />
    </div>
  );
}
