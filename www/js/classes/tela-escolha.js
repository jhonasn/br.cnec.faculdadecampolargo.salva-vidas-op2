var TelaEscolha = function() {
	var self = this

	this.escolhas = new Array//array de tela-reproducao
	
	if(arguments.length > 0) {
		if(Array.isArray(arguments[0]) && typeof arguments[0][0] === 'TelaReproducao') {
			self.escolhas = arguments[0]
		}
	}
}