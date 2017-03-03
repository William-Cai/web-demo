/**
 * @Title: 主入口
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
//样式
import './css/app.css';
//模块
import Header from './module/header.js';
import Content from './module/content.js';
import Footer from './module/footer.js';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Web工程Demo</h1>
                <article>涉及了React & Webpack & Jquery</article>
                <hr/>
                <div className="main">
                    <Header/>
                    <hr/>
                    <Content/>
                    <hr/>
                    <Footer/>
                </div>
            </div>);
    }
}

ReactDOM.render(<App />, $("#main")[0]);
