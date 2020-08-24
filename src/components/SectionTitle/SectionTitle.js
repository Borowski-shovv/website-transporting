import React from 'react';
import styles from './SectionTitle.module.scss';

const SectionTitle = ({ children }) => {
  return (
    <div className={styles.sectionTitle}>
      <h2>{children}</h2>
    </div>
  );
};

export default SectionTitle;
