const prompt = require('prompt-sync')();

console.log("=== LISTA TELEFÔNICA ===\n");

let listaContatos = []; // Array para armazenar os contatos

while (true) {
    console.log("\nEscolha uma das opções abaixo:");
    console.log("1. Adicionar contato ➕");
    console.log("2. Buscar contato 🔍");
    console.log("3. Remover contato 🗑️");
    console.log("4. Listar contatos 📜");
    console.log("5. Sair ❌");

    let contato = parseInt(prompt("Digite o número da opção desejada: "));

    switch (contato) {
        case 1: {
            console.log("\nAdicionar contato ➕");
            let nome = prompt("Digite o nome do contato: ");
            let numero = prompt("Digite o número do contato: ");
            listaContatos.push({ nome, numero }); // Adicionando um objeto ao array
            console.log("Contato adicionado!\n");
        } break;

        case 2: {
            console.log("\nBuscar contato 🔍");
            let busca = prompt("Digite o nome do contato: ");
            let encontrado = listaContatos.find(contato => contato.nome === busca);
            if (encontrado) {
                console.log(`Contato encontrado: ${encontrado.nome} - ${encontrado.numero}`);
            } else {
                console.log("Contato não encontrado.");
            }
        } break;

        case 3: {
            console.log("\nRemover contato 🗑️");
            let nomeRemover = prompt("Digite o nome do contato a ser removido: ");
            let index = listaContatos.findIndex(contato => contato.nome === nomeRemover);
            if (index !== -1) {
                listaContatos.splice(index, 1);
                console.log("Contato removido!");
            } else {
                console.log("Contato não encontrado.");
            }
        } break;

        case 4: {
            console.log("\nLista de contatos 📜:");
            if (listaContatos.length === 0) {
                console.log("Nenhum contato na lista.");
            } else {
                listaContatos.forEach((contato, i) => {
                    console.log(`${i + 1}. Nome: ${contato.nome}, Número: ${contato.numero}`);
                });
            }
        } break;

        case 5:
            console.log("Saindo...");
            process.exit(); // Encerra o programa

        default:
            console.log("Opção inválida! Tente novamente.");
    }
}
