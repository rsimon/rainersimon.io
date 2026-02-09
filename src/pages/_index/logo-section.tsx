const LOGOS = [{
  src: '/assets/img/client-logos/ku-leuven.svg',
  alt: 'KU Leuven'
}, {
  src: '/assets/img/client-logos/performant.svg',
  alt: 'Performant Software Solutions'
}, {
  src: '/assets/img/client-logos/pelagios-network.svg',
  alt: 'Pelagios Network'
}, {
  src: '/assets/img/client-logos/open-university.svg',
  alt: 'Open University'
}, {
  src: '/assets/img/client-logos/uni-bonn.svg',
  alt: 'University of Bonn'
}, {
  src: '/assets/img/client-logos/duke-university.svg',
  alt: 'Duke University'
}, {
  src: '/assets/img/client-logos/mm-noe.jpg',
  alt: 'Museumsmanagement Niederösterreich'
}, {
  src: '/assets/img/client-logos/univie.svg',
  alt: 'University of Vienna'
}, {
  src: '/assets/img/client-logos/oeaw.svg',
  alt: 'Austrian Academy of Sciences'
}, {
  src: '/assets/img/client-logos/durham-university.svg',
  alt: 'Durham University'
}, {
  src: '/assets/img/client-logos/tel-aviv-university.png',
  alt: 'Tel Aviv University'
}, {
  src: '/assets/img/client-logos/alan-turing-institute.svg',
  alt: 'Alan Turing Institute'
}, {
  src: '/assets/img/client-logos/oxford-university.svg',
  alt: 'University of Oxford'
}];

export const LogoSection = () => {

  return (
    <div className="px-0 md:px-10 max-w-4xl">
      <h2 className="px-4 md:px-0 text-xl font-bold mb-16">
        Selected Clients & Partners
      </h2>
          
      <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 md:gap-24 items-center">
        {LOGOS.map(logo => (
          <div 
            key={logo.src}
            className="flex items-center justify-center h-14">
            <img 
              className="max-h-full max-w-full w-auto h-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              src={logo.src}
              alt={logo.alt}
              loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )

}