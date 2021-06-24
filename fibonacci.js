
// SERIE FIBONACCI ANTES DE USAR "MEMORIZACION"

var fibonacci = function (n){
    return n<2?n : fibonacci(n-1) + fibonacci(n-2);
};

for(var i=0; i<=10; i+=1){
    document.writeln('// '+ i + ': '+ fibonacci(i));
    document.writeln('');
}
document.writeln('');



// EJEMPLO USANDO MEMOIZE

var fibonacci = (function ( ){
    var memo = [0,1];
    var fib = function (n){
        var result = memo[n];
        if(typeof result !== 'number'){
            result = fib(n-1)+fib(n-2);
            memo[n]=result;
        }
        return result;
    };
    return fib;
}( ));

var memorizer = function (memo,formula){
    var recur = function(n){
        var result = memo[n];
        if(typeof result !=='number'){
            result = formula(recur,n);
            memo[n]= result;
        }
        return result;
    };
    return recur;
};

var fibonacci = memorizer([0,1],function(recur,n){
    return recur(n-1)+recur(n-2);
});


// funcion haciendo el factorial

var factorial = memorizer([1,1],function(recur,n){
    return n*recur(n-1);
});

for(var j=0; j<=10; j+=1){
    document.writeln('// '+ j + ': '+ factorial(j));
    document.writeln('');
}
