import { EMAIL, LINKEDIN, about } from './content';

export function Contact() {
  return (
    <section className="mal-contact">
      <p>{about.seeking}</p>
      <p>{about.contactLine}</p>
      <a className="mal-pxbtn" href={`mailto:${EMAIL}`}>
        Get in touch
      </a>
      <p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        {' · '}
        <a href={LINKEDIN}>LinkedIn</a>
      </p>
      <p>© 2026</p>
    </section>
  );
}
