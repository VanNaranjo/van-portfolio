import { contact } from '../data/resume';
import { LinkedInIcon, MailIcon, PhoneIcon } from './Icons';

interface FooterProps {
  title?: string;
  text?: string;
}

export function Footer({
  title = "Let's work together",
  text = 'Looking for a full-time developer role from December 2026.',
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <MailIcon className="icon" />
              {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <PhoneIcon className="icon" />
              {contact.phoneDisplay}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="icon" />
              LinkedIn
            </a>
          </div>
        </div>
        <p className="site-footer__copy">© {new Date().getFullYear()} Van Naranjo</p>
      </div>
    </footer>
  );
}
