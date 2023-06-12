function atividadeOne() {
    const array = [2, 3, 5, 10, 7, 8, 90, 4, 2, 7, 8, 60, 45, 71, 23]
    const arrayPar = array.filter(num => num % 2 === 0)
    console.log(arrayPar)
}

atividadeOne()

function atividadeTwo() {
    const nomeFruta = [{nome: "banana", cor: "amarelo"}, {nome: "maca", cor: "vermelho"}, {nome: "uva", cor: "roxo"}]
    const soNome = nomeFruta.map(fruta => fruta.nome)
    console.log(soNome)
}

atividadeTwo()


/*
Atividade 3 
    const obj = {
        nome: "Pedro",
        idade: 20,
        curso: "TADS"  
    }
    Chaves: nome | idade | curso
    Valores: Pedro | 20 | TADS
*/

/*
Atividade 4
Single Page Application (SPA) é uma
aplicação web que se concentra em
fornecer uma experiência de usuário
fluida e responsiva, carregando apenas
uma página HTML e atualizando o
conteúdo dinamicamente por meio de
JavaScript, sem a necessidade de
carregar uma nova página.
*/

/*
Atividade 5
Next.js é uma estrutura para criar aplicativos da web. Com Next.js, você pode construir interfaces de usuário usando componentes React. Em seguida, o Next.js fornece estrutura, recursos e otimizações adicionais para seu aplicativo.
Alguns dos principais recursos do Next.js incluem: Roteamento, Renderização, Busca de Dados, Estilo, Otimizações, Datilografado e referência de API
*/