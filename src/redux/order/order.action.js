import orderActionTypes from './order.types';

export const toggleHidden = (index) => ({
    type: orderActionTypes.TOGGLE_TABLE_HIDDEN,
    payload:index
});