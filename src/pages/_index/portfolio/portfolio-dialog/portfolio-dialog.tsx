import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import Markdown from 'react-markdown';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import type { Project } from '../portfolio-data';
import { ScreenshotCarousel } from './screenshot-carousel';

interface PortfolioDialogProps {

  project: Project;

  onClose(): void;

}

const InlineMarkdown = (props: { children: string }) => {

  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a className="hover:underline" {...props} target="_blank" />
        )
      }}>
      {props.children}
    </Markdown> 
  )

}

export const PortfolioDialog = (props: PortfolioDialogProps) => {

  const { project } = props;

  useEffect(() => {
    if (project)
      // Push a new history state when dialog opens
      window.history.pushState({ dialogOpen: true }, '');

    const handlePopState = (event: PopStateEvent) => {
      if (project) {
        props.onClose();
        event.preventDefault();
      }
    }

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  }, [project, props.onClose]);

  const onCloseDialog = () => {
    if (window.history.state?.dialogOpen)
      window.history.back();
    
    props.onClose();
  }

  return (
    <Dialog
      open={Boolean(project)}
      onOpenChange={onCloseDialog}>
      {project && (
        <DialogContent
          className="max-h-[95vh] p-0 border-0 outline-0 gap-0 shadow-xl flex max-w-6xl! w-[calc(100vw-2rem)] rounded-sm"
          onOpenAutoFocus={e => e.preventDefault()}>
          <div className="w-160 max-w-1/2 shrink-0 relative">
            <div className="h-full bg-black relative rounded-l-sm overflow-hidden">
              <ScreenshotCarousel 
                project={props.project} />
            </div>
          </div>

          <div className="px-11 py-6 leading-relaxed grow overflow-y-auto">
            <DialogHeader>
              <h3 className="text-2xl font-bold tracking-wide">
                {project.title}
              </h3>
            </DialogHeader>
            
            <div>
              <div className="prose pt-6 max-w-md">
                <Markdown>
                  {project.blurb}
                </Markdown>
              </div>

              <div className="space-y-4 mt-8 pb-1">
                {project.client && (
                  <div>
                    <div className="font-bold tracking-wide">Client:</div>
                    <div className="text-muted-foreground">
                      <InlineMarkdown>{project.client}</InlineMarkdown>
                    </div>
                  </div>
                )}

                {project.technologies && (
                  <div>
                    <div className="font-bold tracking-wide">Key technologies:</div>
                    <div className="text-muted-foreground">
                      <InlineMarkdown>{project.technologies}</InlineMarkdown>
                    </div>
                  </div>
                )}

                {project.link && (
                  <div className="text-steel-light flex gap-1.5 items-center mt-8">
                    <ExternalLink className="size-4.5" strokeWidth={2.25} /> 
                    <a 
                      href={project.link}
                      className="font-semibold text-lg hover:underline">{project.link.replace(/^https?:\/\//, '')}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}