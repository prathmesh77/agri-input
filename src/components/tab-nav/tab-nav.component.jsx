import React from 'react';
import { Tabs } from 'antd';

import ExecutingTab from '../executing-tab/executing-tab.component';
import './tab-nav.styles.scss';

const TabNav = () => {
    const { TabPane } = Tabs;
    
    return (
        <div>
             <Tabs defaultActiveKey="2" type="card" size="large">
                <TabPane tab="PENDING" key="1">
                    Content of card tab 1
                </TabPane>
                <TabPane tab="EXECUTING" key="2">
                    <ExecutingTab/>
                </TabPane>
                <TabPane tab="EXECUTED" key="3">
                    Content of card tab 3
                </TabPane>
                <TabPane tab="COMPLETED" key="4">
                    Content of card tab 4
                </TabPane>
            </Tabs>
        </div>
    );
}

export default TabNav;