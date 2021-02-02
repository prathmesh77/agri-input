import React from 'react';
import { Layout,Divider } from 'antd';

import TabNav from '../tab-nav/tab-nav.component';

import './purchase-request.styles.scss';

const PurchaseRequest = () => {

    const { Header, Content } = Layout;
    return (
        <>
            <Layout className="site-layout" style={{ marginLeft: 250 }}>
                <Header className="site-layout-background" style={{ padding: '0 25px' }} ><h2>Agri Input Master Maintenance</h2></Header>
                <Content>
                    <div className="site-layout-background" style={{ paddingLeft: 24, textAlign: 'center' }}>
                        <TabNav />
                        <Divider className='order-divider'/>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default PurchaseRequest;