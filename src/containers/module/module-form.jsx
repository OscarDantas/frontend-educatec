import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import SideBar from '../../components/sidebar'

import { Modal, Form, Input, Radio, DatePicker } from 'antd'
const FormItem = Form.Item;
const { TextArea } = Input;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

// const ChooseFormItem = (type, required, model = null) => {
//     switch (type) {
//         case 'text':

//             return (
//                 <FormItem label={attribute.description}>
//                     {getFieldDecorator(attribute.key, {
//                         rules: [
//                             attribute.isRequired ? { required: true } : { required: false }
//                         ]
//                     })(<Input type={attribute.formItem.key} />)}
//                 </FormItem>
//             )
//         default:
//             break;
//     }
// }

/*const ModuleFormComponent = Form.create()(
    (props) => {
        //console.log(props)
        const { visible, onCancel, onCreate, form } = props
        const { attributes } = props
        const { getFieldDecorator } = form
        return (
            <Modal
                visible={visible}
                title="Cadastrar edital"
                okText="Salvar"
                cancelText="Cancelar"
                onCancel={onCancel}
                onOk={onCreate}
            >
            <div className="sidebar">
                <Form layout="vertical">
                    {
                        !_.isEmpty(attributes) ?
                            attributes.map((attribute, index) => (
                                <FormItem key={attribute.key} label={attribute.description}>
                                    {getFieldDecorator(attribute.key, {
                                        rules: [
                                            attribute.isRequired ? { required: true } : { required: false }
                                        ]
                                    })(<Input type={attribute.formItem.key} />)}
                                </FormItem>
                            ))
                            : null
                    }
                </Form>
            </div>
            </Modal>
        )
    })*/


const typeInput = (type) => {
        switch (type) {
            case 'text':
                return <Input type={type} />
            case 'areaText':
                return <TextArea rows={4} />
            case 'datePicker':
                return <DatePicker onChange={onChange} />
            default:
                return null
        }
    }

const onChange = (date, dateString) => {
  console.log(date, dateString);
}

const ModuleFormComponent = Form.create()(
    (props) => {
        //console.log(props)
        const { visible, onCancel, onCreate, form } = props
        const { attributes } = props
        const { getFieldDecorator } = form
        return (
            <SideBar
                visible={visible}
                title="Cadastrar edital"
                okText="Salvar"
                cancelText="Cancelar"
                onCancel={onCancel}
                onOk={onCreate}             
            >
                <Form layout="vertical">
                    {
                        !_.isEmpty(attributes) ?
                            attributes.map((attribute, index) => (
                                <FormItem key={attribute.key} label={attribute.description}>
                                    {getFieldDecorator(attribute.key, {
                                        rules: [
                                            attribute.isRequired ? { required: true } : { required: false }
                                        ]
                                    })(typeInput(attribute.formItem.key))}
                                </FormItem>
                            ))
                            : null
                    }
                </Form>
            </SideBar>
        )
    })

class ModuleForm extends Component {

    render() {
        const { visible, onCancel, onCreate, form, ref, attributes } = this.props;
        return (
            <ModuleFormComponent
                ref={ref}
                visible={visible}
                onCancel={onCancel}
                onCreate={onCreate}
                attributes={attributes}
            />
        )
    }
}


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({

})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleForm)