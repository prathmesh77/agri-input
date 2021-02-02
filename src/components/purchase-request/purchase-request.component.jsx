import React from 'react';
import { Layout,Divider } from 'antd';

import TabNav from '../tab-nav/tab-nav.component';

import './purchase-request.styles.scss';

const PurchaseRequest = () => {

    const { Header, Content } = Layout;
    return (
        <>
            <Layout className="site-layout">
                <Header className="site-layout-header" ><h2>Agri Input Master Maintenance</h2></Header>
                <Content>
                    <div className='site-layout-content'>
                        <TabNav />
                        <Divider className='order-divider'/>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default PurchaseRequest;