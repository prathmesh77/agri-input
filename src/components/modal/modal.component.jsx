import React from 'react';
import { Modal } from 'antd';

const ModalComponent = ({ rowDetails,toggleModal }) => {
    const { hidden, modalData } = rowDetails;
    
    return (
        <div>
            <Modal
                title="Product Details"
                centered
                visible={hidden}
                onOk={toggleModal}
                onCancel={toggleModal}
            >
            <p>{modalData.productName}</p>
            <p>{modalData.productImage}</p>
            <p>{modalData.productDescription}</p>
            <p>{modalData.orderQuantity}</p>
            </Modal>
        </div>
    )
}

export default ModalComponent;