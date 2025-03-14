
let texto = "Entonces si me escuchan tonotos oh no "
let texto2 = texto.toUpperCase();
let texto3 = texto2.replace("ESCUCHAN", "OBSERVAN");


document.getElementById('cadena').innerHTML = texto;
document.getElementById('cadena2').innerHTML = texto2;
document.getElementById('cadena3').innerHTML = texto3;


/*console.log(texto.length);*/

console.log(texto.at(10));     /* "at" es para buscar un caracter en especifico, igual se empieza a contar desde cero */ 

/*console.log(texto.toUpperCase());  es para que en la consola se imprima la frase pero en mayusculas*/



