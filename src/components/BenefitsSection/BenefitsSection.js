import React from 'react';
import './BenefitsSection.css';

// images
import parcel from '../../assets/images/parcel.svg';
import phone from '../../assets/images/phone.png';
import truck from '../../assets/images/benefit-truck.svg';
import money from '../../assets/images/money.svg';

const BenefitsSection = () => {
    return (
        <>
            <section className="benefits">
                <div className="container">
                    <div className="row">
                        <div className="benefit benefit1 col-sm-3">
                            <img src={truck} alt="" />
                            <p>Krótki czas dostarczenia</p>
                        </div>
                        <div className="benefit benefit2 col-sm-3">
                            <img src={parcel} alt=""/>
                            <p>Gwarancja bezpieczeństwa Twojej przesyłki</p>
                        </div>
                        <div className="benefit benefit3 col-sm-3">
                            <img src={phone} alt=""/>
                             <p>Jesteśmy tu dla Ciebie</p>
                        </div>
                        <div className="benefit benefit4 col-sm-3">
                            <img src={money} alt=""/>
                            <p>Gwarancja niskich cen</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default BenefitsSection;