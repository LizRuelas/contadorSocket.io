var socket = io();

$(document).ready(function(){
	
	$("#poke1").click(function(evt){
		evt.preventDefault();
			var data = {
			numero: 1,
			status: "Connecting..."
			};
		
		socket.emit("conectando", data);
	});
});

socket.on("conectado", function (contador) {
	$("#numContador").text(contador);
});