import React from 'react';
import { Spin } from 'antd'

export default props => (
    <Spin wrapperClassName='spin-loader' spinning={props.spinning}>
        {props.children}
    </Spin>
)