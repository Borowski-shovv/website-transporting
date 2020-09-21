export const removeOrder = (itemType, id) => {
    return {
        type: 'REMOVE_ORDER',
        payload: {
            itemType, 
            id
        }
    }
}