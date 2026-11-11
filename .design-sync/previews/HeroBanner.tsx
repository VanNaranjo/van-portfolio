import { HeroBanner } from 'van-portfolio-ds';
import portrait from '../../images/VanPic.png';

export const Default = () => (
  <div style={{ background: '#0e1527', padding: '24px 0' }}>
    <HeroBanner imageSrc={portrait} imageAlt="Portrait of Van Naranjo" name="Van Naranjo" animated={false} />
  </div>
);

export const CustomGreeting = () => (
  <div style={{ background: '#0e1527', padding: '24px 0' }}>
    <HeroBanner imageSrc={portrait} imageAlt="Portrait of Van Naranjo" greeting="Welcome! I'm" name="Van Naranjo" animated={false} />
  </div>
);
