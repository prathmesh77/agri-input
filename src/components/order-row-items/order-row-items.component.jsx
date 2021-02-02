import React from 'react';
import { Row, Col,Avatar } from 'antd';
import { connect } from 'react-redux';
import { Divider } from 'antd';

import { toggleHidden } from '../../redux/order/order.action';

import { UpSquareFilled,FileExcelOutlined } from '@ant-design/icons';
import './order-row-items.styles.scss';

const OrderRowItems = ({ order, toggleHidden, index }) => {
    
    return (
        <>
            <Row justify="space-between" gutter={16} style={{width:'100%'}}>
                <Col className="gutter-row" span={8}>
                    <div className='row-content'>
                        {order.batchId}
                        <UpSquareFilled className='icon' onClick={() => toggleHidden(index)}/> 
                    
                    </div>
                    <Divider className='divider' type="vertical" />
                </Col>
              
                <Col className="gutter-row" span={8}>
                    <div className='row-content'>
                        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />    
                        <span className='batch-by'>{order.batchBy}</span>
                    </div>
                </Col>

                <Col className="gutter-row" span={8}>
                    <div className='row-content'>
                        <FileExcelOutlined className='icon'/>
                        {order.refListId}
                    </div>
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