import Markdown from 'react-markdown';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import type { Project } from '../_data';
import { LightboxGallery } from './lightbox-gallery';

interface ProjectDetailsProps {

  project: Project;

}

export const ProjectDetails = (props: ProjectDetailsProps) => {

  const { project } = props;

  const navigateBack = (e: React.MouseEvent) => {
    e.preventDefault();
    history.back();
  }

  return (
    <div className="container max-w-xl">
      <div className="mb-6 space-y-1">
        <nav>
          <a 
            href="/"
            onClick={navigateBack}
            className="flex gap-1 items-center font-light text-muted-foreground no-underline hover:text-foreground hover:underline ">
            <ChevronLeft className="size-5" strokeWidth={1.5} /> Back
          </a>
        </nav>

        <h1 className="text-3xl font-bold">
          Case Study: {project.title}
        </h1>
      </div>

      <div className="my-12">
        <img 
          src={project.image}
          alt={project.image_alt} 
          className="rounded shadow-xs border aspect-12/5 object-cover" />
      </div>

      <div className="my-12">
        <div className="prose max-w-xl">
          <Markdown>{project.blurb}</Markdown>
        </div>

        <div className="space-y-4 mt-8">
          {project.client && (
            <div className="flex gap-2 items-center">
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
      </div>
    </div>
  )
}
