/**
 * Created by zhekexinxi on 06/02/2018.
 */

import _ from 'lodash';
import printMe from './print.js';
import './styles.css';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick 事件绑定原始的 printMe 函数上

    element.appendChild(btn);

    return element;
}



let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./print.js',function () {
        console.log('+++++++++++++++++++');
        document.body.removeChild(element);

        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        console.log('-------------------');
        document.body.appendChild(element);
    })
}

//这只是一个例子，但还有很多其他地方可以轻松地让人犯错。
// 幸运的是，存在很多 loader（其中一些在下面提到），使得模块热替换的过程变得更容易。