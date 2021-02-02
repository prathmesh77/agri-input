import { createSelector } from 'reselect';

const selectOrder = state => state.order;

export const selectCollectionById = createSelector(
  [selectOrder],
  order => order.collections.orderById
);

export const selectCollectionPreview = createSelector(
  [selectCollectionById],
  collection => Object.keys(collection).map(key => collection[key]) 
);

export const selectCollectionDetails = createSelector(
  [selectOrder],
  order => order.collections.orderDetails
);

export const selectCollectionDetailsPreview = (orderIdParam) =>
  createSelector(
    [selectCollectionDetails],
    collection => collection[orderIdParam]
  );

export const tableHidden = createSelector(
  [selectOrder],
  order => order.hidden
);

export const getIndex = createSelector(
  [selectOrder],
  order => order.rowIndex
);