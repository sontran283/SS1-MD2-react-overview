
import './App.css'
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';
import React, { useMemo } from 'react';
import { Button, Divider, Space, notification } from 'antd';
import BaiTap1 from './components/BT1/BaiTap1';
import BaiTap2 from './components/BT2/BaiTap2';
import Radio from './components/base/Radio';
import Checkbox from './components/base/Checkbox';



const Context = React.createContext({
  name: 'Default',
});


function App() {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };
  const contextValue = useMemo(
    () => ({
      name: 'Ant Design',
    }),
    [],
  );


  return (
    <div>
      {/* <button className="q-button q-button-primary active:bg-violet-700">Them moi</button>
      <input className="q-input" type="text" placeholder='tim kiem' />
      <h1 className='bg-red-700' >Hello</h1> */}






      {/* <BaiTap1></BaiTap1> */}
      {/* <BaiTap2></BaiTap2> */}
      <Radio></Radio>
      <Checkbox></Checkbox>





      {/* 
      <StepForwardOutlined style={{ fontSize: 50, color: 'yellow' }} />

      <Context.Provider value={contextValue}>
        {contextHolder}
        <Space>
          <Button
            type="primary"
            onClick={() => openNotification('topLeft')}
            icon={<RadiusUpleftOutlined />}
          >
            topLeft
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification('topRight')}
            icon={<RadiusUprightOutlined />}
          >
            topRight
          </Button>
        </Space>
        <Divider />
        <Space>
          <Button
            type="primary"
            onClick={() => openNotification('bottomLeft')}
            icon={<RadiusBottomleftOutlined />}
          >
            bottomLeft
          </Button>
          <Button
            type="primary"
            onClick={() => openNotification('bottomRight')}
            icon={<RadiusBottomrightOutlined />}
          >
            bottomRight
          </Button>
        </Space>
      </Context.Provider> */}


    </div>
  )
}

export default App
