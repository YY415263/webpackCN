import { file , parse } from './globals.js';

function component() {

    var element = document.createElement('div');

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    alert('Hmmm, this probably isn\'t a great idea...');
    alert(file);

    return element;
}

document.body.appendChild(component());

 fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
         console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
         console.log(json)
       })
   .catch(error => console.error('Something went wrong when fetching this data: ', error))