    var jogador = 1; // Variavel que controla a vez do jogador;
    var jogada = false; // Variavel que controla se a jogada foi efetuada corretamente, se não era uma casa marcada já;

    var valida_posicao = new Array(0,0,0,0,0,0,0,0,0,0); // Vetor que valida as posições da tabela, se já estão marcadas ou não;
    var marca_posicao = new Array(); // Vetor que guarda as posições marcadas, se foi xis ou bola;
    
    function clic(posicao_jogada){  // Função que marca a jogada realizada;
    
        jogada = true; // Jogada é valida;

        if ( valida_posicao[posicao_jogada] == 0 ){ // Testa se a posição clicada é uma posição "livre", ou seja, igual a 0;
            if ( jogador == 1 ){ // Se for a vez do jogador 1, marca a bolinha na posição livre clicada;
                document.getElementById("p"+posicao_jogada).style.backgroundImage = 'url("bola.PNG")'; // Muda a imagem de fundo da celula para bola;
                marca_posicao[posicao_jogada] = "bola"; // Guarda a posição marcada como bola;
            }else
            if (jogador == 2 ){ // Se for a vez do jogador 2, marca o xis na posição livre clicada;
                document.getElementById("p"+posicao_jogada).style.backgroundImage = 'url("xis.PNG")'; // Muda a imagem de fundo da celula para xis;
                marca_posicao[posicao_jogada] = "xis"; // Guarda a posição marcada como xis;
            }
            valida_posicao[posicao_jogada] = 1; // Posição fica utilizada, não está mais livre, ou seja, recebeu 1;
        }else
            jogada = false; // Se a jogada não for efetuada com sucesso, por exemplo a posição clicada ja está marcada, a jogada é falsa, ou seja, o mesmo jogador joga novamente;
        
        if ( jogada == false ) // Se a jogada for falsa mostra uma mensagem ao jogador, e não acontece nada;
            alert("Esta casa ja esta marcada!\nEscolha outra!");
        else
        if ( jogada == true ){ // Senão, se a jogada for verdadeira, troca a vez do jogador;
            if (jogador == 1) // Se for a vez do jogador 1;
            jogador = 2;      // Troca para o jogador 2;
            else            // Caso contrario;
            jogador = 1;   // Troca para o jogador 1;
        }
        
        testa_fim_de_jogo(); // Chama a função que testa se o jogo terminou, ou seja, testa se todas as posições ja estão marcadas, se o jogo terminou ela testa quem ganhour;
    }
    
    
    function testa_fim_de_jogo(){ // Função que testa o fim do jogo, e qual jogador venceu;
    
        // "If's" que testam se todas as posições já estão marcadas;
        if ( valida_posicao[1] == 1 && valida_posicao[2] == 1 && valida_posicao[3] == 1 ) {
        if ( valida_posicao[4] == 1 && valida_posicao[5] == 1 && valida_posicao[6] == 1 ) {
        if ( valida_posicao[7] == 1 && valida_posicao[8] == 1 && valida_posicao[9] == 1 ) {
        
            var bola = 0; // Váriavel local para testar se foi o jogador "bola" que ganhou;
            var xis = 0; // Váriavel local para testar se foi o jogador "xis" que ganhou;
            
            // Se ocorrer algum dos casos abaixo a variavel "bola" recebe 1, ou seja, bola ganhou;
            if ( marca_posicao[1] == "bola" && marca_posicao[2] == "bola" && marca_posicao[3] == "bola" || // ou;  
                 marca_posicao[4] == "bola" && marca_posicao[5] == "bola" && marca_posicao[6] == "bola" || // ou;  
                 marca_posicao[7] == "bola" && marca_posicao[8] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[1] == "bola" && marca_posicao[4] == "bola" && marca_posicao[7] == "bola" || // ou; 
                 marca_posicao[2] == "bola" && marca_posicao[5] == "bola" && marca_posicao[8] == "bola" || // ou; 
                 marca_posicao[3] == "bola" && marca_posicao[6] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[1] == "bola" && marca_posicao[5] == "bola" && marca_posicao[9] == "bola" || // ou; 
                 marca_posicao[3] == "bola" && marca_posicao[5] == "bola" && marca_posicao[7] == "bola" ){
                    bola = 1; // Bola ganhou;
                }
            
            // Se ocorrer algum dos casos abaixo a variavel "xis" recebe 1, ou seja, xis ganhou;
            if ( marca_posicao[1] == "xis" && marca_posicao[2] == "xis" && marca_posicao[3] == "xis" || // ou; 
                 marca_posicao[4] == "xis" && marca_posicao[5] == "xis" && marca_posicao[6] == "xis" || // ou; 
                 marca_posicao[7] == "xis" && marca_posicao[8] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[1] == "xis" && marca_posicao[4] == "xis" && marca_posicao[7] == "xis" || // ou; 
                 marca_posicao[2] == "xis" && marca_posicao[5] == "xis" && marca_posicao[8] == "xis" || // ou; 
                 marca_posicao[3] == "xis" && marca_posicao[6] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[1] == "xis" && marca_posicao[5] == "xis" && marca_posicao[9] == "xis" || // ou; 
                 marca_posicao[3] == "xis" && marca_posicao[5] == "xis" && marca_posicao[7] == "xis" ){
                    xis = 1; // Xis ganhou;
                }
            
            if ( bola == 0 && xis == 0 ) // Se as duas variaveis estiverem 0 é pq ninguem ganhou;
                alert("Nao houve vencedores!\nTente Novamente!"); // Mostra mensagem de que não houve vencedores;
            else // Senão
            if ( bola == 1 && xis == 0 ) // Se apenas a variavel "bola" estiver com 1, o jogador "bola" ganhou;
                alert("Jogador O Venceu!"); // Mostra mensagem ao vencedor;
            else // Senão
            if ( bola == 0 && xis == 1 ) // Se apenas a variavel "xis" estiver com 1, o jogador "xis" ganhou;
                alert("Jogador X Venceu!"); // Mostra mensagem ao vencedor;
            else // Senão
            if ( bola == 0 || xis == 0 ) // Se as duas variaveis estiverem 1 é pq os dois jogadores ganharam;
                alert("Empate!\nTente Novamente!"); // Mostra mensagem de empate;
                
            location.reload(true); // Recarrega a página para novo jogo;
            
        } } } 
             
    }