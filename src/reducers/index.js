const initialState = {
    paczka: [
        // {
        //     id: 1,
        //     type: 'paczka',
        //     name: 'Rafal',
        //     lastname: 'Borowski',
        //     email: 'rafal@gmail.pl',
        //     phone: '214145154',
        //     ulicazaladunek: 'jp',
        //         orderContent: {
        //                     name: 'rafal',
        //                     lastname: 'stone',
        //                     email: 'juhas@gmail.com',
        //                     phone: '99',
        //                     ulicazaladunek: 'radosna',
        //                     miastozaladunek: 'bialystok',
        //                     kodpocztowyzaladunek: 'sdfwsdf',
        //                     ulicarozladunek: 'dadadada',
        //                     miastorozladunek: 'hubala',
        //                     kodpocztowyrozladunek: 'asfdsafa',
        //                     msg: 'sacscsdcscs'
        //                 }
        // },
        // {
        //     id: 2,
        //     type: 'paczka',
        //     name: 'Rafal',
        //     lastname: 'Borowski',
        //     email: 'rafal@gmail.pl',
        //     phone: '214145154',
        //     ulicazaladunek: 'jp',
        // },
        // {
        //     id: 3,
        //     orderContent: {
        //         name: 'rafal',
        //         lastname: 'stone',
        //         email: 'juhas@gmail.com',
        //         phone: '99',
        //         ulicazaladunek: 'radosna',
        //         miastozaladunek: 'bialystok',
        //         kodpocztowyzaladunek: 'sdfwsdf',
        //         ulicarozladunek: 'dadadada',
        //         miastorozladunek: 'hubala',
        //         kodpocztowyrozladunek: 'asfdsafa',
        //         msg: 'sacscsdcscs'
        //     }
        // },

    ],
    paleta: [
        {
            id: 1,
            name: 'Rafal',
            type: 'paleta',
            lastname: 'Borowski',
            email: 'rafal@gmail.pl',
            phone: '214145154',
            ulicazaladunek: 'jp',
        },

    ],
    samochody: [
        {
            id: 1,
            name: 'Rafal',
            type: 'samochody',
            lastname: 'Borowski',
            email: 'rafal@gmail.pl',
            phone: '214145154',
            ulicazaladunek: 'jp',
        },
    ]
    

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ORDER': 
            return {
                ...state, 
                [action.payload.itemType]: [...state[action.payload.itemType], action.payload.order]
            }
        case 'REMOVE_ORDER':
            return {
                ...state, 
                [action.payload.itemType]: [...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;