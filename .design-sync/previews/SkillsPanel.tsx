import { SkillsPanel, SkillBar } from 'van-portfolio-ds';

export const ProgrammingLanguages = () => (
  <SkillsPanel
    skills={[
      { name: 'Java', percent: 60 },
      { name: 'C++', percent: 75 },
      { name: 'Python', percent: 30 },
      { name: 'SQL', percent: 65 },
      { name: 'JavaScript', percent: 60 },
      { name: 'HTML', percent: 80 },
      { name: 'CSS', percent: 50 },
    ]}
  />
);

export const WithChildren = () => (
  <SkillsPanel title="Frameworks">
    <SkillBar name="React" percent={45} />
    <SkillBar name="ASP.NET MVC" percent={55} />
  </SkillsPanel>
);
