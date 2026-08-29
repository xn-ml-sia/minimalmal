import { Link } from 'react-router-dom';
import { work, projects } from '../content';
import { Contact } from '../Contact';
import { FigureStripes } from '../FigureStripes';
import { SplitTextShuffle } from '../SplitTextShuffle';
import { TextFractured } from '../TextFractured';

export function WorkPage() {
  return (
    <div className="page page-work">
      <div className="work-feature">
        <header className="hero-work">
          <div className="hero-work__content">
            <h1 className="heading heading--hg sr-only">{work.title}</h1>
            <TextFractured text={work.title} />
            <p className="hero-work__intro">
              <SplitTextShuffle text={work.intro} lines={[...work.introLines]} />
            </p>
          </div>
          <div className="hero-work__video">
            <div className="video-player video-player--rounded video-player--playing">
              <div className="video-player__video">
                <video src="/mal/reel/reel.webm" autoPlay loop muted playsInline />
              </div>
              <div className="video-player__controls">
                <div className="video-player__caption">Reel</div>
              </div>
            </div>
          </div>
        </header>

        <div className="mal-impact">
          {work.impact.map((stat) => (
            <div key={`${stat.org}-${stat.value}`} className="mal-impact__item">
              <span className="mal-impact__org">{stat.org}</span>
              <span className="mal-impact__value">{stat.value}</span>
              <span className="mal-impact__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="list-article list-article--mode-default">
          {work.items.map((item, index) => {
            const project = projects.find((p) => p.name === item.name);
            const inner = (
              <>
                <FigureStripes src={item.image} alt={item.name} className="article__figure" />
                <header>
                  <h2 className="heading heading--md article__heading">{item.name}</h2>
                  <p className="article__description">
                    <strong>{item.headline}. </strong>
                    {item.desc}
                  </p>
                </header>
              </>
            );
            return project ? (
              <Link
                key={item.name}
                to={`/work/${project.slug}`}
                className={`article ${index % 2 === 0 ? 'article--header-dist-row' : 'article--header-dist-column'}`}
              >
                {inner}
              </Link>
            ) : (
              <article
                key={item.name}
                className={`article ${index % 2 === 0 ? 'article--header-dist-row' : 'article--header-dist-column'}`}
              >
                {inner}
              </article>
            );
          })}
        </div>
      </div>
      <Contact />
    </div>
  );
}
