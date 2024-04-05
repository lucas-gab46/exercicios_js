let lista = ["Banana", "Acerola", "Uva", "Goiaba"];

lista.shift("Banana");
console.log(lista);
lista.push("Acerola");
lista.push("Uva");
lista.push("Goiaba");
lista.shift();
console.log(lista);




const numeros = [3, 7, 14, 21, 29, 36, 42];

const numero = numeros.find((num) => num > 10 && num % 7 === 0);

console.log(numero);





const numeros1= [5, 10, 15, 20, 25, 30, 35,40];

const numero2 = numeros1.find((num) => num > 20);


  const filtrado = numeros1.filter((num) => num > 20);


  console.log(filtrado);




  
const hword  ="Bom dia, mundo! " 

const palavra = hword.trim().split(" ")

console.log(palavra);






const frase2  = "O Rato roeu a roupa do rei de Roma";

console.log((frase2.startsWith("O")));
console.log((frase2.endsWith("Roma")));





