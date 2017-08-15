// funcao construtora
var SerialGenerator = function () {
	// privado
	var max = 10000;
	// funcao fabrica 
	this.generate = function () {
		return Math.floor(Math.random() * max);
	};
};

module.exports = SerialGenerator;