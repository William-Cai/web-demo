/**
 * @Title: 列表数据
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
import React from 'react';

export default class ItemList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <ul className="app-ul">
                {
                    (this.props.items).map(function (item, index) {
                        return (<li key={item.id}>{item.name}</li>);
                    })
                }
            </ul>
        );
    }
}