const soap = require('soap');

var url =  'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function(err, client){
    console.log('Describe WSDL', client.describe().Calculator.CalculatorSoap);

    client.Add({intA: 5, intB: 2}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            // console.log('Add Result:', result);
            console.log('Add Result:', result.AddResult);
        }
    });

    client.Subtract({intA: 5, intB: 2}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            // console.log('Subtract Result:', result);
            console.log('Subtract Result:', result.SubtractResult);
        }
    });

    client.Multiply({intA: 5, intB: 2}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            // console.log('Multiply Result:', result);
            console.log('Multiply Result:', result.MultiplyResult);
        }
    });

    client.Divide({intA: 5, intB: 2}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            // console.log('Divide Result:', result);
            console.log('Divide Result:', result.DivideResult);
        }
    });
});