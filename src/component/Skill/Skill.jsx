import React from 'react';
import styles from './Skill.module.css';

const Skill = ({ skillName, percentage }) => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.skillName}>{skillName}</div>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export default Skill;
