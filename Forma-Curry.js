// C L O S U R E
// Un closure es cuando una función es capaz de recordar 
// y acceder a un lexical scope, incluso cuando la función es ejecutada por fuera del lexical scope.

// C U R R Y
// Es poder llamar una función con menos parámetros de los que espera, 
// esta devuelve una función que espera los parámetros restantes y retorna el resultado.

// EJEMPLO


const divisible = (num, mod) => num % mod;

var divisible = function(num, mod) {
  return num % mod;
}

// TRANSFORMANDO A CURRY

const divisible = mod => num => num % mod;

var divisible = function (mod) {
  return function (num) {
    return num % mod;
  }
}
