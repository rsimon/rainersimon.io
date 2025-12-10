
const PROJECTS = [{
  title: 'IMMARKUS',
  summary: 'An open source tool for scholarly semantic image annotation.',
  image: '/assets/img/portfolio-immarkus.jpg'
}, {
  title: 'Machina Emblematica',
  summary: 'A chatbot that brings a small corner of Renaissance knowledge back to life.',
  image: '/assets/img/portfolio-machina-emblematica.jpg'
}, {
  title: 'Annotorious',
  summary: 'Open source JavaScript image annotation library.',
  image: '/images/portfolio-annotorious.jpg'
}, {
  title: 'Recogito Studio',
  summary: 'Collaborative document annotation for the classroom.',
  image: '/assets/img/portfolio-recogito-studio.png'
}, {
  title: 'Heritage Browser',
  summary: 'An interactive map browser for large cultural heritage collections.',
  image: '/assets/img/portfolio-heritage-browser.jpg'
}, {
  title: 'liiive',
  summary: 'Real-time collaborative viewing & annotation for IIIF image collections.',
  image: '/images/portfolio-annotorious.jpg'
}];

export const Portfolio = () => {

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg border border-steel/15 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="aspect-video relative">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/95 to-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-xl tracking-wide font-semibold text-primary-foreground">{project.title}</h3>
              <p className="text-primary-foreground/90">{project.summary}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}