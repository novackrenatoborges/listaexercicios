function bkground (cores){
    document.body.style.backgroundColor = cores;
}

function azul (){
    document.body.style.backgroundColor = 'blue';
}
function verde(){
    document.body.style.backgroundColor = 'green';
}
function amarelo(){
    document.body.style.backgroundColor = 'yellow';
}
function vermelho(){
    document.body.style.backgroundColor = 'red';
}

function escondemostra(input) {
	var conteudo = document.getElementById('conteudo');
    var acao = 'none';
    
	
	if (input === 'most') {
		mostra.style.display = 'block';
		esconde.style.display = 'none';
	} else {
		mostra.style.display = 'none';
		esconde.style.display = 'block';
	}
}

