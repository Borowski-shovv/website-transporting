import React from 'react';
import { connect } from 'react-redux';
import Owlcarousel from '../../components/OwlCarousel/Owldemo1';
import Navigation from '../../components/Navigation/Navigation';
import {removeOrder as removeOrderAction} from '../../actions/index';


const Checkout = ( {paczka, removeOrder, }) => {
    return ( 
        <>
            <Navigation />
            <Owlcarousel />
            <div className="container">
                <div>
  
               
                    {console.log(paczka)}
                    <h3>Twoje zamówienie</h3>
               
                    {(paczka.length !== 0 )
                    ? 
                    (paczka.map(({ type='paczka',id, orderContent}) => {
                         console.log(orderContent)
                            return (
                               <div key={id}>
                                   <p>Imię i nazwisko nadawcy paczki: <b>{orderContent.name} {orderContent.lastname}</b></p>
                                   <p>Email: <b>{orderContent.email}</b></p>                                 
                                    <p></p> 

                                   <button onClick={() => removeOrder(type, id)}>Usuń zamówienie</button>
                                   <hr/>
                               </div>
                            )
                        }))
                        
                    
                    : ( <p>Nie masz żadnych zamówień</p>)
                }
                    
                </div>
            </div>
        </>
     );
}
const mapDispatchToProps = dispatch => ({
    removeOrder: (itemType, id) => dispatch(removeOrderAction(itemType, id))
  
})

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
 
