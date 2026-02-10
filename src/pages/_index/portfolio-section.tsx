import { PROJECTS } from '@/pages/portfolio/_data';
import { slugify } from '@/lib/utils';

export const PortfolioSection = () => {
  return (
    <div>
      <h2 className="px-4 md:px-0 text-2xl font-bold mb-8">
        Some of My Projects
      </h2>

      <div className="px-3 md:px-0 grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <a
              href={`/portfolio/${slugify(project.title)}`}
              className="group shadow-xs relative overflow-hidden rounded-sm border border-steel/15 hover:shadow-2xl transition-all duration-300 block">
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.image_alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async" />

                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-xl tracking-wide font-semibold text-primary-foreground">{project.title}</h3>
                  <p className="text-primary-foreground/90">{project.summary}</p>
                </div>
              </div>
            </a>

            <div className="lg:hidden pt-2 px-0.5 pb-4">
              <h3 className="text-lg tracking-wide font-semibold">{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};