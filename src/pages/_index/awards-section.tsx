import Markdown from 'react-markdown';

interface Award {

  year: number;

  title: string;

  url: string;

  blurb: string;

  badge?: string;

}

const AWARDS: Award[] = [{
  year: 2022,
  title: 'Tarboot Digital Culture & Heritage Contest',
  url: 'https://www.nli.org.il/en/at-your-service/announcements/tarboot-contest-winners',
  blurb: 'Runner-up, General Track with [Heritage Browser](/portfolio/heritage-browser). Joint submission with [DHDev](https://www.dh-dev.com/).'
}, {
  year: 2019,
  title: 'Open Publishing Awards',
  url: 'https://web.archive.org/web/20191222162010/https://openpublishingawards.org/',
  blurb: 'First prize, Open Source Software Category, with [Recogito](https://classicalstudies.org/scs-blog/kpemallon/review-recogito-visualizing-mapping-and-annotating-ancient-texts).',  
  badge: '/assets/img/awards/op-awards-2019.png'
}, {
  year: 2018,
  title: 'Digital Humanities Awards',
  blurb: 'Best DH Tool or Suite of Tools category, with [Recogito](https://what-is-dh-the-album.netlify.app/singles/recogito/).',
  url: 'http://dhawards.org/dhawards2018/results/',
  badge: '/assets/img/awards/dh-awards-2018.png'
}, {
  year: 2016,
  title: 'Digital Humanities Awards',
  url: 'http://dhawards.org/dhawards2016/results/',
  blurb: 'Best DH Data Visualization, with [Peripleo](https://journal.code4lib.org/articles/11144).',
  badge: '/assets/img/awards/dh-awards-2016.png'
}];

export const AwardsSection = () => {
  return (
    <div className="px-4 md:px-0 max-w-2xl">
      <h2 className="text-2xl font-bold mb-12">
        Awards & Recognition
      </h2>
      
      <div className="px-1">
        {AWARDS.map((award, index) => (
          <div key={`${award.year}-${index}`} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="size-3 bg-steel-lighter rounded-full" />

              {index !== AWARDS.length - 1 && (
                <div className="w-0.5 h-40 lg:h-36 bg-steel-lighter" />
              )}
            </div>
            
            <div className="flex-1 flex flex-row gap-6 items-start">
              <div className="flex-1 -translate-y-2">
                <div className="flex gap-2 font-semibold text-steel-light">
                  {award.year}
                </div>

                <a 
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-steel-light transition-colors text-lg font-medium">
                  {award.title}
                </a>
                
                <div className="text-base prose max-w-3/4">
                  <Markdown>
                    {award.blurb}
                  </Markdown>
                </div>
              </div>

              <div className="hidden lg:block shrink-0 min-w-32">
                {award.badge && (
                  <img
                    src={award.badge}
                    alt={`${award.title} badge`}
                    className="max-w-48 rounded-sm shadow-xs"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

}
