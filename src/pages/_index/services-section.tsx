import Markdown from 'react-markdown';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/shadcn/accordion';

const SERVICE_PACKAGES = [{
  title: 'Grant Writing & Technical Planning Support',
  details: `I help with the technical parts of your grant application,
including work packages, methodology sections, and implementation planning.
I translate complex technical ideas into clear, funder-friendly 
language.`,
  services: 
`- **Technical narratives.** Methodology and technical approach sections.

- **Work package scoping.** Milestones, deliverables, risk analysis, and timelines.

- **Proposal review.** Editing drafts for clarity, structure, and alignment with call aims.`
}, {
  title: 'UX Design and Interaction Prototyping',
  details: `I design user-centered tools and interfaces that help 
researchers, curators, students, or the general public interact with complex
cultural data. I help test ideas, and create interactive prototypes 
for digital publications, scholarly tools and research environments.`,
  services: 
`- **Project discovery and scoping.** Collaborative sessions to turn early
  ideas into clear, feasible projects, supported by stakeholder analysis and
  personas.

- **Interface design and wireframes.** Mockups that explore different 
design directions and interaction patterns.

- **Prototype development.** Clickable or functional prototypes for user 
testing, stakeholder review, or inclusion in grant proposals.`
}, {
  title: 'IIIF & Annotation Workflow Consulting',
  details: `I help Digital Humanities projects, DH centers, and 
cultural institutions make informed decisions about IIIF adoption, 
annotation tooling, metadata practices, and viewer user experience.`,
  services:
`- **Infrastructure assessment.** Evaluation of your IIIF setup for 
  standards alignment, interoperability, and opportunities for improvement.

- **Technology selection.** Guidance in choosing tools, frameworks, and 
  platforms appropriate to your resources and project requirements.

- **User experience design.** UX consulting for image viewers, 
  annotation interfaces, and research workflows.

- **Architecture planning.** Designing systems ranging from
[minimal computing](https://go-dh.github.io/mincomp/about/) 
setups to database-driven infrastructures.

- **Grant proposal support.** Technical narratives, milestone planning, and 
  feasibility sections for Digital Humanities grant applications.`
}, {
  title: 'Web Application Development',
  details: `I design and build production-ready web applications for
digital scholarship and cultural heritage projects, including digital 
editions, databases, annotation tools, interactive maps, and storytelling 
environments.`,
  services:
`- **Technology consulting.** Framework, architecture and hosting 
  recommendations that fit your needs and budget.

- **End-to-end development.** UX design, frontend and backend implementation,
  integration, and testing, from initial concept to deployed application.

- **Operations and maintenance.** Hosting, updates, and ongoing support, 
  or documentation for a clean handoff to your IT team.`
}, {
  title: 'Managed Hosting & Operations',
  details: `I provide managed hosting and operational support for custom 
web applications and open source tools. Whether it's a bespoke project built 
specifically for your needs or a deployment of liiive or Tiny IIIF, I handle 
infrastructure, updates, monitoring, and ongoing maintenance so you can focus 
on your research and collections.`,
  services:
`- **Managed hosting.** Reliable, secure hosting for custom-built applications 
  and open source tools with automatic backups and monitoring.

- **Deployment and configuration.** Setting up your application in production, 
  configuring databases, APIs, and external integrations.

- **Monitoring and incident response.** 24/7 monitoring, uptime tracking, 
  and rapid response to issues to keep your systems running smoothly.

- **Updates and maintenance.** Regular security updates, dependency management, 
  and proactive maintenance to ensure long-term sustainability.

- **Documentation and handoff.** Clear documentation so you can take over 
  operations at any time, or continue with managed support as your needs evolve.`
}, {
  title: 'AI & Machine Learning for Collections',
  details: `I help evaluate and prototype AI approaches that support
your research or collection management goals, with a focus on 
transparency, ethics, and long-term sustainability.`,
  services: 
`- **Tool and model evaluation.** Assessing AI tools and models suited 
  to your content types, workflows, and institutional constraints.

- **Minimal computing AI.** Lightweight AI solutions that run 
  directly in the browser, reducing infrastructure costs and protecting user privacy.

- **Architecture design and prototyping.** Building proof-of-concept 
  implementations to validate ideas before full-scale development.
	
- **Integration support.** Guidance on integrating AI outputs 
  into existing systems, with clear documentation of limitations, assumptions and constraints.`
}]

export const ServicesSection = () => {

  return (
    <div className="space-y-16">
      <h2 className="px-0 text-xl font-bold mb-4">
        My Services
      </h2>

      <p className="text-lg leading-relaxed">
         I work with clients at every stage of the software development lifecycle: 
         from requirements gathering and technology assessment, to architecture, UX 
         design, implementation, to system integration, product launch and 
         operations.
      </p>

      <Accordion type="multiple">
        {SERVICE_PACKAGES.map(({ title, details, services }) => (
          <AccordionItem
            key={title}
            value={title}>
            <AccordionTrigger
              className="text-lg font-medium">
              <h3 className="space-y-1">
                {title}
              </h3>
            </AccordionTrigger>

            <AccordionContent>
              <div className="prose max-w-full bg-steel-lighter/10 p-4 rounded">
                <p>{details}</p>
                <Markdown>{services}</Markdown>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )

}