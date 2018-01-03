import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Menu, Icon, Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { DEFAULT_MODULE } from '../../utils/const'
import { MENU_GREEN } from '../../utils/constColors'
import _ from 'lodash'
//import MenuItemComponent from './menu-item-component'
const SubMenu = Menu.SubMenu

class MenuBase extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" style={{ backgroundColor: MENU_GREEN }}
                inlineIndent={18} defaultSelectedKeys={[DEFAULT_MODULE]}>
                {
                    this.props.menuItems.map((menuItem) => {
                        if (!_.isEmpty(menuItem.subMenu)) {
                            return (
                                <SubMenu key={menuItem.key} title={<span><Icon type="mail" /><span>{menuItem.title}</span></span>}>
                                    {
                                        menuItem.subMenu.map((subMenuItem) => {
                                            return (
                                                <Menu.Item key={subMenuItem.key}>
                                                    <Link to={`/admin/${subMenuItem.key}`}>
                                                        <Icon type={subMenuItem.icon} />
                                                        <span style={{ marginLeft: 5 }}>{subMenuItem.title}</span>
                                                    </Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>)
                        } else {
                            return (
                                <Menu.Item key={menuItem.key}>
                                    <Link to={`/admin/${menuItem.key}`}>
                                        <Icon type={menuItem.icon} />
                                        <span style={{ marginLeft: 5 }}>{menuItem.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        }
                    })
                }
            </Menu>
        )
    }
}

const mapStateToProps = state => ({ menuItems: state.menu.items })
// const mapDispatchToProps = dispatch => bindActionCreators({changeContactSearch, search, showModalContato}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(ContactSearch)
export default connect(mapStateToProps, null)(MenuBase)