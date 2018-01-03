import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

export default props => {
    console.log('props dentro do componente: ', props)
    return (
        <Menu.Item key={props.menuItemX.key}>
            <Link to={`/admin/${props.menuItemX.key}`}>
                <Icon type={props.menuItemX.icon} />
                <span style={{ marginLeft: 5 }}>{props.menuItemX.title}</span>
            </Link>
        </Menu.Item>
    )
}