interface Award {
  year: number;
  title: string;
  category: string;
  project?: {
    name: string;
    url: string;
  };
  awardUrl?: string;
  badge?: string;
}

const AWARDS: Award[] = [
  {
    year: 2022,
    title: 'Tarboot Competition',
    category: 'General Track, Second Place',
    awardUrl: '',
    badge: '/assets/img/awards/award-2022.png'
  },
  {
    year: 2019,
    title: 'Open Publishing Awards',
    category: 'Open Source Software Category, First Prize',
    project: {
      name: 'Recogito',
      url: 'https://recogito.pelagios.org'
    },
    awardUrl: 'https://openpublishingawards.org/index.php/recogito/',
    badge: '/assets/img/awards/award-2019.png'
  },
  {
    year: 2018,
    title: 'Digital Humanities Awards',
    category: 'Best DH Tool or Suite of Tools',
    project: {
      name: 'Recogito',
      url: 'https://recogito.pelagios.org'
    },
    awardUrl: 'http://dhawards.org/dhawards2018/results/',
    badge: '/assets/img/awards/award-2018.png'
  },
  {
    year: 2016,
    title: 'Digital Humanities Awards',
    category: 'Best DH Data Visualization',
    project: {
      name: 'Peripleo',
      url: 'http://peripleo.pelagios.org'
    },
    awardUrl: 'http://dhawards.org/dhawards2016/results/',
    badge: '/assets/img/awards/award-2016.png'
  },
  {
    year: 2014,
    title: 'Open Humanities Awards',
    category: 'Open Track',
    awardUrl: 'http://dm2e.eu/open-humanities-awards-round-2-winners-announced/'
  }
];

export const AwardsSection = () => {
  return (
    <div className="px-0 md:px-10 max-w-3xl">
      <h2 className="px-4 md:px-0 text-xl font-bold mb-12">
        Awards & Recognition
      </h2>
      
      <div className="px-4 md:px-0 space-y-12">
        {AWARDS.map((award, index) => (
          <div key={`${award.year}-${index}`} className="flex gap-8">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-steel-light rounded-full mt-2" />
              {index !== AWARDS.length - 1 && (
                <div className="w-0.5 h-24 bg-gray-200 mt-4" />
              )}
            </div>
            
            {/* Award content */}
            <div className="pb-4 flex-1 flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="flex-1">
                <div className="text-sm font-semibold text-steel-light tracking-wide mb-1">
                  {award.year}
                </div>
                
                <a 
                  href={award.awardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={award.awardUrl ? "hover:text-steel-light transition-colors" : ""}
                >
                  <h3 className="text-lg font-bold text-steel-dark mb-2">
                    {award.title}
                  </h3>
                </a>
                
                <p className="text-base text-gray-700 mb-2">
                  {award.category}
                </p>
                
                {award.project && (
                  <p className="text-sm text-gray-600">
                    with{' '}
                    <a 
                      href={award.project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-steel-light hover:underline"
                    >
                      {award.project.name}
                    </a>
                  </p>
                )}
              </div>

              {award.badge && (
                <div className="flex-shrink-0">
                  <img
                    src={award.badge}
                    alt={`${award.title} badge`}
                    className="h-24 w-24 md:h-28 md:w-28 object-contain"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
