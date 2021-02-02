import React from 'react';
import {Table} from 'antd';
import { connect } from 'react-redux';

import { selectCollectionDetailsPreview } from '../../redux/order/order.selectors';
import Modal from '../modal/modal.component';

import { FullscreenOutlined } from '@ant-design/icons';
import './order-table.styles.scss';

class OrderTable extends React.Component {

  state = {
    hidden:false,
    modalData: {
      orderQuantity: '',
      productDescription: '',
      productImage: '',
      productName:''
    }
  };

  toggleModal = () => {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  handleModalData = e => {
    
    this.setState({  
      hidden: true,
      modalData: {
        orderQuantity: e.orderQuantity,
        productDescription: e.productDescription,
        productImage: e.productImage,
        productName:e.productName
      }
    },()=>console.log(this.state));
  }

  render() {
    const { items } = this.props.getorderItems;
    const columns = [
        {
          title: 'Agri-Input Category',
          dataIndex: 'productName',
        },
        {
          title: 'Product Image',
          dataIndex: 'productImage',
        },
        {
          title: 'product Description',
          dataIndex: 'productDescription',
        },
        {
            title: 'Order Quantity',
            dataIndex:'orderQuantity'
        },
        {
       
        key: "action",
        render: (text, record) => (
          <span><FullscreenOutlined onClick={()=>this.handleModalData(record)}/></span>
        )
      }
      ];
      return (
        <div>
        <Table bordered rowKey={record => record.uid} columns={columns} dataSource={items} size="middle" />
          <Modal rowDetails={this.state} toggleModal={ this.toggleModal}/>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    getorderItems: selectCollectionDetailsPreview(ownProps.order.batchId)(state)
});

export default connect(mapStateToProps)(OrderTable);