/**
 * @Title: 内容体
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
import React from 'react';
import $ from 'jquery';

//列表
import ItemList from './itemList.js';

export default class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            itemList: []
        }
    }

    componentWillMount(){
        $.ajax({
            url: "/data/data1.json",
            success: function (data) {
                this.setState({
                    itemList: data
                });
            }.bind(this), error: function (code) {
                console.log("Ajax Error!");
            }
        });
    }

    /*componentDidMount(){
    }*/

    render() {

        return (
            <div className="content">
                我是内容体，我有个ajax请求
                <br/>
                <ItemList items={this.state.itemList}/>
            </div>);
    }
}