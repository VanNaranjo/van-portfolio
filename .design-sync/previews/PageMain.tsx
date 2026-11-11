import { PageMain, SkillsPanel, ExtraSkills, ToolList, HighlightList, ContactBar } from 'van-portfolio-ds';

export const SkillsPage = () => (
  <PageMain>
    <SkillsPanel
      skills={[
        { name: 'Java', percent: 60 },
        { name: 'C++', percent: 75 },
        { name: 'SQL', percent: 65 },
      ]}
    />
    <ExtraSkills>
      <ToolList items={['Google Suite', 'Tableau', 'Git/GitHub']} />
      <HighlightList
        items={[{ label: 'Collaboration & Communication', text: 'Leading teams and providing detailed project updates.' }]}
      />
    </ExtraSkills>
    <ContactBar email="v_naranjo@fanshaweonline.ca" linkedin="https://www.linkedin.com/in/vannaranjo" />
  </PageMain>
);
