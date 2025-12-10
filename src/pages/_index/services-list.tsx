import Markdown from 'react-markdown';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const SERVICE_PACKAGES = [{
  title: 'UX Design and Interaction Prototyping',
  details: `I design user-centered tools and interfaces that help 
scholars, curators, students, or the general public interact with complex
cultural data more easily. I help you test ideas, and create interactive 
prototypes for digital publications, scholarly tools and research environments.`,
  services: 
`- **Project discovery and scoping.** Collaborative sessions to turn early
  ideas into clear, feasible projects, supported by stakeholder analysis and
  persona development.

- **Interface design & wireframes.** Mockups that explore alternative 
design directions and interaction patterns.

- **Prototype development.** Clickable or functional prototypes for user 
testing, stakeholder review, or inclusion in grant proposals.`
}, {
  title: 'IIIF & Annotation Workflow Consulting',
  details: `I help Digital Humanities projects, DH centers, and 
cultural institutions make informed decisions around IIIF adoption, 
annotation tooling, metadata practies, and viewer UX.`,
  services:
`- **Infrastructure assessment.** Evaluation of your IIIF setup for 
  standards alignment, interoperability, and opportunities for improvement.

- **Technology selection.** Guidance in choosing tools, frameworks, and 
  platforms appropriate to your resources and project requirements.

- **User experience design.** UX consulting for image viewers, 
  annotation interfaces, and research workflows.

- **Architecture planning.** System designs from [minimal computing](https://go-dh.github.io/mincomp/about/) 
  setups to database-driven infrastructures.

- **Grant proposal support.** Technical narratives, milestone plans, and 
  feasility sections for Digital Humanities grant applications.`
}, {
  title: 'Web Application Development',
  details: `I design and build production-ready web applications tailored
to the needs of digital scholarship and cultural heritage, including digital 
editions, databases, annotation tools, interactive maps, storytelling 
environments, and more.`,
  services:
`- **Technology consulting.** Framework, architecture and hosting 
  recommendations that fit your needs and budget.

- **End-to-end development.** UX design, frontend and backend implementation,
  integration and testing, from initial concept to deployed application.

- **Operations & maintenance.** Hosting, updates and support, or documentation
  for a clean handoff to your IT team.`
}, {
  title: 'AI & Machine Learning for Collections',
  details: `I help you evaluate and prototype AI approaches that support
your research or collection management goals – always with a focus on 
transparency, ethics, and long-term sustainability.`,
  services: 
`- **Tool and model evaluation.** Assessment of AI tools and models suited 
  to your content types, workflows, and institutional constraints.

- **Minimal computing AI.** Lightweight AI solutions that run 
  directly in the browser, reducing costs and protecting user privacy.

- **Architecture design and prototyping.** Proof-of-concept 
  implementations to validate ideas before full-scale development.
	
- **Integration support.** Guidance for integrating AI outputs 
  into existing systems while documenting limitations and ensuring
  responsible use.`
}, {
  title: 'Grant Writing & Technical Planning Support',
  details: `I help you articulate technical work packages, methodologies, and 
implementation strategies for grant applications and write narrative that 
translates complex technical ideas into clear, funder-friendly language.`,
  services: 
`- **Technical narratives.** Methodology and technical approach sections 
tailored to funder expectations.

- **Work package scoping.** Milestones, deliverables, risk analysis, and 
implementation planning.

- **Proposal review.** Editing and refining existing drafts to improve
  structure, and alignment with call aims.`
}]

export const ServicesList = () => {

  return (
    <div className="space-y-16">
      <p className="text-lg leading-relaxed">
         I work with clients at every stage of the software development lifecycle: 
         from requirements gathering and technology assessment, to architecture, UX 
         design, implementation, to system integration, product launch and 
         operations. My services:
      </p>

      <Accordion type="multiple">
        {SERVICE_PACKAGES.map(({ title, details, services }) => (
          <AccordionItem
            key={title}
            value={title}>
            <AccordionTrigger
              className="text-lg font-semibold items-start">
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