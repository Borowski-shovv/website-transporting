import React from 'react';
import SendParcel from '../../components/SendParcel/SendParcel';

import MaterialLayout from '../../components/Layout/MaterialLayout';

const OrderView = () => {
    return (  
        <>  
            <MaterialLayout>
                <SendParcel />
            </MaterialLayout>
        </>
    );
}
 
export default OrderView;