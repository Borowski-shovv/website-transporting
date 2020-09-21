import React from 'react';
import { connect } from 'react-redux';
import Owlcarousel from '../../components/OwlCarousel/Owldemo1';
import Navigation from '../../components/Navigation/Navigation';
import {removeOrder} from '../../actions/index';

const itemTypes = [
    {
        paczka: 'wyslaniePaczki'
    }
]

const Checkout = ({wyslaniePaczki, removeOrder}) => {
    return ( 
        <>
            <Navigation />
            <Owlcarousel />
            <div className="container">
                <div>
                    {console.log({wyslaniePaczki})}
                    <h3>Twoje zamówienie</h3>
                    {wyslaniePaczki.map(({name, lastname, email, phone, id}) => {
                        return (
                            <div key={id}>
                                <p>Imię i nazwisko nadawcy paczki: <b>{name} {lastname}</b></p>
                                <p>Email: <b>{email}</b></p>
                                <p>Telefon kontaktowy: <b>{phone}</b></p>
                                <button onClick={() => removeOrder(itemTypes.paczka, id)}>Usuń zamówienie</button>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
     );
}
const mapDispatchToProps = dispatch => ({
    removeOrder: (itemType, id) => dispatch(removeOrder(itemType, id))
})

const mapStateToProps = ({wyslaniePaczki}) => {
    return {wyslaniePaczki};
}



export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
 
