import React from 'react';
import styles from './CompanyView.module.scss';
import TopArea from '../../components/TopArea/TopArea';
import HoverSection from '../../components/HoverSection/HoverSection'

const CompanyView = () => {
  return (
    <div className={styles.CompanyViewWrapper}>
      <TopArea />;
      <HoverSection />;
    </div>
  );
};

export default CompanyView;
