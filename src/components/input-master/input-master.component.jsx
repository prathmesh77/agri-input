import React from 'react';
import { Layout } from 'antd';

const InputMaster = () => {

    const { Header } = Layout;
    return (
        <div>
             <Layout className="site-layout" style={{ marginLeft: 250 }}>
                <Header className="site-layout-background" style={{ padding: '0 25px' }} ><h2>Agri Input Master Maintenance</h2></Header>
            </Layout>
        </div>
    )
}

export default InputMaster;