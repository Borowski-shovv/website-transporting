const initialState = {
    wyslaniePaczki: [
        {
        id: 1,
        name: 'Rafal',
        lastname: 'Borowski',
        email: 'rafal@gmail.pl',
        phone: '214145154',
        ulicazaladunek: 'jp',
        },
        {
            id: 2,
            name: 'Rafal',
            lastname: 'Borowski',
            email: 'rafal@gmail.pl',
            phone: '132515154',
            ulicazaladunek: 'jp',
        },
        {
            id: 3,
            name: 'Rafal',
            lastname: 'Borowski',
            email: 'rafal@gmail.pl',
            phone: '412515151',
            ulicazaladunek: 'jp',
        },
    ],
    paleta: [
        {
            id: 1,
            name: 'Rafal',
            lastname: 'Borowski',
            email: 'rafal@gmail.pl',
            phone: '214145154',
            ulicazaladunek: 'jp',
            },
            {
                id: 2,
                name: 'Rafal',
                lastname: 'Borowski',
                email: 'rafal@gmail.pl',
                phone: '132515154',
                ulicazaladunek: 'jp',
            },
    ]

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ORDER':
            return {
                ...state, 
                [action.payload.itemType]: [ 
                    ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;