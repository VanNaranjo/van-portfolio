export interface ContactBarProps {
  /** Email address; renders an envelope icon linking to mailto:. */
  email?: string;
  /** Phone number as dialled, e.g. "+12899413872"; renders a phone icon linking to tel:. */
  phone?: string;
  /** LinkedIn profile URL; renders the LinkedIn icon, opens in a new tab. */
  linkedin?: string;
}

/**
 * Navy (#2b364f) footer band with centered icon-only contact links
 * (envelope, phone, LinkedIn). The text labels are visually hidden; the
 * links keep aria-labels.
 */
export function ContactBar({ email, phone, linkedin }: ContactBarProps) {
  return (
    <footer className="contact">
      <ul>
        {email && (
          <li><a href={`mailto:${email}`} aria-label={`Send an email to ${email}`}>
            <i className="fa-solid fa-envelope" aria-hidden="true"></i><span id="email">{email}</span>
          </a></li>
        )}
        {phone && (
          <li><a href={`tel:${phone}`} aria-label={`Call ${phone}`}>
            <i className="fa-solid fa-phone" aria-hidden="true"></i><span id="phone">{phone}</span>
          </a></li>
        )}
        {linkedin && (
          <li><a href={linkedin} aria-label="Visit LinkedIn profile" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i><span id="linkedin">{linkedin}</span>
          </a></li>
        )}
      </ul>
    </footer>
  );
}
