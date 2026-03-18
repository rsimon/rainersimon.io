import Markdown from 'react-markdown';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/shadcn/accordion';

const SERVICE_PACKAGES = [{
  title: 'Grant Writing & Technical Planning',
  details: `I help turn your research vision into a technically sound, submission-ready proposal.
I draft work packages, write methodology sections, and develop implementation plans
in clear, funder-friendly language.`,
  services: 
`- **Technical narratives.** Methodology and technical approach sections.

- **Work package scoping.** Milestones, deliverables, risk analysis, and timelines.

- **Proposal review.** Editing technical drafts for clarity, structure, and alignment with call aims.`
}, {
  title: 'UX Design & Prototyping',
  details: `I design tools and interfaces for digital scholarship – from early 
concept sketches to fully functional prototypes ready for user testing or grant 
submissions. I work with researchers and stakeholders to turn ideas into 
concrete designs.`,
  services: 
`- **Project discovery and scoping.** Collaborative sessions to turn early
  ideas into clear, feasible projects.

- **Interface design and wireframes.** Mockups that explore different 
design directions and interaction patterns.

- **Prototype development.** Clickable or functional prototypes for user 
testing, stakeholder review, or inclusion in grant proposals.`
}, {
  title: 'IIIF & Annotation Systems',
  details: `With over a decade of hands-on experience building IIIF-based
tools and annotation systems, I help institutions evaluate and plan their
IIIF adoption, tooling, and workflow design – from minimal setups to
full-scale infrastructure.`,
  services:
`- **Infrastructure assessment.** Evaluation of your IIIF setup for 
  standards alignment, interoperability, and opportunities for improvement.

- **Technology selection.** Guidance in choosing the right tools, 
  frameworks, and platforms for your content, workflows, and budget.

- **Viewer & interface design.** Designing and evaluating image viewers,
  annotation interfaces, and research workflows.

- **Architecture planning.** Planning and scoping systems from lightweight
[minimal computing](https://go-dh.github.io/mincomp/about/) 
setups to full collection management infrastructures.`
}, {
  title: 'Web Application Development',
  details: `I design and build production-ready web applications for
digital scholarship and cultural heritage projects, including digital 
editions, databases, annotation tools, interactive maps, and storytelling 
environments.`,
  services:
`- **Technology consulting.** Framework, architecture and hosting 
  recommendations matched to your project scale, team and budget.

- **End-to-end development.** UX design, frontend and backend implementation,
  integration, and testing – from initial concept to deployed application.

- **Operations and maintenance.** Hosting, updates, and ongoing support, 
  or documentation for a clean handoff to your IT team.`
}, {
  title: 'Managed Hosting & Operations',
  details: `I offer managed hosting and operational support for bespoke 
web applications built with me, as well as for institutional or personal
instances of liiive and tiny.iiif.`,
  services:
`- **Managed hosting.** Long-term operation of your web application with 
ongoing updates, maintenance, and monitoring.

- **Migration and handoff.** Full documentation and support for moving
to your own self-hosted environment whenever you are ready.`
}, {
  title: 'AI & Machine Learning',
  details: `I help evaluate and prototype AI approaches that support
your research and operational goals, with a focus on 
transparency, ethics, and long-term sustainability.`,
  services: 
`- **Tool and model evaluation.** Assessing AI tools and models suited 
  to your content types, workflows, and institutional constraints.

- **Minimal computing AI.** Lightweight AI solutions that run 
  directly in the browser, reducing infrastructure costs and protecting user privacy.

- **Prototyping.** Proof-of-concept implementations to validate ideas
  before full-scale development.
	
- **Integration support.** Guidance on integrating AI outputs 
  into existing systems, with clear documentation of limitations, assumptions and constraints.`
}]

export const ServicesSection = () => {

  return (
    <div className="space-y-16">
      <h2 className="px-0 text-2xl font-bold mb-6">
        My Services 
      </h2>

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