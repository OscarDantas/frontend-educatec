import React from 'react'
import { Layout, Table, Button, Icon } from 'antd'

const { Header } = Layout;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
  }),
};

export default class Module extends React.Component {
  render() {
    return (
      <div>
        <Header className="header">
            <span className="titulo-page"><Icon type="message" /> {this.props.titulo}</span>
            <div className="right">
              <Button className="button plus" shape="circle" icon="plus" />
              <Button className="button" shape="circle" icon="search" />
              <Button className="button rotate" shape="circle" icon="ellipsis" />
            </div>
        </Header>
        <Table rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.data} />
      </div>
    )
  }
}