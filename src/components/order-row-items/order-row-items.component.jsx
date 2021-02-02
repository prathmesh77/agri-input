import React from 'react';
import { Row, Col,Avatar } from 'antd';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import { toggleHidden } from '../../redux/order/order.action';

import { UpSquareFilled } from '@ant-design/icons';
import './order-row-items.styles.scss';

const OrderRowItems = ({ order, toggleHidden, index }) => {
    
    const style = { background: '#A1A1A1',marginLeft:'4', fontWeight: 600 };
    return (
        <>
            <Row justify="space-between" gutter={16}>
                <Col className="gutter-row" span={8}>
                    <div style={style}>
                        {order.batchId}
                        <span className='order-row-upper-arraw'>
                            <UpSquareFilled onClick={()=>toggleHidden(index) } />
                        </span>
                    </div>
                    <Divider className='divider' type="vertical" />
                </Col>
              
                <Col className="gutter-row" span={8}>
               
                    <div style={style}>   
                        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />    
                        <span className='batch-by'>{order.batchBy}</span>
                    </div>
                </Col>
                <Col className="gutter-row" span={8}>
                    <div style={style}>{ order.refListId}</div>
                </Col>
            </Row>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleHidden: (index) => dispatch(toggleHidden(index))
    }
};

export default connect(null,mapDispatchToProps)(OrderRowItems);