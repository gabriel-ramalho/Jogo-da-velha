const prompt = require('prompt-sync')({sigint: true});

let casa1 = "_"
let casa2 = "_"
let casa3 = "_"
let casa4 = "_"
let casa5 = "_"
let casa6 = "_"
let casa7 = " "
let casa8 = " "
let casa9 = " "

function renderizarTela(){
    console.log(`
        ${casa1}|${casa2}|${casa3}
        ${casa4}|${casa5}|${casa6}
        ${casa7}|${casa8}|${casa9}\n\n`
    )
}

function lerComandoJogador(jogadorAtual){
    let comandoLido = prompt(`${jogadorAtual}, entre com o comando. Entre 1 e 9, ou S para sair: `);
    return comandoLido
}

function renderizaInicializacao(){
    console.log("==================================================\n")
}

function renderizaTermino(){
    console.log("\n")
    console.log("==================================================")
}

function guardarComandoDoJogador(comandoDoJogador, simboloAtual){
    switch(Number(comandoDoJogador)){
        case 1: { 
            casa1 = simboloAtual
            break
        }
        case 2: { 
            casa2 = simboloAtual
            break
        }
        case 3: { 
            casa3 = simboloAtual
            break
        }
        case 4: { 
            casa4 = simboloAtual
            break
        }
        case 5: { 
            casa5 = simboloAtual
            break
        }
        case 6: { 
            casa6 = simboloAtual
            break
        }
        case 7: { 
            casa7 = simboloAtual
            break
        }
        case 8: { 
            casa8 = simboloAtual
            break
        }
        case 9: { 
            casa9 = simboloAtual
            break
        }
    }
}

function verificarSeJogadorAtualVenceu(simb){

    // Vencimento nas horizontais
    if(casa1 === simb && casa2 === simb && casa3 === simb) return true

    if(casa4 === simb && casa5 === simb && casa6 === simb) return true

    if(casa7 === simb && casa8 === simb && casa9 === simb) return true
    
    // Vencimento nas verticais
    if(casa1 === simb && casa4 === simb && casa7 === simb) return true

    if(casa2 === simb && casa5 === simb && casa8 === simb) return true

    if(casa3 === simb && casa6 === simb && casa9 === simb) return true
    
    // Vencimento nas diagnoais
    if(casa1 === simb && casa5 === simb && casa9 === simb) return true

    if(casa3 === simb && casa5 === simb && casa7 === simb) return true

    return false
}

function main(){
    renderizaInicializacao()

    const nomeJogador1 = "Jogador 1"
    const nomeJogador2 = "Jogador 2"

    const simboloJogador1 = "X"
    const simboloJogador2 = "O"

    let jogadorAtual = nomeJogador1
    let simboloAtual = simboloJogador1

    let contadorDeRodadas = 1
    let maximoDeRodadas = 9

    while(true) {

        // 1) Mostrar o estado do jogo
        // 2) Coletar o que usuário quer fazer
        // 3) Verificar se as jogadas resultaram num ganho ou perda
        // 4) Informar caso o jogador tenha ganhado ou perdido
        // 5) Trocar o jogador

        renderizarTela()
        const comandoDoJogador = lerComandoJogador(jogadorAtual) // na funcao o que importa eh a ordem que sao passados os parametros

        // Sair do jogo caso haja desistencia
        if (comandoDoJogador.toLowerCase() === "s") {
            console.log(`O ${jogadorAtual} desistiu, é um otário mermo.`)
            break
        }

        // Logica do jogo
        guardarComandoDoJogador(comandoDoJogador, simboloAtual)

        const jogadorVenceu = verificarSeJogadorAtualVenceu(simboloAtual)
        if (jogadorVenceu) {
            console.log(`\n\n${jogadorAtual} venceu, pelo menos não é um otário!\n\n`)
            break
        } else if (contadorDeRodadas >= maximoDeRodadas) {
            console.log(`\n\nDeu velha, seus otários!\n\n`)
            break
        }

        // Troca do jogador
        if (jogadorAtual === nomeJogador1){ 
            jogadorAtual = nomeJogador2
            simboloAtual = simboloJogador2
        } else {
            jogadorAtual = nomeJogador1
            simboloAtual = simboloJogador1
        }

        contadorDeRodadas++

    }

    renderizaTermino()
}

main()


// Next task
// 1) Validar quando um jogador já escolheu uma das opções: avisar o jogador e permitir que ele jogue novamente.
// 2) Validar se o que jogador escreveu é um comando válido. 