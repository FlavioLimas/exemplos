// Registra function liberando a execução do no pool de thread (Ele entra no setImmediate antes de executar console.time, porem executa depois) Nese caso ele esta contabilizando o tempo de execução das instruções
console.time('I');
setImmediate(function(){
	console.timeEnd('I');
});

// Modulos do nodejs que permite agendar uma tarefa:
// node-schedule ou node-cron