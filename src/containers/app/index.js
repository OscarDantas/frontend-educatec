import React from 'react';
<<<<<<< HEAD
import { Switch, Route, Link } from 'react-router-dom'
import Base from '../base'
import Site from '../site'
import ModuleComp from '../base'

const Module = () => (
  <Switch>
    <Route exact path='/admin' component={ModuleComp} />
    <Route path='/admin/:moduleKey' component={ModuleComp} />
  </Switch>
)

export default props => (
  <main style={{ height: '100%' }}>
    <Switch>
      <Route exact path="/" component={Site} />
      <Route path="/admin" component={Module} />
    </Switch>
  </main>
)
=======
import { Route, Link } from 'react-router-dom'
import { Layout, Menu, Avatar, Dropdown, Icon } from 'antd';

import Lei from '../lei'
import Edital from '../edital'

import './index.less';

const { Header, Sider, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu selectedKeys={[]}>
    <Menu.Item><Icon type="user" />Perfil</Menu.Item>
    <Menu.Item><Icon type="setting" />Configurações</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout"><Icon type="logout" />Sair</Menu.Item>
  </Menu>
);

export default class App extends React.Component {
  state = {
    collapsed: false,
    collapsedWidth: 0,
    width: 250,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }  

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }} id="components-layout-educatec">
        <Sider
          trigger={null}
          collapsible
          width={this.state.width}
          collapsedWidth={this.state.collapsedWidth}
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <img alt="logo" src="/image/logo-educatec2.png" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="message" />
              <span>Notificações</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="message" />
              <span>Chat</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="message"/><span>Configurações</span></span>}>
              
              
              <Menu.Item key="3">
                <Link to="/lei">
                  <Icon type="message" />
                  <span>Lei</span>
                </Link>
              </Menu.Item>


              <Menu.Item key="4">
                <Icon type="message" />
                <span>Etapa</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="message" />
                <span>Modalidade</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="message" />
                <span>Grau de Abrangência</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="message" />
                <span>Área de Conhecimento</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="message" />
                <span>Categoria</span>
              </Menu.Item>

              <Menu.Item key="9">
                <Link to="/edital">
                  <Icon type="message" />
                  <span>Edital</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="10">
                <Icon type="message" />
                <span>Fator</span>
              </Menu.Item>
              <Menu.Item key="11">
                <Icon type="message" />
                <span>Critério</span>
              </Menu.Item>
              <Menu.Item key="12">
                <Icon type="message" />
                <span>Resposta</span>
              </Menu.Item>
              <Menu.Item key="13">
                <Icon type="message" />
                <span>Formulário</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header top">            
            <Icon
              className="trigger box-trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <div className="right">
              <Dropdown overlay={menu}>
                <span className="menu-user">
                  <Avatar size="small" className="avatar" src="/image/user.png" />
                  Administrador
                </span>
              </Dropdown>
            </div>
          </Header>
          <Content className="content">
            
            <Route exact path="/edital" component={Edital} />
            <Route exact path="/lei" component={Lei} />

          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
  /*<div>
    <header>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>*/
>>>>>>> 113eee1c5420217209bd600e03b4c4684bf63712
