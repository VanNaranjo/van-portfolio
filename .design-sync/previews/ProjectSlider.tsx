import { ProjectSlider, ProjectCard } from 'van-portfolio-ds';
import loan from '../../images/Loan Calculator.png';
import stats from '../../images/stats.png';
import db from '../../images/database.png';

export const Projects = () => (
  <ProjectSlider>
    <ProjectCard
      title="JAVA: Loan Calculator"
      imageSrc={loan}
      imageAlt="Loan calculator app"
      bullets={['Responsive JavaFX GUI for student loan calculations.', 'Robust input validation for reliable results.']}
    />
    <ProjectCard
      title="C++: Statistic Calculator"
      imageSrc={stats}
      imageAlt="Statistics calculator output"
      bullets={['Mean, median, variance, standard deviation and regression.', 'Outlier detection at 2x and 3x thresholds.']}
    />
    <ProjectCard
      title="SQL: Creating and Optimizing Databases"
      imageSrc={db}
      imageAlt="Database diagram"
      bullets={['Indexed for fast retrieval on large datasets.', 'Stored procedures and transactional integrity.']}
    />
  </ProjectSlider>
);
