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
    badge: '/assets/img/awards/dh-awards-2018.png'
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
    <div className="px-0 max-w-2xl">
      <h2 className="text-2xl font-bold mb-12">
        Awards & Recognition
      </h2>
      
      <div className="px-4 md:px-0">
        {AWARDS.map((award, index) => (
          <div key={`${award.year}-${index}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="size-2 bg-steel-lighter rounded-full" />
              {index !== AWARDS.length - 1 && (
                <div className="w-0.5 h-32 bg-steel-lighter" />
              )}
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 -translate-y-2.5">
                <div className="text-lg text-medium text-steel-light tracking-wide">
                  {award.year}
                </div>
                
                <a 
                  href={award.awardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={award.awardUrl ? "hover:text-steel-light transition-colors" : ""}>
                  {award.title}
                </a>
                
                <p className="text-base text-muted-foreground">
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
                <div className="shrink-0">
                  <img
                    src={award.badge}
                    alt={`${award.title} badge`}
                    className="max-w-48"
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
