import React from 'react';
import styles from './CompanyView.module.scss';
import TopArea from '../../components/TopArea/TopArea';

const CompanyView = () => {
  return (
    <div className={styles.CompanyViewWrapper}>
      <TopArea />;
    </div>
  );
};

export default CompanyView;
