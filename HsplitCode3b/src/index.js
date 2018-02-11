/**
 * Created by zhekexinxi on 06/02/2018.
 */

import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
       alert('Looks like we are in development mode!');
}

var tempcomponent;
require.ensure([], function() {
    var _ = require('lodash') //baidumap.js放在我们当前目录下
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack','5 cubed is equal to ' + cube(5)], ' ');
    tempcomponent = element;
    document.body.appendChild(element);

},function(){
    alert('引入lodash失败');
},'lodash');


if(module.hot){
    module.hot.accept('./math.js',function () {

        document.body.removeChild(tempcomponent);

        require.ensure([], function() {
            var _ = require('lodash') //baidumap.js放在我们当前目录下
            var element = document.createElement('div');
            element.innerHTML = _.join(['Hello', 'webpack','5 cubed is equal to ' + cube(5)], ' ');
            tempcomponent = element;
            document.body.appendChild(element);

        },function(){
            alert('引入lodash失败');
        },'lodash');
    })
}
