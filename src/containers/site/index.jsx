import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SiteMenu from '../../components/site-menu'
import Logo from '../../components/logo'
import { BLACK } from '../../utils/constColors'
import './index.less'

class Site extends Component {
    render() {
        const background = 'img/background2.jpg'
        const menuItems = [
            {'description': 'Perguntas Frequentes','url': 1},
            {'description': 'Cronograma','url': 2},
            {'description': 'Quero ser avaliador','url': 3},
            {'description': 'Quero ser proponente','url': 4},
            {'description': 'Entrar',
             'url': 5, 
             'style': { borderRadius: 10, border: '1px solid', borderColor: BLACK }
            }
        ]
        return (
            <div className="body" style={{ backgroundImage: `url(${background})` }}>
                <div className="container">
                    <Logo className="logo" type='site' />
                    <SiteMenu menuItems={menuItems} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // contacts: state.reducers.contact.list
})
const mapDispatchToProps = dispatch => bindActionCreators({
    // select,
    // showModalAcompanhamento,
    // showModalIntercorrencia,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Site)