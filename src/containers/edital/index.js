import React from 'react'
//import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { listaData } from '../../actions'
import ModuleListar from '../modules/moduleListar'
import { URL_API } from '../../utils/const'

const columns = [{
  title: 'Nome',
  dataIndex: 'titulo',
  sorter: (a, b) => a.titulo.length - b.titulo.length,
}, {
  title: 'Data Vigência',
  dataIndex: 'dataVig',
  sorter: (a, b) => a.dataVig.length - b.dataVig.length,
}, {
  title: 'Link',
  dataIndex: 'link',
  sorter: (a, b) => a.status.length - b.status.length,
}, {
  title: 'Status',
  dataIndex: 'status',
  sorter: (a, b) => a.status.length - b.status.length,
}, {
  title: '',
  dataIndex: 'actions',
  render: (text, record) => (
    <Button className="button rotate-list" shape="circle" icon="ellipsis" />
  ),

}];

class Lei extends React.Component {
  componentDidMount() {
    this.props.listaData(URL_API+'/edital');
  }

  render() {
    const { edital } = this.props;

    if (!edital) {
      return (
        <h1>Loading ...</h1>
      );
    }

    const status = (status) => {
      if(status === 's')
        return 'Ativo'
      else
        return 'Desativado'
    }

    console.log(edital);

    const data = [];    
    edital.map((edital) => 
      data.push({
        key: edital.id,
        titulo: edital.ds_titulo,
        dataVig: edital.dt_edital,
        link: edital.ds_link,
        status: status(edital.st_registro_ativo),
      })
    )

    return (
      <ModuleListar titulo="edital" columns={columns} data={data} />
    );
  }
}

const mapStateToProps = state => ({
  edital: state.listar.all,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  listaData,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lei)