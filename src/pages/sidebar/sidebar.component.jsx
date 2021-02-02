import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import './sidebar.styles.scss';

const Sidebar = () => {

    const { Sider } = Layout;

    return (
        <div>
           <Layout>
                <Sider width={250} style={{
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    backgroundColor: '#484848',
                }}
                >
                    <div className="logo"><h3>Agri-Purchase Management</h3></div>
                    <hr/>
                    <Menu className='menu' defaultSelectedKeys={['3']}>
                        <Menu.Item key="1" className='menu-item'>
                            <Link to="input-master" className='items'>Agri-Input Master Maintenance</Link>
                        </Menu.Item>
                        <hr/>
                        <Menu.Item key="2" className='menu-item'>
                            <Link to="supplier-master" className='items'>Supplier Master Maintenance</Link>
                        </Menu.Item>
                        <hr/>
                        <Menu.Item key="3" className='menu-item'>
                            <Link to="purchase-request" className='items'>Agri-Input Purchase Requests</Link>
                        </Menu.Item>  
                        <hr/>
                    </Menu>
                </Sider>
            </Layout>
      </div>  
    );
}

export default Sidebar;