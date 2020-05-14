		function iniciar(){
		var deck2 = shufle();
		var card0 = nextCard(deck2);
		paint(0, card0);
		var card1 = nextCard(deck2);
		paint(1, card1);
		var card5 = nextCard(deck2);
		paint(5, card5);
		var card6 = nextCard(deck1);
		paint(6, card6);
	}
	function continuar1(){
		var deck2 = shufle();
		var card2 = nextCard(deck2);
		paint(2, card2);
	}
	function continuar2(){
		var deck2 = shufle();
		var card3 = nextCard(deck2);
		paint(3, card3);
	}
	function parar1(){
		var deck2 = shufle();
		var card6 = nextCard(deck2);
		paint(6, card6);
	}
