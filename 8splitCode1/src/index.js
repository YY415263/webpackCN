/**
 * Created by zhekexinxi on 06/02/2018.
 */

import { cube } from './math.js';
import _ from 'lodash';

if (process.env.NODE_ENV !== 'production') {
       alert('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    element.innerHTML = _.join(['Hello', 'webpack!' ,'5 cubed is equal to ' + cube(5)], '\n\n');
    // element.innerHTML = [
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    // ].join('\n\n');

    return element;
}


let element = component();
document.body.appendChild(element);

if(module.hot){
    module.hot.accept('./math.js',function () {
        console.log('+++++++++++++++++++');
        document.body.removeChild(element);

        element = component();
        console.log('-------------------');
        document.body.appendChild(element);
    })
}