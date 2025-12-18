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
      className="relative h-full items-stretch"
      opts={{
        loop: true
      }}>
      <CarouselContent>
        {props.project.screenshots.map(screenshot => isVideo(screenshot) ? (
          <CarouselItem className="h-full">
            <video 
              aria-label={screenshot.alt}
              className="h-full object-cover"
              autoPlay loop muted playsInline 
              src={screenshot.video} />
          </CarouselItem>
        ) : (
          <CarouselItem className="h-full">
              <img 
                alt={screenshot.alt}
                className="h-full object-cover"
                src={screenshot.image} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="absolute inset-0 size-full bg-linear-to-t from-black/80 via-black/10 via-30% to-black/10" />

      <CarouselDotButtons />
    </Carousel>
  )

}