import React from 'react';
import { connect } from 'react-redux';

import { tableHidden,getIndex } from '../../redux/order/order.selectors';
import OrderRowItems from '../order-row-items/order-row-items.component';
import OrderTable from '../order-table/order-table.component';

const OrderRow = ({ orderCollection, hidden, getIndex }) => {
    
    return (
        <div>
            {orderCollection.map( (order,index) => (
                
                <React.Fragment key={order.batchId}>
                    <OrderRowItems key={order} order={order} index={ index} /> 
                    {hidden && getIndex === index ? <OrderTable key={index} order={ order}/> : null}
                </React.Fragment >
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    hidden: tableHidden(state),
    getIndex:getIndex(state)
});

export default connect(mapStateToProps)(OrderRow);