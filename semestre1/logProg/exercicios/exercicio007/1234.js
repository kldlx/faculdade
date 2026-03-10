const prompt = require ("prompt-sync")();

//1.1 Livros Tecnologia
{
    console.log("\nLivros Tecnologia\n")
    let livros = [
    {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Ficção", paginas: 96, avaliacao: 9 },
    {titulo: "O Dilema da Inovação", autor: "Clayton M. Christensen", categoria: "Tecnologia", paginas: 288, avaliacao: 8 },
    {titulo: "Neuromancer", autor: "William Gibson", categoria: "Ficção científica", paginas: 320, avaliacao: 8.5 },
    {titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance psicológico ", paginas: 256, avaliacao: 9.5 },
    {titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Tecnologia", paginas: 408, avaliacao: 8.2 }
]


let livrosTecnologia = livros.filter(livro => livro.categoria === "Tecnologia")

livrosTecnologia.forEach(livro => console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Categoria: ${livro.categoria} | Páginas: ${livro.paginas} | Avaliação: ${livro.avaliacao}`))}


//1.2 Nota média
{   console.log("\nNota média das avaliações\n")
    let livros = [
        {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Ficção", paginas: 96, avaliacao: 9 },
        {titulo: "O Dilema da Inovação", autor: "Clayton M. Christensen", categoria: "Tecnologia", paginas: 288, avaliacao: 8 },
        {titulo: "Neuromancer", autor: "William Gibson", categoria: "Ficção científica", paginas: 320, avaliacao: 8.5 },
        {titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance psicológico ", paginas: 256, avaliacao: 9.5 },
        {titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Tecnologia", paginas: 408, avaliacao: 8.2 }
    ] 

    let somaAvaliacoes = livros.reduce((acc, livro) => acc + livro.avaliacao, 0);
    let mediaAvaliacoes = somaAvaliacoes / livros.length
    console.log("Media das Avaliações: ", mediaAvaliacoes)
}

//1.3 Páginas

{
    console.log("\nLivros com 300 páginas ou mais\n")
    let livros = [
    {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Ficção", paginas: 96, avaliacao: 9 },
    {titulo: "O Dilema da Inovação", autor: "Clayton M. Christensen", categoria: "Tecnologia", paginas: 288, avaliacao: 8 },
    {titulo: "Neuromancer", autor: "William Gibson", categoria: "Ficção científica", paginas: 320, avaliacao: 8.5 },
    {titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance psicológico ", paginas: 256, avaliacao: 9.5 },
    {titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Tecnologia", paginas: 408, avaliacao: 8.2 }
] 

let paginas300 = livros.filter(livro => livro.paginas >= 300)
paginas300.forEach(livro => console.log(`Livros 300 páginas ou mais: Título: ${livro.titulo} | Autor: ${livro.autor} | Categoria: ${livro.categoria} | Páginas: ${livro.paginas} | Avaliação: ${livro.avaliacao}`))
}

//1.4 Avaliação maior que 8

{
    console.log("\nLivros com avaliação maior que 8\n")
    let livros = [
        {titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Ficção", paginas: 96, avaliacao: 6.7 },
        {titulo: "O Dilema da Inovação", autor: "Clayton M. Christensen", categoria: "Tecnologia", paginas: 288, avaliacao: 8 },
        {titulo: "Neuromancer", autor: "William Gibson", categoria: "Ficção científica", paginas: 320, avaliacao: 8.5 },
        {titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Romance psicológico ", paginas: 256, avaliacao: 7.5 },
        {titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Tecnologia", paginas: 408, avaliacao: 4.2 }
    ] 

    let avaliacao8 = livros.filter(livro => livro.avaliacao >= 8)
    avaliacao8.forEach(livro => console.log(`Título: ${livro.titulo} | Autor: ${livro.autor} | Categoria: ${livro.categoria} | Páginas: ${livro.paginas} | Avaliação: ${livro.avaliacao}`))
}

//2.1 Setor TI

{
    console.log("\nSetor do TI\n")
    let funcionarios = [
        {nome: "João", idade: 26, setor: "TI", salario: 6500, ativo: true},
        {nome: "Cleber", idade: 20, setor: "Financeiro", salario: 4200, ativo: false},
        {nome: "Kauã", idade: 23, setor: "TI", salario: 7800, ativo: true},
        {nome: "Gabriel", idade: 36, setor: "RH", salario: 3200, ativo: false},
        {nome: "Alexandre", idade: 18, setor: "Design", salario: 7300, ativo: true},
        {nome: "Davi", idade: 32, setor: "RH", salario: 2350, ativo: false}
    ]

    let funcionariosTI = funcionarios.filter(funcionario => funcionario.setor === "TI")
    funcionariosTI.forEach(funcionario => console.log(`Nome: ${funcionario.nome} | Idade: ${funcionario.idade} | Setor: ${funcionario.setor} | Salário: ${funcionario.salario} | Funcionário ativo: ${funcionario.ativo}`))
}

//2.2 Média Salarial

{
    console.log("\nMédia Salarial\n")
    let funcionarios = [
        {nome: "João", idade: 26, setor: "TI", salario: 6500, ativo: true},
        {nome: "Cleber", idade: 20, setor: "Financeiro", salario: 4200, ativo: false},
        {nome: "Kauã", idade: 23, setor: "TI", salario: 7800, ativo: true},
        {nome: "Gabriel", idade: 36, setor: "RH", salario: 3200, ativo: false},
        {nome: "Alexandre", idade: 18, setor: "Design", salario: 7300, ativo: true},
        {nome: "Davi", idade: 32, setor: "RH", salario: 2350, ativo: false}
    ]

    let somaSalario = funcionarios.reduce((acc, funcionario) => acc + funcionario.salario, 0)
    let mediaSalario = somaSalario / funcionarios.length
    console.log("Média Salarial: ", mediaSalario,"R$")
}

//2.3 Funcionários Inativos

{
    console.log("\nFuncionários Inativos\n")
    let funcionarios = [
        {nome: "João", idade: 26, setor: "TI", salario: 6500, ativo: true},
        {nome: "Cleber", idade: 20, setor: "Financeiro", salario: 4200, ativo: false},
        {nome: "Kauã", idade: 23, setor: "TI", salario: 7800, ativo: true},
        {nome: "Gabriel", idade: 36, setor: "RH", salario: 3200, ativo: false},
        {nome: "Alexandre", idade: 18, setor: "Design", salario: 7300, ativo: true},
        {nome: "Davi", idade: 32, setor: "RH", salario: 2350, ativo: false}
    ]

    let inativos = funcionarios.filter(funcionario => funcionario.ativo === false)
    inativos.forEach(funcionario =>  console.log(`Nome: ${funcionario.nome} | Idade: ${funcionario.idade} | Setor: ${funcionario.setor} | Salário: ${funcionario.salario} | Funcionário ativo: ${funcionario.ativo}`))
}

//2.4 Salários >= 4000

{
    console.log("\nSalários maiores ou iguais a 4000R$\n")
    let funcionarios = [
        {nome: "João", idade: 26, setor: "TI", salario: 6500, ativo: true},
        {nome: "Cleber", idade: 20, setor: "Financeiro", salario: 4200, ativo: false},
        {nome: "Kauã", idade: 23, setor: "TI", salario: 7800, ativo: true},
        {nome: "Gabriel", idade: 36, setor: "RH", salario: 3200, ativo: false},
        {nome: "Alexandre", idade: 18, setor: "Design", salario: 7300, ativo: true},
        {nome: "Davi", idade: 32, setor: "RH", salario: 2350, ativo: false}
    ]

    let salario4000 = funcionarios.filter(salario => salario.salario >= 4000)
    salario4000.forEach(salario => console.log(`Nome: ${salario.nome} | Idade: ${salario.idade} | Setor: ${salario.setor} | Salário: ${salario.salario} | Funcionário ativo: ${salario.ativo}`))
}