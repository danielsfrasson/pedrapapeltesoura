let jogar = confirm("Quer jogar pedra, papel ou tesoura?");

if (jogar){
    let escolha = prompt("Escolha pedra, papel ou tesoura.");
    if (escolha){
        let jogadorUm = escolha.trim().toLowerCase();
        if (jogadorUm === "pedra" || jogadorUm === "papel" || jogadorUm === "tesoura"){
            let escolhaDoComputador = Math.floor(Math.random()*3 + 1);
            let computador = escolhaDoComputador === 1 ? "pedra" : escolhaDoComputador === 2 ? "papel" : "tesoura"
            let resultado = jogadorUm === computador ? "Empate" 
            : jogadorUm === "pedra" && computador === "papel" ?`jogadorUm: ${jogadorUm}\n computador: ${computador}\n Computador ganhou!` 
            : jogadorUm === "papel" && computador === "tesoura" ?`jogadorUm: ${jogadorUm}\n computador: ${computador}\n Computador ganhou!` 
            : jogadorUm === "tesoura" && computador === "pedra" ?`jogadorUm: ${jogadorUm}\n computador: ${computador}\n Computador ganhou!`
            : jogadorUm === "papel" && computador === "pedra" ?`jogadorUm: ${jogadorUm}\n computador: ${computador}\n jogadorUm ganhou!`
            : jogadorUm === "pedra" && computador === "tesoura" ?`jogadorUm: ${jogadorUm}\n computador: ${computador}\n jogadorUm ganhou!`
            : `jogadorUm: ${jogadorUm}\n computador: ${computador}\n jogadorUm ganhou!`;
            alert(resultado);
            let jogarNovamente = confirm("Quer jogar novamente?");
            jogarNovamente ? location.reload() : alert("Ok, obrigado por jogar!");

        } else{
            alert("Escolha pedra, papel ou tesoura.");
        }
    } else{
        alert("Talvez da próxima vez :/")
    }
} else{
    alert("Tudo bem, talvez na próxima.")
}