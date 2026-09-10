import { Link } from 'react-router-dom';
import { work, projects } from '../content';
import { Contact } from '../Contact';
import { FigureStripes } from '../FigureStripes';
import { ProcessSection } from '../ProcessSection';

export function WorkPage() {
  return (
    <div className="page page-work">
      <h1 className="sr-only">{work.title}</h1>

      <section className="intro mal-intro">
        <div className="wrap">
          <p className="lead ready">
            I’m <span className="lead-name"><span className="mal-m" aria-hidden="true" />al Som</span>{' '}
            <span className="lead-dash">—</span> a designer who takes interfaces
            from first sketch to shipped code, on products where a confusing
            screen costs someone <span className="mal-m" aria-hidden="true" />
            oney or time.
          </p>
        </div>
      </section>

      <div className="work-feature">
        <div className="list-article list-article--mode-default">
          {work.items.map((item, index) => {
            const project = projects.find((p) => p.name === item.name);
            const inner = (
              <>
                <FigureStripes src={item.image} alt={item.name} className="article__figure" />
                <header>
                  <h2 className="heading heading--md article__heading">{item.name}</h2>
                  <p className="article__description">{item.desc}</p>
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
      <ProcessSection />
      <Contact />
    </div>
  );
}
