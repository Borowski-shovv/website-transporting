

export const removeOrder = (itemType, id) => {
    return {
        type: 'REMOVE_ORDER',
        payload: {
            itemType, 
            id
        }
    }
}

let nextOrderId = 0;

export const addOrder = (itemType, orderContent) => {
    const id = nextOrderId + 1;
    const action = {  
        type: 'ADD_ORDER',
        payload: {
            itemType, 
            order: {
                id,
                orderContent,
            }
        }
    }
    nextOrderId = id;     

    return action;
}