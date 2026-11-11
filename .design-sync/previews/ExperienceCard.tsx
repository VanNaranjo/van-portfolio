import { ExperienceCard } from 'van-portfolio-ds';
import fanshawe from '../../images/FanshaweLogo.png';
import amazon from '../../images/amazon-logo.webp';

export const Education = () => (
  <ExperienceCard
    logoSrc={fanshawe}
    logoAlt="Fanshawe College logo"
    title="Fanshawe College"
    items={[
      <><b>Field of Study:</b> Computer Programming and Analysis</>,
      <><b>GPA:</b> 4.15</>,
      <><b>Honors & Awards:</b> Dean's Honour Roll for both first and second semesters</>,
      <><b>Programming Languages Learned:</b> Java, C++, SQL, Python, JavaScript, HTML, CSS</>,
    ]}
  />
);

export const AlternatingPair = () => (
  <div>
    <ExperienceCard
      logoSrc={fanshawe}
      logoAlt="Fanshawe College logo"
      title="Fanshawe College"
      items={[<><b>Field of Study:</b> Computer Programming and Analysis</>, <><b>GPA:</b> 4.15</>]}
    />
    <ExperienceCard
      logoSrc={amazon}
      logoAlt="Amazon logo"
      title="Amazon Logistics - Process Assistant"
      items={[
        'Developed Excel-based reporting tools, improving KPI monitoring and reporting accuracy by 30%.',
        'Coordinated safety and incident resolution, cutting Delivery Not Received errors by 40%.',
      ]}
    />
  </div>
);
