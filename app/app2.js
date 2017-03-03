/**
 * @Title: 测试分别打包到多个文件
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */

import React from 'react';
import ReactDOM from 'react-dom';


export default class App2 extends React.Component{

    constructor(){
        super();
    }

    render(){
        return (
            <div>这是App2</div>
        )
    }
}

ReactDOM.render(<App2/>, document.getElementById('example'));
