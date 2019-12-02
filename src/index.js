import _ from 'lodash'

const pug = require('pug');

//compile the source code
const compiledFunction = pug.compileFile('index.pug');

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

pug.compile();

document.body.appendChild(component());
