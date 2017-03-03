/**
 * @Title: 头部
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
import React from 'react';
import logo from '../img/icon.gif';

export default class Header extends React.Component {

    getLogo(){
        return (<img src={logo} alt="图标"/>);
    }

    render() {
        return (
            <div className="header">
                {this.getLogo()}&lt;- 我是头部，我有个小图标
            </div>);
    }
}
