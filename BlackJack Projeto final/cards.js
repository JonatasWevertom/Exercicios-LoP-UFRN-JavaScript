var deck1 = [];
var naipes = ["Clubs", "Diamonds", "Hearts", "Spades"];
var celulas;
	celulas = document.getElementsByTagName("td");
var name = "card";
var pos = 0;
/* Saca a próxima carta do baralho*/	
function nextCard(deck){
	var card = deck[pos];
	pos++;
	return card;
}	
/*Desenha uma carta do baralho na tela do jogo.
*index - posição onde a carta será desenhada na tabela
*card - o nome de uma carta do jogo, já com .jpg*/
function paint(index, card){
	celulas[index].innerHTML= "<img src='images/"+card+"'>";
}	
/*Embaralha as 52 cartas do jogo, não permitindo cartas repetidas.
 *As cartas são armazenadas em um vetor chamado deck.*/
function shufle(){
	var cont = 0;
	var rep = 0;
	var card = "";
	var deck = [];
	while(cont < 52){
		card = draw();
	    if(cont == 0){
			deck.push(card);
			cont++;
		}
		else{
			if(!search(card,deck)){
				deck.push(card);
				cont++;
			}
		}//fim do else
		rep++;
	}
	return deck;	
}
/*procura um carta no baralho.
*card - a carta a ser procurada.*/
function search(card, deck){
	var i;
	var found = false;
	for(i=0; i < deck.length; i++){
		if(deck[i] == card){
			found = true;
			break;
		}
	}
	return found;
}
/*Sorteia aleatóriamente uma carta do baralho.
 *A carta possui um numero e um naipe.
 *As cartas 1, 11, 12 e 13, são o Ás, Valete, Dama e Reis, respectiva-mente */
function draw(){
	var num;
	var aux;
	var x;
	var card = "card";
	num = Math.floor(Math.random()*13)+1;
	if(num == 11){
		aux = "J";
	}
	else if(num == 12){
		aux = "Q";
	}
	else if(num == 13){
		aux = "K";
	}
	else if(num == 1){
		aux = "A";
	}
	else{
		aux = num;
	}
	x = Math.floor(Math.random()*4);
	card = card+naipes[x]+aux+".png";
	return card;
}
