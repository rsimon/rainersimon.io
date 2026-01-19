import type { Project, ProjectScreenshot, ProjectVideoScreenshot } from '../portfolio-data';
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem
} from '@/components/ui/carousel';

interface ScreenshotCarouselProps {

  project: Project;

}

const isVideo = (screenshot: ProjectScreenshot): screenshot is ProjectVideoScreenshot =>
  'video' in screenshot;

export const ScreenshotCarousel = (props: ScreenshotCarouselProps) => {

  return (
    <Carousel
      className="relative h-full items-stretch -mx-px -my-px">
      <CarouselContent className="absolute inset-0 size-full">
        {props.project.screenshots.map(screenshot => isVideo(screenshot) ? (
          <CarouselItem>
            <video 
              aria-label={screenshot.alt}
              className="size-full object-contain p-6"
              autoPlay loop muted playsInline 
              src={screenshot.video} />
          </CarouselItem>
        ) : (
          <CarouselItem>
              <img 
                alt={screenshot.alt}
                className="size-full object-contain p-6"
                src={screenshot.image} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute inset-0 size-full bg-linear-to-t from-black/80 via-black/10 via-15% to-black/0" />

      <CarouselDotButtons />
    </Carousel>
  )

}