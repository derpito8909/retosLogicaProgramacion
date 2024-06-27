/*  archivo donde se solicita un numero al usuario y responde los numeros primos menores a este  */

const buttonNumber = document.getElementById("btnNumber");

buttonNumber.addEventListener("click", () => {
  const num = Number(document.getElementById("idNumber").value);
  if (!isNaN(num)) {
    const result = primeGenerator(num);
    console.log(result);
    const text = document.getElementById("primeNumbers");
    text.textContent = `[${result.join(" ,")}]`;
  }
});

/**
 * recibe un numero dado y retorna un arreglo de numero primos menores a él
 * @param {number} num - el numero digitado.
 * @returns {Array} arreglo con los numeros primos menores a el numero dado
 * @example
 * const result = primeGenerator(5);
 * console.log(result); // Output: [2,3,5]
 */
function primeGenerator(num) {
  const primeNumbers = [];
  for (let index = 2; index <= num; index++) {
    if (isPrime(index)) {
      primeNumbers.push(index);
    }
  }
  return primeNumbers;
}

/**
 * verifica si el numero dado es primo o no
 * @param {number} num - numero enviado
 * @returns {boolean} - true si es numero primo de lo contrario false
 */
function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % index === 0) {
      return false;
    }
  }
  return num !== 1;
}
