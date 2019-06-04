import initialState from './state';

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE':
            return {...state, input: action.payload}
        default:
            return state; 
    }
    
}

export default rootReducer;