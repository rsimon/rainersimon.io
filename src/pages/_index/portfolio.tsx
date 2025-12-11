import { useState } from 'react';
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
  title: 'Recogito Studio',
  summary: 'Collaborative document annotation for the classroom.',
  image: '/assets/img/portfolio-recogito-studio.png',
  blurb: `A collaborative tool for annotating text and images.
Built for classroom use, lecturers can use Recogito Studio to create exercises
for close reading and online group work.

Recogito supports documents in plaintext, [TEI/XML](https://tei-c.org/), and PDF and format,
and allows upload of images as well as import of IIIF manifests. A plugin architecture 
allows extending functionality with custom components, features or even full custom 
annotation environments.
  `,
  client: '[Performant Software Solutions](https://www.performantsoftware.com/)',
  technologies: '[React](https://react.dev/), [Annotorious](https://annotoruious.dev), [PDF.js](https://mozilla.github.io/pdf.js/)',
  link: 'https://recogitostudio.org'
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
  blurb: `An open source JavaScript library for adding image annotation capabilities to 
your web application with just a few lines of code.

Annotorious integrates seamlessly with OpenSeadragon, allowing developers to easily build
applications for annotating high-resolution zoomable images, including images served 
via [IIIF](https://iiif.io). Annotorious is compatible with the
[W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).`,
  technologies: '[OpenSeadragon](https://openseadragon.github.io/), [PixiJS](https://pixijs.com/), [React](https://react.dev/), ',
  link: 'https://annotorious.dev'
}, {
  title: 'IMMARKUS',
  summary: 'A semantic image annotation tool for digital humanists and heritage professionals.',
  image: '/assets/img/portfolio-immarkus.png',
  blurb: `A browser-based, open source tool for semantic image annotation, 
built for researchers, digital humanists, and cultural heritage professionals. It includes 
a multi-image annotation workbench with AI-powered drawing tools for faster, smarter 
selection; a lightweight ontology builder and an interactive, searchable knowledge graph.

IMMARKUS supports local images as well as IIIF collections and operates entirely in your browser, 
without transmitting data to a server. All images, data models, and annotations are stored 
on your device, for complete privacy and control over your work.`,
  client: '[KU Leuven](https://www.arts.kuleuven.be/english)',
  technologies: '[IIIF](https://iiif.io), [Annotorious](https://annotorious.dev), [SegmentAnything 2](https://ai.meta.com/sam2/), [OpenCV.js](https://github.com/TechStark/opencv-js)',
  link: 'https://immarkus.xmarkus.org'
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
  blurb: `liiive is a web-based tool that lets you explore and annotate digital image 
collections with others. Built on the [IIIF](https://iiif.io) standard, it’s designed for 
anyone who works with high-resolution images—whether you’re a researcher, educator, student, 
or cultural heritage professional.

With liiive, you collaborate in real-time, navigate image collections together, and see where 
your teammates are lookin. Annotate images using drawing tools to highlight specific areas, 
add comments, and engage in discussions directly on the image.`,
  technologies: '[IIIF](https://iiif.io), [Annotorious](https://annotorious.dev), [YJS](https://yjs.dev/), [Supabase](https://supabase.com/)',
  link: 'https://liiive.now'
}];

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

              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
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
              className="relative h-28 border-b bg-cover bg-center"
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