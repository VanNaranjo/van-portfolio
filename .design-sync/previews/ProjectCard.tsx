import { ProjectCard } from 'van-portfolio-ds';
import loan from '../../images/Loan Calculator.png';
import pc from '../../images/PC Helper.png';

export const LoanCalculator = () => (
  <ProjectCard
    title="JAVA: Loan Calculator"
    imageSrc={loan}
    imageAlt="Loan calculator app"
    bullets={[
      'Developed a responsive GUI with JavaFX that displays key loan information in a clear, organized layout.',
      'Applied object-oriented design for a modular, maintainable codebase supporting multiple student entries.',
      'Implemented robust input validation to prevent invalid data entry.',
    ]}
  />
);

export const WithLink = () => (
  <ProjectCard
    title="PC Build Helper"
    imageSrc={pc}
    imageAlt="PC Build Helper app"
    bullets={[
      'Full-stack MVC app using DAO, C#, JavaScript, HTML and CSS.',
      'Real-time compatibility checks so selected parts work together.',
    ]}
    link={{ href: 'https://vanpcbuilder.azurewebsites.net/BuildPC.html' }}
  />
);
