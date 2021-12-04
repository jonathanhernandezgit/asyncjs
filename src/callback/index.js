function sum(num1, num2){
    return num1+num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));



function date(callback){
    console.log(new Date + " Soy la primer fecha en ejecutarse");
    setTimeout(function () {
        let date = new Date;
        callback(date);
        console.log("Ya que me esperaron 3ms, ahora voy yo...");
    }, 3000)  
}

function printDate(dateNow) {
    console.log(dateNow + " como hay que esperar, voy yo...");
}

date(printDate);
