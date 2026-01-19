import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { isVideo, type Project, type ProjectScreenshot } from '../portfolio-data';
import { Skeleton } from '@/components/ui/skeleton';

interface ScreenshotGalleryMobileProps {

  project: Project;

}

const MobileLightbox = ({ screenshots, initialIndex, onClose }: { 
  screenshots: ProjectScreenshot[], 
  initialIndex: number, 
  onClose: () => void 
}) => {
  // For future use
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => setCurrentIndex(initialIndex), [initialIndex]);

  const current = useMemo(() => (
    currentIndex >= 0 ? screenshots[currentIndex] : undefined
  ), [screenshots, currentIndex]);

  return current ? (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-black/80 rounded-full z-10 p-2">
        <X className="size-6" />
      </button>

      <div className="p-3 relative w-full h-dvh flex items-center justify-center">
        {isVideo(current) ? (
          <video 
            aria-label={current.alt}
            className="max-w-full max-h-full object-contain"
            autoPlay loop muted playsInline 
            src={current.video} />
        ) : (
          <img 
            src={current.image} 
            alt={current.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} />
        )}
      </div>
    </div>
  ) : null;

}

const Thumbnail = ({ 
  screenshot, 
  onClick 
}: { 
  screenshot: ProjectScreenshot, 
  onClick: () => void 
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="aspect-video rounded overflow-hidden cursor-pointer relative"
      onClick={onClick}>
      {!loaded && (
        <Skeleton className="absolute inset-0" />
      )}
      {isVideo(screenshot) ? (
        <video 
          aria-label={screenshot.alt}
          autoPlay loop muted playsInline 
          src={screenshot.video} 
          className="w-full h-full object-cover"
          onLoadedData={() => setLoaded(true)} />
      ) : (
        <img 
          src={screenshot.image} 
          alt={screenshot.alt}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)} />
      )}
    </div>
  );
};

export const ScreenshotGalleryMobile = (props: ScreenshotGalleryMobileProps) => {

  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return props.project.screenshots.length > 0 ? (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          {props.project.screenshots.map((screenshot, idx) => (
            <Thumbnail
              key={`screenshot:${idx}`}
              screenshot={screenshot}
              onClick={() => setLightboxIndex(idx)} />
          ))}
        </div>
      </div>

      <MobileLightbox 
        screenshots={props.project.screenshots} 
        initialIndex={lightboxIndex} 
        onClose={() => setLightboxIndex(-1)} />
    </>
  ) : null;

}

