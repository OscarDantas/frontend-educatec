import React from 'react'
import { Row, Col } from 'antd'

import { BLACK } from '../../utils/constColors'
import './index.css'

const styles = {
    menuItems: {
        paddingTop: 100,
        paddingRight: 200,
        color: BLACK
    }
}

export default props => (
    <Row style={props.style || styles.menuItems} type='flex' justify='end' gutter={16}>
        {props.menuItems.map((menuItem) =>
            <Col key={menuItem.url}>
                <div style={menuItem.style || {}} className='menu-box'>{menuItem.description}</div>
            </Col>
        )}
    </Row>
)