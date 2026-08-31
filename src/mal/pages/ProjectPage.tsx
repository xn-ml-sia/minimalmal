import { useEffect, useRef, type CSSProperties } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { projects } from '../content';
import { Contact } from '../Contact';
import { Picture } from '../Picture';
import { FigureStripes } from '../FigureStripes';

type MediaAsset = { type: 'image' | 'video'; src: string };

function ProjectMedia({ type, src }: MediaAsset) {
  if (type === 'video') {
    return (
      <video className="project-media__video" src={src} autoPlay loop muted playsInline />
    );
  }
  return <Picture src={src} alt="" className="picture--cover" />;
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle('mal-hero-visible', entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '0px 0px -100% 0px' }
    );
    observer.observe(hero);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('mal-hero-visible');
    };
  }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  const mockupPair = project.mockups.length >= 2;

  return (
    <article key={project.slug} className="page page-project mal-project">
      <section
        ref={heroRef}
        className="hero-project"
        style={{ '--color-project': '#0f0f0f', '--site-color': '#ffffff' } as CSSProperties}
      >
        <div className="hero-project__inner">
          <div className="hero-project__figure">
            <FigureStripes src={project.image} alt={project.name} />
          </div>
          <div className="hero-project__meta">
            <h1 className="heading heading--xl hero-project__title">{project.name}</h1>
            <div className="hero-project__client">
              <p className="hero-project__client-heading">Client</p>
              <p className="hero-project__client-value">{project.client}</p>
            </div>
            <div className="hero-project__sector-year">
              <span>{project.sector}</span>
              <span>/ {project.year}</span>
            </div>
            <div className="hero-project__services-readtime">
              <div className="hero-project__services">
                <ul>
                  <li>{project.service}</li>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="hero-project__readtime">
                <p>{project.readTime} min</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blocks blocks--ctx-project">
        {project.featuredSections.map((section, i) => (
          <div key={i}>
            <div className="block block--safe-area block--bg-light block-featured-rich block-featured-rich--ctx-project">
              <div className="block-featured-rich__inner">
                <div className="block-featured-rich__featured">
                  <p>{section.lead}</p>
                </div>
                <div className="block-featured-rich__rich-content">
                  <div className="rich-content">
                    <h2>{section.richTitle}</h2>
                    {section.body.map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {section.images.length > 0 && (
              <div className="block block-media block--bg-light block--safe-area block-media--cols-2 block-media--ctx-project block-media--expansion-wrapper">
                {section.images.map((src, ii) => (
                  <div key={ii} className="media block-media__item">
                    <Picture src={src} alt="" className="picture--cover picture--rounded" />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {project.mockups.length > 0 && (
          <div className="block block-mockups">
            <div className={`block-mockups__grid${mockupPair ? ' block-mockups__grid--pair' : ''}`}>
              {project.mockups.map((src, i) => (
                <div key={i} className="block-mockups__mockup">
                  <Picture src={src} alt="" className="picture--cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {project.mediaBlocks.map((block, i) => {
          if (block.kind === 'cover') {
            const devices = 'overlays' in block ? [...block.overlays] : [block.overlay];
            const device = devices.some((media) => 'device' in media && media.device);
            return (
              <div
                key={i}
                className={`block block-media-cover${device ? ' block-media-cover--device' : ''}`}
              >
                <div className="block-media-cover__bg">
                  <Picture src={block.background} alt="" className="picture--cover" />
                </div>
                <div className="block-media-cover__inset">
                  {devices.map((media, mi) => (
                    <ProjectMedia key={mi} type={media.type} src={media.src} />
                  ))}
                </div>
              </div>
            );
          }
          if (block.kind === 'split') {
            return (
              <div key={i} className="block block-media-split">
                <ProjectMedia type={block.left.type} src={block.left.src} />
                <ProjectMedia type={block.right.type} src={block.right.src} />
              </div>
            );
          }
          return (
            <div key={i} className="block block-media-bleed">
              <ProjectMedia type={block.media.type} src={block.media.src} />
            </div>
          );
        })}

        <div className="block block--safe-area block--bg-light block-featured-rich block-featured-rich--ctx-project">
          <div className="block-featured-rich__inner">
            <div className="block-featured-rich__featured">
              <p>{project.closingLead}</p>
            </div>
          </div>
        </div>

        {project.stats.length > 0 && (
          <div className="block block--safe-area block--bg-light block-stats">
            <div className="block-stats__inner">
              <div className="block-stats__stats">
                {project.stats.map((stat, i) => (
                  <div key={i} className="block-stats__stat">
                    <p className="block-stats__stat-name">{stat.name}</p>
                    <p className="block-stats__stat-description">{stat.description}</p>
                    <p className="block-stats__stat-value">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <section className="comp-credits">
        <div className="comp-credits__inner">
          <header className="comp-credits__header">
            <h2 className="heading heading--md heading--dark heading--primary">Credits</h2>
          </header>
          <div className="comp-credits__start">
            {project.credits.map((c) => (
              <div key={c.role} className="comp-credits__group">
                <div className="comp-credits__group-title">{c.role}</div>
                <ul>
                  <li>{c.name}</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="comp-credits__end">
            {project.clientCredits.map((c) => (
              <div key={c.role} className="comp-credits__group">
                <div className="comp-credits__group-title">{c.role}</div>
                <ul>
                  <li>{c.name}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </article>
  );
}
