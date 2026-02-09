export interface Project {

  title: string;

  summary: string;

  image: string;

  image_alt?: string;

  blurb: string;

  client?: string;

  link?: string;

  screenshots?: ProjectScreenshot[];

}

export interface ProjectImageScreenshot {
  
  alt: string;

  image: string;

}

export interface ProjectVideoScreenshot {

  alt: string;

  video: string;

  thumbnail?: string;

}

export type ProjectScreenshot = ProjectImageScreenshot | ProjectVideoScreenshot;

export const isVideo = (screenshot: ProjectScreenshot): screenshot is ProjectVideoScreenshot =>
  'video' in screenshot;

export const PROJECTS: Project[] = [{
  title: 'Recogito Studio',
  summary: 'Real-time collaborative annotation for teaching, discussion, and shared close reading.',
  image: '/assets/img/portfolio-recogito-studio.png',
  image_alt: 'Anntated text in the Recogito Studio user interface',
  blurb: `Recogito Studio is a web-based annotation platform for texts and images, designed for classroom teaching, collaborative close reading, and online group work in the digital humanities and education.

The application supports real-time collaborative annotation on plaintext, TEI/XML, and PDF documents, as well as images and IIIF manifests. A plugin-based architecture allows Recogito Studio to be extended with custom components, domain-specific tools, or fully bespoke annotation environments.

I was responsible for the annotation frontend and the interaction design of the real-time collaboration features, including their underlying client-side architecture. Recogito Studio is released as open-source software under the GNU Affero General Public License (AGPL).`,
  client: '[Performant Software Solutions](https://www.performantsoftware.com/) / [University of Bonn](https://www.uni-bonn.de/en/university/university)',
  link: 'https://recogitostudio.org',
  screenshots: [{
    image: '/assets/img/portfolio/recogito-studio-02.jpg', alt: 'An annotated 2-column PDF document.'
  }, {
    video: '/assets/img/portfolio/recogito-studio-01.mp4', alt: 'Collaborative text annotation'    
  }]
}, {
  title: 'Machina Emblematica',
  summary: 'A chatbot that brings a small corner of Renaissance knowledge back to life.',
  image: '/assets/img/portfolio-machina-emblematica.jpg',
  image_alt: 'Machina Emblematica website logo',
  blurb: `Machina Emblematica is a conversational interface for exploring the 
_Symbola et Emblemata_, a 16th-century encyclopedia of allegorical illustrations, natural history, ancient fables, and moral reflections. 

Built as a multimodal retrieval-augmented generation (RAG) system, the application combines high-resolution digitized images from the [Bayerische Staatsbibliothek](https://www.digitale-sammlungen.de/de/details/bsb10575861)  with curated textual transcriptions from [Furman University](https://www.furman.edu/humanities-center/).

I designed the user experience and developed the application, focusing on a playful, engaging ineraction, while keeping the historical sources transparent and accessible.`,
  client: 'Michela Vignoli / [AIT Austrian Institute of Technology](https://www.ait.ac.at/themen/data-science-artificial-intelligence)',
  link: 'https://machina.rainersimon.io',
  screenshots: [{
    image: '/assets/img/portfolio/machina-01.jpg', alt: 'Machina Emblematica mobile start page'
  },{
    video: '/assets/img/portfolio/machina-02.mp4', alt: 'Conversational interface'
  },{
    image: '/assets/img/portfolio/machina-03.jpg', alt: 'UI design: About section'
  },{
    image: '/assets/img/portfolio/machina-04.jpg', alt: 'UI design: source preview'
  }]
},{
  title: 'Annotorious',
  summary: 'Add image annotation functionality to any website with just a few lines of code.',
  image: '/assets/img/portfolio-annotorious.jpg',
  image_alt: 'An aerial photograph of a park, with Annotorious shape annotations',
  blurb: `Annotorious is an open source JavaScript library that adds image annotation capabilities to web applications with minimal setup.

It integrates seamlessly with OpenSeadragon and supports high-resolution, zoomable images, including [IIIF](https://iiif.io) content. Annotorious is fully compatible with the [W3C Web Annotation Data Model](https://www.w3.org/TR/annotation-model/), and provides a flexible JavaScript and TypeScript API for building custom annotation tools and workflows.

I created Annotorious in 2014 and have been actively maintaining it since. The library is widely used in Digital Humanities and cultural heritage projects, and forms a core component in several of my other projects, including Recogito Studio, IMMARKUS and liiive.`,
  link: 'https://annotorious.dev',
  screenshots: [{
    image: '/assets/img/portfolio/annotorious-01.png', alt: 'Annotorious "Getting Started" JavaScript code snippet' 
  }]
}, {
  title: 'IMMARKUS',
  summary: 'An all-in-browser annotation environment designed for digital humanists and heritage professionals.',
  image: '/assets/img/portfolio-immarkus.png',
  image_alt: 'A screenshot of the IMMARKUS knowledge graph',
  blurb: `IMMARKUS is a browser-based, open source environment for semantic image annotation, designed for researchers, digital humanists, and cultural heritage professionals.
  
It provides a multi-image annotation workbench with AI-assisted drawing tools for faster region selection, a lightweight ontology builder, and an interactive, searchable knowledge graph that connects annotations to structured concepts.

I developed the application and frontend architecture working closely with the research team of the [InfraLives](https://www.infrastructurelives.eu/) project at KU Leuven. The application runs entirely client-side and supports both local images and IIIF collections. All data – images, models, and annotations – remains on the user's device, ensuring full privacy and control.`,
  client: '[KU Leuven](https://www.arts.kuleuven.be/english)',
  link: 'https://immarkus.xmarkus.org',
  screenshots: [{
    image: '/assets/img/portfolio/immarkus-01.jpg', alt: 'A city map image annotated in IMMARKUS'
  },{
    video: '/assets/img/portfolio/immarkus-02.mp4', alt: 'The IMMARKUS smart scissors tool'
  },{
    image: '/assets/img/portfolio/immarkus-03.png', alt: 'The knowledge graph interface'
  },{
    image: '/assets/img/portfolio/immarkus-04.png', alt: 'Data model designer'
  }]
}, {
  title: 'Heritage Browser',
  summary: 'Fast, map-based exploration of hundreds of thousands of cultural heritage objects.',
  image: '/assets/img/portfolio-heritage-browser.jpg',
  image_alt: 'A map of Europe with colourful markers, indicating the locations of cultural heritage objects',
  blurb: `Heritage Browser is map-based discovery interface for exploring large cultural heritage collections through geographic space. 
  
Built with MapLibre and a custom storage and indexing backend, it enables smooth navigation across hundreds of thousands of geo-located objects.

The project originated as a joint entry with [DHDev](https://www.dh-dev.com/) to the [2022 TARBOOT Digital Culture & Heritage Contest](https://www.nli.org.il/en/at-your-service/announcements/tarboot-contest-winners), where it reached second place in the General Track. 

Following the contest, the prototype was developed further in close collaboration with the National Library of Israel and is now deployed in production, providing access to nearly 350,000 items. The system supports full-text search, dynamic filtering, IIIF integration, and a responsive interface for both desktop and mobile use.

I designed and developed the frontend and interaction architecture, working closely with DHDev and the team at the National Library of Israel throughout the project.`,
  client: '[DHDev](https://www.dh-dev.com/) / [National Library of Israel](https://www.nli.org.il/en)',
  link: 'https://geo.nli.org.il/en',
  screenshots: [{
    video: '/assets/img/portfolio/heritage-browser-01.mp4', alt: 'Heritage Browser map interface'
  }]
}, {
  title: 'liiive',
  summary: 'Shared viewing and annotation for IIIF image collections.',
  image: '/assets/img/portfolio-liiive.jpg',
  image_alt: 'A medieval manuscript image with coloured annotations and users\' cursors',
  blurb: `liiive is a web-based platform for real-time collaborative viewing and annotation of high-resolution image collections.

Built on the [IIIF](https://iiif.io) standard, it lets multiple users explore visual materials–artworks, manuscripts, maps, or historical documents–together, see each other's cursors, and create annotations simultaneously.Drawing tools allow highlighting regions of interest, adding comments, and engaging in discussions directly on the image.

Following a collaboration with the University of Graz, I have released the tool as an open-source project, under the MIT license.`,
  link: 'https://liiive.now',
  screenshots: [{
    image: '/assets/img/portfolio/liiive-01.jpg', alt: 'Live collaborator cursors' 
  }, {
    video: '/assets/img/portfolio/liiive-02.mp4', alt: 'liiive smart scissors annotation'
  }, {
    image: '/assets/img/portfolio/liiive-03.png', alt: 'Dashboar' 
  }]
}, {
  title: 'DIP.world',
  summary: 'A map-driven interface for exploring Lower Austria\'s ceramic heritage.',
  image: '/assets/img/portfolio-dipworld.jpg',
  image_alt: 'DIP.world project thumbnail',
  blurb: `DIP.world is a map-driven interface for exploring the geographic distribution of historic tiled stove fragments held in museums across Lower Austria.

Developed for the [Museumsmanagement Niederösterreich](https://www.noemuseen.at/), the application presents collection data from multiple regional museums in an interactive, touch-friendly map interface.

The system was initially designed for use on a large-format touch display at the [Kaiser Franz Josef Museum](https://www.kaiser-franz-josef-museum-baden.at/) in Baden, Lower Austria. It is still available online, and continues to get regular data updates.

I designed and developed the frontend and user experience as well as the data update mechanism that refreshes the content from daily database dumps.`,
  link: 'https://www.noemuseen.at/dipworldnoemuseen/',
  client: '[Museumsmanagement Niederösterreich](https://www.noemuseen.at/)'
//}, {
//  title: 'Atlas of Prosodic Convergence',
//  summary: 'A cartographic prototype for comparing prosodic patterns across Cyprus.',
//  image: '/assets/img/portfolio-prosodic-convergence.jpg',
//  image_alt: 'Atlas of Prosodic Convergence project thumbnail',
//  blurb: ``,
//  client: 'University of Oxford Phonetics Lab, Faculty of Linguistics, Philology, and Phonetics',
//  link: 'https://mappingprosody.phon.ox.ac.uk/what-we-are-doing',
//  screenshots: []
//}, {
//  title: 'Geo-Coding Egyptian Places',
//  summary: 'A case study comparing automated geo-coding methods for historical gazetters.',
//  image: '/assets/img/portfolio-bm-egypt.jpg',
//  image_alt: 'Geo-Coding Egpytian Place Names project thumbnail',
//  blurb: ``,
//  client: 'The British Museum',
//  screenshots: []
//}, {
//  title: 'tiny.iiif',
//  summary: 'A minimal, low-cost IIIF server for small institutions and personal collections.',
//  image: '/assets/img/portfolio-tiny-iiif.jpg',
//  image_alt: 'tiny.iiif project thumbnail',
//  blurb: ``,
//  screenshots: []
//}, {
//  title: 'Digital Periegesis',
//  summary: 'A spatial reading environment for Pausanias\' Description of Greece.',
//  image: '/assets/img/portfolio-pausanias.jpg',
//  image_alt: 'Digital Periegesis project thumbnail',
//  blurb: ``,
//  link: 'https://pausanias.rainersimon.io',
//  screenshots: []
//}, {
//  title: 'Mappola Inscriptions Map',
//  summary: 'A reusable web map component for epigraphic data exploration.',
//  image: '/assets/img/portfolio-mappola.jpg',
//  image_alt: 'Mappola Inscriptions Map project thumbnail',
//  blurb: ``,
//  link: 'https://db.mappola.eu/inscriptions/map',
//  screenshots: []
}];