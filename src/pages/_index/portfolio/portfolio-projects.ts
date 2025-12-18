export interface Project {

  title: string;

  summary: string;

  image: string;

  screenshots: ProjectScreenshot[];

  blurb: string;

  client?: string;

  technologies?: string;

  link?: string;

}

export interface ProjectImageScreenshot {
  
  alt: string;

  image: string;

}

export interface ProjectVideoScreenshot {

  alt: string;

  video: string;

}

export type ProjectScreenshot = ProjectImageScreenshot | ProjectVideoScreenshot;

export const PROJECTS: Project[] = [{
  title: 'Recogito Studio',
  summary: 'Collaborative document annotation for the classroom.',
  image: '/assets/img/portfolio-recogito-studio.png',
  blurb: `Recogito Studio is a web-based platform for collaborative 
annotation of texts and images, designed for classroom teaching and 
group work.

The platform supports document uploads in plaintext, [TEI/XML](https://tei-c.org/), 
and PDF format, as well as image files and IIIF manifests. It's plugin-based 
architecture allows the system to be extended with custom components, features, 
or even fully bespoke annotation environments.Recogito Studio is open-source 
software, released under the GNU Affero General Public License (AGPL).`,
  client: '[Performant Software Solutions](https://www.performantsoftware.com/) / [University of Bonn](https://www.uni-bonn.de/en/university/university)',
  technologies: '[Astro](https://astro.build/), [React](https://react.dev/), [Annotorious](https://annotoruious.dev), [PDF.js](https://mozilla.github.io/pdf.js/), [Supabase](https://supabase.com/)',
  link: 'https://recogitostudio.org',
  screenshots: []
}, {
  title: 'Machina Emblematica',
  summary: 'A chatbot that brings a small corner of Renaissance knowledge back to life.',
  image: '/assets/img/portfolio-machina-emblematica.jpg',
  blurb: `Machina Emblematica is a conversational interface for exploring the 
_Symbola et Emblemata_, a 16th-century encyclopedia of allegorical illustrations, 
natural history, ancient fables, and moral reflections. 

The system is built as a multimodal retrieval-augmented generation (RAG) 
application, drawing on high-resolution digitized sources from the
[Bayerische Staatsbibliothek](https://www.digitale-sammlungen.de/de/details/bsb10575861) 
and text transcriptions from [Furman University](https://www.furman.edu/humanities-center/).
I designed the user experience and developed the frontend web application.`,
  client: 'Michela Vignoli / [AIT Austrian Institute of Technology](https://www.ait.ac.at/themen/data-science-artificial-intelligence)',
  technologies: '[Astro](https://astro.build/), [React](https://react.dev/), [Marqo](https://www.marqo.ai/)',
  link: 'https://machina.rainersimon.io',
  screenshots: []
}, {
  title: 'Annotorious',
  summary: 'An open source JavaScript library for image annotation.',
  image: '/assets/img/portfolio-annotorious.jpg',
  blurb: `Annotorious is an open source JavaScript library that adds image annotation 
capabilities to your web application with only a few lines of code.

It integrates seamlessly with OpenSeadragon, making it easy to build tools for
annotating high-resolution, zoomable images, including those served via
[IIIF](https://iiif.io). Annotorious is fully compatible with the
[W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).`,
  technologies: '[OpenSeadragon](https://openseadragon.github.io/), [PixiJS](https://pixijs.com/), [React](https://react.dev/), ',
  link: 'https://annotorious.dev',
  screenshots: []
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
  link: 'https://immarkus.xmarkus.org',
  screenshots: []
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
  link: 'https://geo.nli.org.il/en',
  screenshots: []
}, {
  title: 'liiive',
  summary: 'An online platform for real-time collaborative viewing & annotation for IIIF image collections.',
  image: '/assets/img/portfolio-liiive.jpg',
  blurb: `liiive is a web-based platform for real-time collaborative viewing and annotation
of digital image collections. Built on the [IIIF](https://iiif.io) standard, it supports researchers,
educators, students, and cultural heritage professionals working with high-resolution images.

Users can navigate images together, see each other's cursor positions, and annotate collaboratively
in real time. Drawing tools allow highlighting regions of interest, adding comments, and engaging in  
discussions directly on the image.`,
  technologies: '[IIIF](https://iiif.io), [Annotorious](https://annotorious.dev), [YJS](https://yjs.dev/), [Supabase](https://supabase.com/)',
  link: 'https://liiive.now',
  screenshots: []
}];