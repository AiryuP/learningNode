const path = require('path');

let url1 = '/demo/aaa/index.html';
let url2 = '/hello/aaa/index2.html';


console.log( path.basename( url1 ) )
console.log( path.basename( url2 ) )
console.log( path.basename( url2,'.html' ) )

