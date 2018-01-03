import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import InfiniteScroll from 'react-infinite-scroller';

import { Table, Dropdown, Button, Icon, Menu } from 'antd';
import _ from 'lodash'

import { fetchData } from './data-grid-actions'

import './index.less'

class DataGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItens: true,
            nextHref: null
        }
    }

    componentWillMount() {
        //console.log('DataGrid props: ', this.props)
        this.props.fetchData(this.props.model, this.props.columns, this.props.filters)
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.model !== this.props.model) {
            //console.log('DataGrid new props: ', nextProps)
            this.props.fetchData(nextProps.model, nextProps.columns, nextProps.filters)
        }
    }

    handleMoreActionsClick(e) {
        console.log('click', e);
    }


    //loadItems(page) {
      //  console.log(page);
    //}


    render() {
        const loader = <div className="loader">Loading ...</div>;

        // Pick only description and key from attributes list a module
        const columns = _.map(this.props.columns, _.partialRight(_.pick, ['description', 'key']))

        // Transform object keys from description to title and key to dataIndex
        // Cause it's expected to use Table component from Antd
        const keyMapping = { 'description': 'title', 'key': 'dataIndex', 'className': 'className' }
        const columnsTransformed = _.map(columns, (column) => {
            column.className = 'column-data-grid'
            return _.transform(column, (result, value, key) => (
                result[keyMapping[key]] = value
            ))
        })

        columnsTransformed.push(
            {
                title: '',
                key: 'operation',
                width: 35,
                render: () => (
                    <Dropdown overlay={moreActions}>
                        <Icon type="ellipsis" style={{ fontSize: 16, fontWeight: 'bold', transform: 'rotate(90deg)', cursor: 'pointer' }} />
                    </Dropdown>
                )
            }
        )

        const moreActions = (
            <Menu onClick={this.handleMoreActionsClick}>
                {
                    this.props.actions.map((action, index) => (
                        <Menu.Item className="actions-data" key={action.key}>
                            <Icon type={action.icon} />
                            <span>{action.description}</span>
                        </Menu.Item>
                    ))
                }
            </Menu>
        );


        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                this.props.handlerSelectedItem(_.isEmpty(selectedRowKeys) ? false : true)
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
            }),
        };
        //return <Table footer={() => 'Here is footer'} style={{height: '100%'}} pagination={false} rowSelection={rowSelection} columns={columnsTransformed} dataSource={this.props.dataSource} />
        //return <Table pagination={false} rowSelection={rowSelection} columns={columnsTransformed} dataSource={this.props.dataSource} scroll={{ y: 300 }} />
        return (
            <Table pagination={false} rowSelection={rowSelection} columns={columnsTransformed} dataSource={this.props.dataSource} />   
        );
    }
}

const mapStateToProps = state => ({
    dataSource: state.dataGrid.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DataGrid)