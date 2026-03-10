const prompt = require ('prompt-sync')();

// 1.  Lista de compras com forEach 
{   
    console.log("\n Questão 1\n")
    let produtos = ["Arroz", "Feijão", "Batata", "Carne", "Frango"];
    produtos.forEach(function(p){
        console.log(p);
    })
}

// 2. Nomes de Funcionários em maiúsculas com map 
{
    console.log("\n Questão 2\n")
    let nomes = ["Kauã", "Letícia", "Lucca", "Isabela", "Rafael"];
    let maiusculas = nomes.map(nomes => nomes.toUpperCase());
    maiusculas.forEach(function(m){
        console.log(m)
    })
}

// 3. Filtrando alunos aprovados com filter
{
    console.log("\n Questão 3\n")
    let notas = [5.5, 7.5, 6.7, 7.8, 8.9];
    let aprovados = notas.filter(notas => notas >=7);
    aprovados.forEach(function(a){
        console.log(a)
    })
}

// 4. Cálculo de salário comissionado com forEach 
{
    console.log("\n Questão 4\n")
    let vendas = [10.99, 25.00, 99.90, 20.00];
    let valorVenda = 0;
    let totalComissao = 0;
    let total = 0;

    vendas.forEach(function(valor){
        valorVenda += valor
    }); 
    console.log("O valor total de vendas foi de: ", valorVenda.toFixed(2));

    vendas.forEach(function(valor){
        totalComissao += valor * 0.1
    });
    console.log("O valor da comissão de 10% foi de: ", totalComissao.toFixed(2));

    vendas.forEach(function(valor){
        total += valor * 1.1;
    });
    console.log("O valor das vendas mais a comissão de 10% é de: ", total.toFixed(2))

}

// 5. Filtrando produtos em promoção com filter 
{
    console.log("\n Questão 5\n")
    let produtos = [
        {nome: " Lápis", valor: 5.00, promocao: false},
        {nome: " Apontador", valor: 6.50, promocao: true},
        {nome: " Borracha", valor: 3.80, promocao: false},
        {nome: " Tesoura", valor: 9.99, promocao: true}
    ]
    console.log("Produtos em promoção: \n")
    let promocao = produtos.filter(produtos => produtos.promocao);
    promocao.forEach(function(produtos){
        
        console.log(`-${produtos.nome} R$ ${produtos.valor}`);
    })
}