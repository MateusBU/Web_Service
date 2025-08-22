const soap = require('soap');

var url =  'http://localhost:8001/wscalc1?wsdl';

soap.createClient(url, function(err, client){
    console.log('Describe WSDL', client.describe().ws.calc);

    client.multiplicar({a: 5, b: 2}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
        }
    });
});