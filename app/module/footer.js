/**
 * @Title: 尾部
 * @Description:
 * @Author:Weili.Cai
 * @Created Date:2017/3/2
 */
import React from 'react';

export default class Footer extends React.Component {

    constructor(){
        super();
        this.state={
            start: new Date().getTime(),
            elapsed: 0
        }
    }

    componentDidMount(){
        setInterval(function () {
            this.setState({
                elapsed: new Date().getTime() - this.state.start
            });
        }.bind(this), 50);
    }

    render() {

        var elapsed = Math.round(this.state.elapsed  / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );

        return (
            <div className="footer">
                我是尾部,你已经启动了{seconds}秒
            </div>);
    }
}
