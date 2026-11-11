export interface HeroBannerProps {
  /** Portrait image URL; rendered at 25% of the banner width. */
  imageSrc: string;
  imageAlt?: string;
  /** Small greeting line in Sanchez. Default "Hello, I am". */
  greeting?: string;
  /** The name, shown uppercase and bold in yellow (#F2CA50) under the greeting. */
  name: string;
  /** Slide the text in from the left (animate.css backInLeft). Default true. */
  animated?: boolean;
}

/**
 * Home-page hero: portrait on the left, "Hello, I am / NAME" intro on the
 * right in Sanchez, the name in uppercase yellow.
 */
export function HeroBanner({ imageSrc, imageAlt = '', greeting = 'Hello, I am', name, animated = true }: HeroBannerProps) {
  return (
    <section className="banner">
      <img className="VanPic" src={imageSrc} alt={imageAlt} id="profilePic" />
      <h2 className={'intro-line' + (animated ? ' animate__animated animate__backInLeft' : '')}>
        {greeting} <p>{name}</p>
      </h2>
    </section>
  );
}
