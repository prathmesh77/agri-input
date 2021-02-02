import ORDER_DATA from '../order.data';
import orderActionTypes from './order.types';

const INITIAL_STATE = {
    collections: ORDER_DATA,
    hidden: false,
    rowIndex:0
}

const orderReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case orderActionTypes.TOGGLE_TABLE_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
                rowIndex:action.payload
            };
        default:
            return state;
    }
}

export default orderReducer;