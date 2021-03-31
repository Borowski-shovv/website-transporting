import React from 'react';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import './OfferView.css';
import PricesTable from '../../components/PricesTable/PricesTable';
import OfferSection from '../../components/OfferSection/OfferSection';
import MapSection from '../../components/MapSection/MapSection';

const OfferView = () => {

    return (
        <>  
            <OfferSection />
            <PricesTable />
            <ServicesSection /> 
            <MapSection />       
        </>
    )
};

export default OfferView;