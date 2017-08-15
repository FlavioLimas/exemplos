// Duas voltas no event loop 

console.log('A ' + new Date()); // Apresenta A
setTimeout(function(){ // Registra function liberando a execução do no pool de thread (Executa após A e B)
	console.log('I ' + new Date());
},0);
console.log('B ' + new Date()); // Apresenta B, depois I