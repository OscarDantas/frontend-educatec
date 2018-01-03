import React, { Component } from 'react';
import { Icon, Button } from 'antd'

export default class SideBar extends Component {
    render() {
		const { visible, title, onCancel, onCreate, form, children } = this.props

		return(
			<div>
			    <div className={`fundo ${visible ? 'fundo-expanded' : null}`}></div>
			    <div className={`sidebar ${visible ? 'sidebar-expanded' : null}`}>
			        <div className="hearder-sidebar">
			        	<span>{title}</span>
			        	<Button className="close" shape="circle" icon="close" onClick={onCancel} />
			        </div>
			        <div className="content-form">
			        	{children}
			        </div>
			    </div>
		    </div>
		)
	}
}