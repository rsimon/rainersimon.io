import { useCallback, useState } from 'react';
import { PROJECTS, type Project } from './portfolio-data';
import { PortfolioDialog } from './portfolio-dialog/portfolio-dialog';

export const Portfolio = () => {

  const [selected, setSelected] = useState<Project>();

  const onCloseDialog = useCallback(() => setSelected(undefined), []);

  return (
    <div>
      <h2 className="px-4 md:px-0 text-xl font-bold mb-8">
        Selected Projects
      </h2>
    
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <div
              className="group relative overflow-hidden md:rounded-sm border border-steel/15 cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelected(project)}>
              <div className="aspect-video relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-xl tracking-wide font-semibold text-primary-foreground">{project.title}</h3>
                  <p className="text-primary-foreground/90">{project.summary}</p>
                </div>
              </div>
            </div>

            <div className="lg:hidden pt-2 px-4 pb-4">
              <h3 className="text-lg tracking-wide font-semibold">{project.title}</h3>
              <p>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <PortfolioDialog
        project={selected}
        onClose={onCloseDialog} />
    </div>
  )

}