function convertirCF() {
let CF = prompt("A què vols convertir C/F?");
let temp = parseFloat(prompt("Temperatura:"));
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
if( CF.toUpperCase() == "F" ){
=======
if( CF.toUpperCase() == "C" ){
>>>>>>> 47bd899 (fent canvis a l'arxiu per provar)
let cent = (temp-32)/(9/5);
console.log(`${temp}F -> ${cent}C`);
}else if (CF.toUpperCase() == "C"){
let fh = (9/5) * temp + 32;
console.log(`${temp}C -> ${fh}F`);
}else {
console.log("Només es pot C ó F");
=======
if( CF.toUpperCase() == "C" ){
=======
if( CF.toUpperCase() == "B" ){
>>>>>>> 58276ef (modificada una lletra)
=======
if( CF.toUpperCase() == "B" ){
>>>>>>> 58276ef (modificada una lletra)
let cent = (temp-32)/(5/9);
console.log(`${temp}F -> ${cent}C`);
}else if (CF.toUpperCase() == "F"){
let fh = (5/9) * temp + 32;
console.log(`${temp}C -> ${fh}F`);
}else {
console.log("Només es pot C ó F");
}
>>>>>>> ff66ce6140c7f6129d46cf4d25743fbba5d0462b
}
