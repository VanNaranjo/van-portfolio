import { ToolList } from 'van-portfolio-ds';

export const Tools = () => (
  <ToolList
    items={[
      'Microsoft Office Suite (Excel, Visio, PowerPoint)',
      'Tools for project documentation, data analysis, and reporting',
      'Google Suite',
      'Tableau',
      'Git/GitHub',
    ]}
  />
);

export const ShortList = () => <ToolList title="Platforms" items={['Azure App Service', 'GitHub Pages']} />;
