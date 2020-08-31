import React from 'react';
import styles from './CompanyView.module.scss';
import TopArea from '../../components/TopArea/TopArea';
import HoverSection from '../../components/HoverSection/HoverSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import ServiceSection from '../../components/ServicesArea/ServicesArea'

const CompanyView = () => {
  return (
    <div className={styles.CompanyViewWrapper}>
      <TopArea />;
      <HoverSection />;
      <ServiceSection />;
      <HeroSection />;
    </div>
  );
};

export default CompanyView;
