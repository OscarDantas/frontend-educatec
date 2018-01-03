import React from 'react';
import { Icon, Button, Modal, Form, Input, DatePicker, notification } from 'antd';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import moment from 'moment'
import { showModalIntercorrencia, saveModalIntercorrencia } from './formIntercorrenciaActions'


const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                wrapClassName='vertical-center-modal'
                title="Nova Intercorrência"
                okText="Salvar"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="Palavra-chave:">
                        {getFieldDecorator('palavra_chave', {
                            rules: [{ required: true, message: 'Por favor, informe a palavra-chave.' }],
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="Detalhamento:">
                        {getFieldDecorator('detalhamento', {
                            rules: [{ required: true, message: 'Por favor, informe o detalhamento.' }],
                        })(<Input type="textarea" />)}
                    </FormItem>
                    <FormItem label="Data da Ocorrência:">
                        {getFieldDecorator('data_ocorrencia', {
                            rules: [{ required: true, message: 'Por favor, informe a data da ocorrência.'}],
                            initialValue: moment(new Date(), 'DD/MM/YYYY')
                        })(<DatePicker format="DD/MM/YYYY" />)}
                    </FormItem>

                </Form>
            </Modal>
        );
    }
);

class FormIntercorrencia extends React.Component {
    constructor(props) {
        super(props)
        this.state = {loading: false}
        this.saveFormRef = this.saveFormRef.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.responseTimestamp != this.props.responseTimestamp) {
            if(nextProps.error) {
                this.setState({loading: false})
                notification['error']({
                    message: 'Cadastro não realizado',
                    description: 'Não foi possível cadastrar a intercorrência. Entre em contato com o Privio.'
                })
                console.log('log já na notificação: ', nextProps.errorMessage)
            } else {
                this.setState({loading: false})
                this.form.resetFields();
                notification['success']({
                    message: 'Intercorrência salva',
                    description: 'O cadastro da intercorrência foi finalizado com sucesso.'
                })
            }
        }
    }
    handleCancel() {
        this.props.showModalIntercorrencia(false)
        this.setState({loading: false})
    }
    handleCreate() {
        this.setState({loading: true})
        this.form.validateFields((err, values) => {
            if (err) {
                this.setState({loading: false})
                return;
            }
            this.props.saveModalIntercorrencia(values)
        });
    }
    saveFormRef(form) {
        this.form = form;
    }
    render() {
        return (
            <div>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.props.modalIntercorrenciaVisibility}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        modalIntercorrenciaVisibility: state.reducers.formIntercorrencia.showModalIntercorrencia,
        form: state.reducers.formIntercorrencia.formValues,
        error: state.reducers.formIntercorrencia.error,
        errorMessage: state.reducers.formIntercorrencia.errorMessage,
        responseTimestamp: state.reducers.formIntercorrencia.responseTimestamp,
    }
)
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        showModalIntercorrencia,
        saveModalIntercorrencia,
    }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormIntercorrencia)