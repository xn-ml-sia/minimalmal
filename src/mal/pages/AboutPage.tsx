import { about } from '../content';
import { Contact } from '../Contact';

export function AboutPage() {
  return (
    <div className="page page-agency">
      <h1 className="sr-only">{about.title}</h1>

      <section className="ed mal-ed" id="origin">
        <div className="wrap">
          <div className="head">
            <h2>
              It’s me.{' '}
              <span className="lead-name">
                <span className="mal-m" aria-hidden="true" />
                al Som.
              </span>
            </h2>
          </div>
          <div>
            {about.origin.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p className="s">{about.origin.aside}</p>
          </div>
        </div>
      </section>

      <section className="block block-grid-lists block--safe-area">
        <div className="block-grid-lists__inner">
          <div className="block-grid-lists__lists">
            {about.capabilities.map((cap) => (
              <article key={cap.no} className="block-grid-lists__list">
                <header className="block-grid-lists__list-header">
                  <h3 className="heading heading--base">{cap.name}</h3>
                </header>
                <ul className="block-grid-lists__list-ul">
                  {cap.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
