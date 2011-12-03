var crema = require('../lib');


var route = 'request -method=POST OR -method=GET /hello/world OR /hello/earth -> google';



console.log(JSON.stringify(crema(route), null, 2));


