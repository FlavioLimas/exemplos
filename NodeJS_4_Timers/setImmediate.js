console.log('A ' + new Date());

setImmediate(function(){ // Registra function liberando a execução do no pool de thread (Executa após A e B)
	console.log('I '+ new Date());
});

console.log('B ' + new Date());