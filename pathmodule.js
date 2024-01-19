const path = require('node:path');
const a = path.basename('C:\\temp\\myfile.html');
// Returns: 'myfile.html'
console.log(a);
const b=path.dirname('C:\\temp\\myfile.html');
// Returns: 'C:\\temp'
console.log(b);
