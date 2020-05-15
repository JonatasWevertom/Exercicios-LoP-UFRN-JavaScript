//variaveis
	// A variavel celulas é um vetor com todas as células da Tabela cridas em gui.html
		var celulas, pas, cel, cor, texto, cont=0, inte=0, meia=0, grat=0;
			celulas = document.getElementsByTagName("td");

function main1(){
	//letra a questão 1
		pas=prompt("Qual o seu tipo de passagem?");
			if(pas==1){
				alert("Passagem do tipo Inteira, comprada com sucesso!");
				inte++;
			}
			if(pas==2){
				alert("Passagem do tipo Meia, comprada com sucesso!");
				meia++;
			}
			if(pas==3){
				alert("Passagem do tipo Gratuidade, comprada com sucesso!");
				grat++;
			}
}

function main2(){
	//letra c questão 1
		cel=prompt("Qual a poltrona desejada?");
		cor=("red");
			mudarCor(cel, cor);
		texto=("Poltrona: "+cel+" Ocupada!");
			mudarTexto(cel, texto);
		alert("Venda realizada com sucesso!");
	//letra d questão 2
		if(cont==24){
			alert("As 24 poltronas já foram vendidas. Lotação máxima!");
			//letra e questao 1
				alert("Inteiras: "+inte+", Meias: "+meia+", Gratuidades: "+grat);
		}
}
//* Muda a cor de uma célula da Tabela, ao receber um número que indica sua posição na tabela, seguido da cor nova
	function mudarCor(cel, cor){
		celulas[cel-1].style.backgroundColor=cor;
	}
//* Muda o texto de uma célula da Tabela, ao receber um número que indica sua posição na tabela. seguido do novo texto
	function mudarTexto(cel, texto){
		celulas[cel-1].textContent=texto;
		//letra d questão 2
			cont++;
	}
