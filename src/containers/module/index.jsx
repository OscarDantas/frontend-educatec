import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setup } from './module-actions'
import { Icon, Button, Popover, Row, Col } from 'antd'
import _ from 'lodash'
import DataGrid from '../data-grid'
import Loader from '../../components/loader'
import ModuleForm from './module-form'

import './index.less'

class Module extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hasItemSelected: false
        }
        this.form = null
        this.handlerSelectedItem = this.handlerSelectedItem.bind(this)
        this.handleDisabledButtonActions = this.handleDisabledButtonActions.bind(this)
    }

    // this method is send to dataGrid component to
    // handler when a register is selected.
    handlerSelectedItem(value) {
        this.setState({
            hasItemSelected: value,
            formVisible: false
        })
        this.add = this.add.bind(this)
    }

    // this method manage the disable option of actions buttons
    // only when an action is isDisableWithoutSelection=true
    handleDisabledButtonActions() {
        return !this.state.hasItemSelected
    }

    componentWillMount() {
        this.props.setup(this.props.moduleKey)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.moduleKey != this.props.moduleKey) {
            console.log('Module component receive new props: ', nextProps)
            this.props.setup(nextProps.moduleKey)
        }
    }

    //Handle Form
    showModal = () => {
        this.setState({ formVisible: true });
    }
    handleCancel = () => {
        this.setState({ formVisible: false });
    }
    handleCreate = () => {
        console.log('handle create this.form:', this.form)
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ formVisible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }

    handleOnClickAction = action => {
        switch (action.key) {
            case 'add':
                return this.add()
            case 'search':
                return this.search()
            case 'remove':
                return this.remove()
            default:
                return console.log("Action " + action.key + " could not be handle (not found).")
        }
    }

    add = () => {
        console.log('teste do add')
        this.setState({
            formVisible: true
        })
    }
    search = () => {
        console.log('teste do search')
    }
    edit = () => {
        console.log('teste do edit')
    }
    remove = () => {
        console.log('teste do remove')
    }

    render() {
        const moduleSetup = this.props.moduleSetup
        const actions = _.filter(moduleSetup.actions, { 'isMoreAction': false })
        const moreActions = _.filter(moduleSetup.actions, { 'isMoreAction': true })
        const moreActionsComponent = (moreActions ?
            <div>
                {moreActions.map((moreAction, index) => (
                    <p key={moreAction.key}>{moreAction.description}</p>
                ))}
            </div>
            : null)

        const columnsDataGrid = _.filter(moduleSetup.attributes, 'isVisibleDataTable')
        const actionsToSelectedItem = _.filter(moduleSetup.actions, { 'isDisableWithoutSelection': true })

        const attributesEditable = _.filter(moduleSetup.attributes, 'isEditable')

        return (
            <div className='content-module' >
                <Loader spinning={this.props.loading}>
                    <Row className="header-module">
                        <Col span={16} >
                            <span className="titulo-module">
                                <Icon type={moduleSetup.icon} />
                                <span>{moduleSetup.title}</span>
                            </span>
                        </Col>
                        <Col className='actions-module' span={8}>
                            <div>

                                {!_.isEmpty(actions) ? actions.map((action, index) => (
                                    <Button
                                        className={action.key}
                                        disabled={action.isDisableWithoutSelection ? this.handleDisabledButtonActions() : false}
                                        key={action.key}
                                        type={action.buttonType}
                                        shape="circle"
                                        size='large'
                                        title={action.description}
                                        icon={action.icon}
                                        onClick={() => this.handleOnClickAction(action)}
                                    />
                                )) : null}


                                {!_.isEmpty(moreActions) ?
                                    <Popover placement='bottomRight' title='Ações extras' content={moreActionsComponent} trigger='click'>
                                        <Button className="actions-ext" shape="circle" size='large' title="Ações extras" icon="ellipsis" />
                                    </Popover>
                                    : null}

                            </div>
                        </Col>
                    </Row>
                    <div className='data-table-module' >
                        <Row>
                            {!_.isEmpty(moduleSetup) ?
                                <DataGrid
                                    model={moduleSetup.model}
                                    columns={columnsDataGrid}
                                    filters={moduleSetup.filters}
                                    actions={actionsToSelectedItem}
                                    handlerSelectedItem={this.handlerSelectedItem}
                                />
                                : null}
                        </Row>
                    </div>
                </Loader>
                <ModuleForm
                    ref={this.saveFormRef}
                    visible={this.state.formVisible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    attributes={attributesEditable}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    moduleSetup: state.module.setup,
    loading: state.module.loading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setup
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Module)