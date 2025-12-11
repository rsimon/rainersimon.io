import { useState, type ReactNode } from 'react';
import Markdown from 'react-markdown';
import { ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

interface Project {

  title: string;

  summary: string;

  image: string;

  blurb: string;

  client?: string;

  technologies?: string;

  link?: string;

}

const PROJECTS: Project[] = [{
  title: 'IMMARKUS',
  summary: 'A semantic image annotation tool for digital humanists and heritage professionals.',
  image: '/assets/img/portfolio-immarkus.png',
  blurb: '',
  client: '[KU Leuven](https://www.arts.kuleuven.be/english)'
}, {
  title: 'Machina Emblematica',
  summary: 'A chatbot that brings a small corner of Renaissance knowledge back to life.',
  image: '/assets/img/portfolio-machina-emblematica.jpg',
  blurb: `Machina Emblematica is a chat interface for exploring the _Symbola et Emblemata_, a 
16th-century encyclopedia of allegorical illustrations, natural history, ancient fables, and 
moral reflections. 

Built as a multimodal, retrieval-augmented generation (RAG) system, the Machina draws directly 
from high-resolution scans provided by the [Bayerische Staatsbibliothek](https://www.digitale-sammlungen.de/de/details/bsb10575861) 
and text transcriptions from [Furman University](https://www.furman.edu/humanities-center/).
I designed the user experience for the project and developed the frontend web application.`,
  client: 'Michela Vignoli / [AIT Austrian Institute of Technology](https://www.ait.ac.at/themen/data-science-artificial-intelligence)',
  technologies: '[Astro](https://astro.build/), [React](https://react.dev/)',
  link: 'https://machina.rainersimon.io'
}, {
  title: 'Annotorious',
  summary: 'Open source JavaScript image annotation library.',
  image: '/assets/img/portfolio-annotorious.jpg',
  blurb: ''
}, {
  title: 'Recogito Studio',
  summary: 'Collaborative document annotation for the classroom.',
  image: '/assets/img/portfolio-recogito-studio.png',
  blurb: '',
  client: '[Performant Software Solutions](https://www.performantsoftware.com/)'
}, {
  title: 'Heritage Browser',
  summary: 'An interactive map browser for large cultural heritage collections.',
  image: '/assets/img/portfolio-heritage-browser.jpg',
  blurb: '',
  client: '[DHDev](https://www.dh-dev.com/)'
}, {
  title: 'liiive',
  summary: 'Online platform for real-time collaborative viewing & annotation for IIIF image collections.',
  image: '/assets/img/portfolio-liiive.jpg',
  blurb: ''
}];

const InlineMarkdown = (props: { children: string }) => {

  return (
    <Markdown
      components={{
        a: ({ node, ...props }) => (
          <a className="underline font-medium" {...props} target="_blank" />
        )
      }}>
      {props.children}
    </Markdown> 
  )

}

export const Portfolio = () => {

  const [selected, setSelected] = useState<Project>();

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">
        Selected Projects
      </h2>
    
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-steel/15 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            onClick={() => setSelected(project)}>
            <div className="aspect-video relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/95 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl tracking-wide font-semibold text-primary-foreground">{project.title}</h3>
                <p className="text-primary-foreground/90">{project.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={Boolean(selected)}
        onOpenChange={() => setSelected(undefined)}>
        {selected && (
          <DialogContent
            className="p-0 overflow-hidden border-0 shadow-xl gap-0 lg:max-w-2xl"
            onOpenAutoFocus={e => e.preventDefault()}>
            <DialogHeader 
              className="relative h-44 border-b bg-cover bg-center"
              style={{ backgroundImage: `url(${selected.image})` }}>
              <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-primary/40" />
              <h3 className="absolute bottom-0 text-white text-2xl font-semibold tracking-wide mb-2 px-8 py-2">
                {selected.title}
              </h3>
            </DialogHeader>
            
            <div className="p-8 leading-relaxed">
              <div className="prose max-w-full">
                <Markdown>
                  {selected.blurb}
                </Markdown>
              </div>

              <div className="space-y-0.5 mt-4 pb-1">
                {selected.client && (
                  <div className="flex gap-2 [&>p]:p-0">
                    <div className="font-semibold">Client:</div>
                    <InlineMarkdown>{selected.client}</InlineMarkdown>
                  </div>
                )}

                {selected.technologies && (
                  <div className="flex gap-2">
                    <div className="font-semibold">Key technologies:</div>
                    <InlineMarkdown>{selected.technologies}</InlineMarkdown>
                  </div>
                )}

                {selected.link && (
                  <div className="text-steel-light flex gap-1.5 items-center mt-4">
                    <ExternalLink className="size-4" /> 
                    <a 
                      href={selected.link}
                      className="font-medium hover:underline">{selected.link.replace(/^https?:\/\//, '')}</a>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )

}