import Markdown from 'react-markdown';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import type { Project } from '../_data';
import { LightboxGallery } from './lightbox-gallery';
import { slugify } from '@/lib/utils';

interface ProjectDetailsProps {

  project: Project;

  previousProject?: Project | null;

  nextProject?: Project | null;

}

export const ProjectDetails = (props: ProjectDetailsProps) => {

  const { project, previousProject, nextProject } = props;

  return (
    <div className="container max-w-xl">
      <div className="mb-6 space-y-1">
        <nav>
          <a 
            href="/#portfolio"
            className="flex gap-1 items-center font-light text-muted-foreground no-underline hover:text-foreground hover:underline ">
            <ChevronLeft className="size-5" strokeWidth={1.5} /> Back
          </a>
        </nav>

        <h1 className="text-3xl font-bold">
          {project.title}
        </h1>
      </div>

      <div className="my-12">
        <img 
          src={project.image}
          alt={project.image_alt} 
          className="rounded shadow-xs border aspect-video object-cover" />
      </div>

      <div className="my-12">
        <div className="prose max-w-xl">
          <Markdown>{project.blurb}</Markdown>
        </div>

        <div className="space-y-4 mt-8">
          {project.client && (
            <div className="flex gap-2 items-start">
              <div className="font-bold tracking-wide">Client:</div>
              <div className="text-muted-foreground"><Markdown>{project.client}</Markdown></div>
            </div>
          )}

          {project.link && (
            <div className="flex gap-1.5 items-center my-6">
              <ExternalLink 
                className="size-4" />
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="font-semibold no-underline hover:underline">{project.link.replace(/^https?:\/\//, '')}</a>
            </div>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="pt-8">
            <LightboxGallery 
              screenshots={project.screenshots} />
          </div>
        )}

        {(previousProject || nextProject) && (
          <nav className="flex justify-between gap-4 mt-12 pt-8 border-t">
            {previousProject ? (
              <a 
                href={`/portfolio/${slugify(previousProject.title)}`}
                className="flex-1 flex gap-4 items-start py-2 rounded no-underline hover:underline text-foreground">
                <ChevronLeft className="size-5" strokeWidth={1.5} />
                <span className="text-sm">
                  <div className="text-xs font-light uppercase tracking-wide text-muted-foreground">Previous</div>
                  <div className="font-semibold">{previousProject.title}</div>
                </span>
              </a>
            ) : (
              <div className="flex-1" />
            )}

            {nextProject ? (
              <a 
                href={`/portfolio/${slugify(nextProject.title)}`}
                className="flex-1 flex gap-4 items-start justify-end py-2 rounded no-underline hover:underline text-foreground">
                <span className="text-sm text-right">
                  <div className="text-xs font-light uppercase tracking-wide text-muted-foreground">Next</div>
                  <div className="font-semibold">{nextProject.title}</div>
                </span>
                <ChevronRight className="size-5" strokeWidth={1.5} />
              </a>
            ) : (
              <div className="flex-1" />
            )}
          </nav>
        )}
      </div>
    </div>
  )
}
