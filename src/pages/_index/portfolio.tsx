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
  blurb: `Recogito Studio is a collaborative tool for annotating text and images,
built for classroom use. Lecturers can create exercises for close reading, facilitate
online group work, and review student activity in real time.

Recogito supports documents in plaintext, [TEI/XML](https://tei-c.org/), and PDF and format,
and allows upload of images as well as import of IIIF manifests. A plugin architecture 
allows extending functionality with custom components, features or even full custom 
annotation environments.`,
  client: '[Performant Software Solutions](https://www.performantsoftware.com/) / [University of Bonn](https://www.uni-bonn.de/en/university/university)',
  technologies: '[React](https://react.dev/), [Annotorious](https://annotoruious.dev), [PDF.js](https://mozilla.github.io/pdf.js/)',
  link: 'https://recogitostudio.org'
}, {
  title: 'Machina Emblematica',
  summary: 'A chatbot that brings a small corner of Renaissance knowledge back to life.',
  image: '/assets/img/portfolio-machina-emblematica.jpg',
  blurb: `Machina Emblematica is a chat interface for exploring the _Symbola et Emblemata_, a 
16th-century encyclopedia of allegorical illustrations, natural history, ancient fables, and 
moral reflections. 

Built as a multimodal retrieval-augmented generation (RAG) system, it draws directly 
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
  blurb: `Annotorious is an open source JavaScript library that adds image annotation 
capabilities to your web application with only a few lines of code.

It integrates seamlessly with OpenSeadragon, making it easy to build tools for
annotating high-resolution, zoomable images, including those served via
[IIIF](https://iiif.io). Annotorious is fully compatible with the
[W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).`,
  technologies: '[OpenSeadragon](https://openseadragon.github.io/), [PixiJS](https://pixijs.com/), [React](https://react.dev/), ',
  link: 'https://annotorious.dev'
}, {
  title: 'IMMARKUS',
  summary: 'A semantic image annotation tool for digital humanists and heritage professionals.',
  image: '/assets/img/portfolio-immarkus.png',
  blurb: `IMMARKUS is a browser-based, open source environment for semantic image annotation, 
designed for researchers, digital humanists, and cultural heritage professionals. It offers 
a multi-image annotation workbench with AI-assisted drawing tools for faster region 
selection, a lightweight ontology builder, and an interactive, searchable knowledge graph.

The application works entirely client-side and supports both local images and IIIF
collections. All data – images, models, and annotations – remains on the user's device, 
ensuring full privacy and control over their work.`,
  client: '[KU Leuven](https://www.arts.kuleuven.be/english)',
  technologies: '[IIIF](https://iiif.io), [Annotorious](https://annotorious.dev), [SegmentAnything 2](https://ai.meta.com/sam2/), [OpenCV.js](https://github.com/TechStark/opencv-js)',
  link: 'https://immarkus.xmarkus.org'
}, {
  title: 'Heritage Browser',
  summary: 'An interactive map browser for large cultural heritage collections.',
  image: '/assets/img/portfolio-heritage-browser.jpg',
  blurb: `Heritage Browser is map-based discovery interface for exploring large
cultural heritage collections. Built with MapLibre and a custom backend, it 
enables smooth, immediate navigation through hundreds of thousands of geo-located 
objects.

Deployed by the National Library of Israel for nearly 350,000 items, it supports
full-text search, dynamic filtering, IIIF integration, and a responsive interface
for both desktop and mobile. I designed and developed the frontend and the interaction 
architecture.`,
  client: '[DHDev](https://www.dh-dev.com/) / [National Library of Israel](https://www.nli.org.il/en)',
  technologies: '[MapLibre](https://maplibre.org/), [React](https://react.dev/)',
  link: 'https://geo.nli.org.il/en'
}, {
  title: 'liiive',
  summary: 'Online platform for real-time collaborative viewing & annotation for IIIF image collections.',
  image: '/assets/img/portfolio-liiive.jpg',
  blurb: `liiive is a web-based platform for real-time collaborative viewing and annotation
of digital image collections. Built on the [IIIF](https://iiif.io) standard, it supports researchers,
educators, students, and cultural heritage professionals working with high-resolution images.

Users can navigate images together, see each other's cursor positions, and annotate collaboratively
in real time. Drawing tools allow highlighting regions of interest, adding comments, and engaging in  
discussions directly on the image.`,
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

            <div className="lg:hidden text-center pt-2 px-4 pb-4">
              <h3 className="text-lg tracking-wide font-semibold">{project.title}</h3>
              <p>{project.summary}</p>
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