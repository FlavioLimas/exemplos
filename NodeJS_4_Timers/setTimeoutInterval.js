var interval = function(callback, time){
	setTimeout(function(){
		callback();
		interval(callback, time); // Chamando função de forma recursiva
	},time);
};

interval(function(){
	console.log('R ' + new Date())
},1000);