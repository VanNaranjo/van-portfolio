import { ExtraSkills, ToolList, HighlightList } from 'van-portfolio-ds';

export const ToolsAndHighlights = () => (
  <ExtraSkills>
    <ToolList items={['Microsoft Office Suite (Excel, Visio, PowerPoint)', 'Google Suite', 'Tableau', 'Git/GitHub']} />
    <HighlightList
      items={[
        { label: 'Project Management & Analysis', text: 'Planning, tracking progress, and coordinating activities to meet timelines.' },
        { label: 'Collaboration & Communication', text: 'Leading teams, gathering requirements from stakeholders, and reporting status.' },
      ]}
    />
  </ExtraSkills>
);
