import Markdown from 'react-markdown';

const SERVICE_PACKAGES = [{
  title: 'UX Design and Interaction Prototyping',
  details: `I design tools and interfaces tailored to your audience—whether 
scholars, curators, students, or the general public. I help you develop concepts,
test ideas, and create interactive prototypes for digital publications, scholarly 
tools and research environments.`,
  services: 
`- **Discovery and scoping.** I work with you to develop initial ideas 
  into well-defined projects, using stakeholder analysis, persona development 
  and collaborative design sessions.

- **Wireframes and interface concepts.** I create mockups that help
you explore different design directions and interaction patterns.

- **Prototype development** I build interactive prototypes you can test 
with users, demonstrate to stakeholders, or include in grant applications.`
}, {
  title: 'IIIF & Annotation Workflow Consulting',
  details: `I help Digital Humanities research projects, DH centers, and 
small to mid-sized museums and archives to make informed decisions around 
IIIF adoption. I evaluate tools, technologies, metadata practies, and advise
on issues of manifest generation, viewer user experience, and annotation 
infrastructure`,
  services:
`- **Infrastructure assessment.** I evaluate your existing IIIF setup for 
  gaps, standards compliance, interoperability issues, and opportunities 
  for optimization.

- **Technology selection.** I help you compare tools, frameworks, and 
  platforms to find solutions that fit your technical capacity, budget, 
  and institutional context.

- **User experience design.** I provide UX guidance for image viewers, 
  annotation interfaces, and research workflows.

- **Architecture planning.** I work with you to design solutions that 
  match your project needs, from lightweight [minimal computing](https://go-dh.github.io/mincomp/about/) 
  setups to database-driven systems.

- **Grant proposal support.** I support you with writing technical 
  components of research grants, including narrative sections, milestone 
  planning, budget justification, and technical feasibility assessments.`
}, {
  title: 'Web Application Development',
  details: `I design and build production-ready web applications for digital 
humanities and cultural heritage projects. From digital editions to custom 
databases, annotation tools, interactive maps or storytelling projects.`,
  services:
`- **Technology consulting.** I help you choose frameworks, hosting 
  solutions, and architectural approaches that fit your technical 
  requirements and project budget.

- **End-to-end development.** I provide complete UX design and 
  frontend/backend development, from initial concept to deployed 
  application.

- **Operations support.** I offer ongoing maintenance and hosting,
  or provide documentation and handoff support for your IT department 
  to self-host.`
}, {
  title: 'AI & Machine Learning for Collections',
  details: `I help you explore where AI can genuinely support your 
research goals and users, with proper focus on quality, transparency, 
ethics, and sustainability. This includes evaluation and prototyping of 
OCR/HTR, entity extraction, metadata enrichment, human-in-the-loop systems, 
and RAG pipelines.`,
  services: 
`- **Tool and model evaluation.** I assess AI tools and models best suited 
  for your content types, use cases, and institutional constraints.

- **Minimal computing approaches.** I specialize in lightweight AI 
  solutions that run entirely in the browser, reducing infrastructure cost, 
  protecting user privacy, and helping your applications more long-term 
  sustainable.

- **Architecture design and prototyping.** I build proof-of-contept 
  implementations that validate approaches before you put them into 
  full-scale development.
	
- **Integration support.** I help you integrate AI-generated outputs 
into your existing systems while maintaining transparency, documenting 
limitations and keeping in mind ethical considerations and sustainability.`
}, {
  title: 'Grant Writing & Technical Planning Support',
  details: `I help you scope technical work packages, write methodological 
and technical narratives, and define implementation steps for grant 
applications. I translate complex technical ideas into clear, funder-friendly 
language.`,
  services: 
`- **Technical narratives.** I write methodology and technical approach sections 
that communicate your project's feasibility and innovation.

- **Work package scoping.** I help you define technical tasks, milestones, 
timelines, deliverables, and risk assessments.

- **Proposal review.** I review and refine existing technical sections to 
  improve clarity, feasibility, and alignment with funder priorities.`
}]

export const ServicesList = () => {

  return (
    <div>
      {SERVICE_PACKAGES.map(({ title, details, services}) => (
        <div 
          key={title}
          className="prose lg:prose-lg max-w-full">
          <h4>{title}</h4>
          <p>{details}</p>
          <Markdown>{services}</Markdown>
        </div>
      ))}
    </div>
  )

}