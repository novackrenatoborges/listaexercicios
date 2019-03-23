function bkground(cores){
    document.body.style.backgroundColor = cores;
}

function azul (){
    document.body.style.backgroundColor = 'blue';
}
function verde(){
    document.body.style.backgroundColor = 'green';
}
function amarelo(){
    document.body.style.backgroundColor='yellow';
}
function vermelho(){
    document.body.style.backgroundColor = 'red';
}

function validar(){
	var nma = document.getElementById('nm').value;
	var passb = document.getElementById('pass').value;
	var passconc = document.getElementById('passcon').value;


	if (passb == 0 || passconc == 0 || nma == 0){
		alert('Preencha todos os campos');

		}if(passb != passconc || passb.length<6 || passconc.length >10){
			alert('Senhas Invalida');

		}	else{
			alert('Dados Enviados');
		}

}

function palindrome(form) {
	var palavra = document.getElementById('palavras').value;
	
	if (!palavra) {
		window.alert('QUAL A PALAVRA?');
		return false;
	}
	
	var palindrome = '';
	for (var i = palavra.length - 1; i >= 0; i--) {
		palindrome += palavra[i];
	}
	
	if (palindrome === palavra) {
		window.alert('PALINDROME');
	} else {
		window.alert('Ñ É PALINDROME');
	}
}

function trocar(){
	var palavras=document.getElementById('formulario').childNodes;
	var invert=palavras.length-1;
	var aux;

	for(i=0;i<(palavras.length/2);i++){
	console.log(i);
		aux=palavras[i].value;
		palavras[i].value=palavras[invert].value;
		palavras[invert].value=aux;
		invert--;
	}
}



