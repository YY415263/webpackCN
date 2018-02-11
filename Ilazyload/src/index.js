/**
 * Created by zhekexinxi on 06/02/2018.
 */

import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
       alert('Looks like we are in development mode!');
}


function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var element = document.createElement('div');

        element.innerHTML = _.join(['Hello', 'webpack','5 cubed is equal to ' + cube(5)], ' ');


        var button = document.createElement('button');

        button.innerHTML = 'Click me and look the alert!';

        element.appendChild(button);

        button.onclick = e => import(/* webpackChunkName: "alert" */ './alert').then(module => {
            var myalert = module.default;
            myalert();
        });

        return element;
    }).catch(error => 'An error occurred while loading the component');
}

let tempcomponent;

getComponent().then(component => {
    tempcomponent = component;
    document.body.appendChild(component);
})



if(module.hot){
    module.hot.accept('./math.js',function () {
        console.log('+++++++++++++++++++');
        document.body.removeChild(tempcomponent);

        getComponent().then(component => {
            tempcomponent = component;
            document.body.appendChild(component);
        })
    })
}
