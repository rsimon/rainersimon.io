import type { Project } from '../portfolio-projects';
import {
  Carousel,
  CarouselContent,
  CarouselDotButtons,
  CarouselItem
} from '@/components/ui/carousel';

interface ScreenshotCarouselProps {

  project: Project;

}

export const ScreenshotCarousel = (props: ScreenshotCarouselProps) => {

  return (
    <Carousel 
      className="relative h-full items-stretch"
      opts={{
        loop: true
      }}>
      <CarouselContent>
        <CarouselItem className="h-full">
          <video 
            className="h-full object-cover"
            autoPlay loop muted playsInline 
            src="/assets/img/portfolio/machina-01.mp4"/>
        </CarouselItem>
        <CarouselItem className="h-full">
            <img 
            className="h-full object-cover"
            src="/assets/img/portfolio/machina-02.png" />
        </CarouselItem>
        <CarouselItem className="h-full">
            <img 
              className="h-full object-cover"
              src="/assets/img/portfolio/machina-03.png" />
        </CarouselItem>
      </CarouselContent>

      <div className="absolute inset-0 size-full bg-linear-to-t from-black/80 via-black/10 via-30% to-black/10" />

      <CarouselDotButtons />
    </Carousel>
  )

}