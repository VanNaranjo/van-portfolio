import { SkillBar } from 'van-portfolio-ds';

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="prog-skills"><div className="prog-skills-container">{children}</div></div>
);

export const Levels = () => (
  <Panel>
    <SkillBar name="Python" percent={30} />
    <SkillBar name="Java" percent={60} />
    <SkillBar name="HTML" percent={80} />
  </Panel>
);

export const Single = () => (
  <Panel>
    <SkillBar name="C++" percent={75} />
  </Panel>
);
