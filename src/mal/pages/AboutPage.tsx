import { about } from '../content';

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
          <div className="mal-ed__main">
            {about.origin.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p className="s">{about.origin.aside}</p>

            <div className="mal-ed__caps">
              {about.capabilities.map((cap) => (
                <article key={cap.no} className="mal-ed__cap">
                  <h3 className="mal-ed__cap-title">{cap.name}</h3>
                  <ul className="mal-ed__cap-list">
                    {cap.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
