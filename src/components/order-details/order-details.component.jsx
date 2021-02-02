import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';

import { selectCollectionPreview} from '../../redux/order/order.selectors';
import OrderRow  from '../order-row/order-row.component';
import '../order-details/order-details.styles.scss';

const OrderDetails = ({ orderCollection }) => {

    return (
        <div>
            <div className='executing-order-header'>
                <span className='input-order'>Executing Agri-Input Orders </span>
                <span className='batch'>Batched By</span>
            </div>
            <Divider className='order-divider' />
            <OrderRow orderCollection={orderCollection} />
           
        </div>
    )
}

const mapStateToProps = state => ({
    orderCollection: selectCollectionPreview(state)
});

export default connect(mapStateToProps)(OrderDetails);