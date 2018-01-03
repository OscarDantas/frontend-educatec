import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Icon } from 'antd';
import Logo from '../../components/logo/index'
import './index.less'
import MenuBase from './menu-base'
import { Route } from 'react-router-dom'
import Module from '../module'
import { DEFAULT_MODULE } from '../../utils/const'

const { Header, Sider, Content } = Layout;

const menu = (
  <Menu className="menu-user" selectedKeys={[]}>
    <Menu.Item><Icon type="user" />Perfil</Menu.Item>
    <Menu.Item><Icon type="setting" />Configurações</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout"><Icon type="logout" />Sair</Menu.Item>
  </Menu>
);

export default class Base extends React.Component {
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
    const logoExpanded = <Logo className='logo-expanded' type={'expanded'} />
    const logoShort = <Logo className='logo-short' type={'short'} />
    
    return (
      <Layout id="components-layout-educatec">
        <Sider
          trigger={null}
          collapsible
          width={this.state.width}
          collapsedWidth={this.state.collapsedWidth}
          collapsed={this.state.collapsed}
        >
          {this.state.collapsed ? null : logoExpanded}

          <MenuBase match={this.props.match} />
        </Sider>

        <Layout>
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            
            {this.state.collapsed ? logoShort : null}

            <div className="right">
              <Dropdown overlay={menu}>
                <span className="menu-user">
                  <Avatar size="small" className="avatar" src="../img/user.png" />
                  Administrador <Icon type="down" />
                </span>
              </Dropdown>
            </div>

          </Header>
          <Content className="content">
            <Module moduleKey={this.props.match.params.moduleKey ? this.props.match.params.moduleKey : DEFAULT_MODULE} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}