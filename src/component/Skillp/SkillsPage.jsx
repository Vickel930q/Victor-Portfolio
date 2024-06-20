import React from 'react';
import Skill from '../Skill/Skill';



const skillsData = [
  { skillName: 'Html5/Css3', percentage: 90 },
  { skillName: 'JavaScript', percentage: 65 },
  { skillName: 'React/Next.js', percentage: 60 },
  { skillName: 'Photo Retouching', percentage: 90 },
  { skillName: 'Canva/Ps', percentage: 80 },
  { skillName: 'Composition Techniques', percentage: 65 },
 
];

const SkillsPage = () => {
  return (
    <div>
    <div style={{ padding: '20px' }}>
      <h1>My Skills</h1>
      
      {skillsData.map((skill) => (
        <Skill key={skill.skillName} skillName={skill.skillName} percentage={skill.percentage} />
      ))}
    </div>

    

    </div>

  );
};

export default SkillsPage;
